import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Body parser middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // In-memory submissions store for demonstration & CRM verification
  const submissions: Array<{
    id: string;
    timestamp: string;
    fullName: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    budget: string;
    message: string;
    status: string;
  }> = [];

  // 1. Health check route
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      service: 'Groowth Mantra API',
      timestamp: new Date().toISOString(),
      recipientEmail: 'info@groowthmantra.com'
    });
  });

  // 2. Contact form submission route
  app.post(['/api/contact', '/api/send-mail'], (req, res) => {
    try {
      const {
        full_name,
        name,
        email,
        phone,
        company,
        service,
        budget,
        message,
        honeypot,
        website_url_hp
      } = req.body;

      // 1. Anti-spam honeypot check
      if (honeypot || website_url_hp) {
        console.warn('[Anti-Spam] Honeypot triggered, rejecting silently.');
        return res.status(200).json({
          success: true,
          message: 'Thank you! Your enquiry has been received.'
        });
      }

      const clientName = (full_name || name || '').trim();
      const clientEmail = (email || '').trim();
      const clientPhone = (phone || '').trim();

      // 2. Strict validation
      const errors: string[] = [];
      if (!clientName) errors.push('Full Name is required.');
      if (!clientEmail || !clientEmail.includes('@') || !clientEmail.includes('.')) {
        errors.push('A valid email address is required.');
      }
      if (!clientPhone) errors.push('Phone number is required.');

      if (errors.length > 0) {
        return res.status(400).json({
          success: false,
          message: errors.join(' '),
          errors
        });
      }

      // 3. Log lead to system & create submission record
      const submissionRecord = {
        id: 'LEAD-' + Date.now().toString(36).toUpperCase(),
        timestamp: new Date().toISOString(),
        fullName: clientName,
        email: clientEmail,
        phone: clientPhone,
        company: company || 'Not specified',
        service: service || 'General Growth Enquiry',
        budget: budget || 'Not specified',
        message: message || 'No extra notes provided.',
        status: 'received'
      };

      submissions.unshift(submissionRecord);
      console.log(`[Lead Created] ID: ${submissionRecord.id} | Name: ${clientName} | Email: ${clientEmail} | Phone: ${clientPhone} | Service: ${submissionRecord.service} | Target: info@groowthmantra.com`);

      // 4. Return success response
      return res.status(200).json({
        success: true,
        message: 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.',
        leadId: submissionRecord.id,
        recipient: 'info@groowthmantra.com',
        timestamp: submissionRecord.timestamp
      });
    } catch (err: any) {
      console.error('[Contact API Error]:', err);
      return res.status(500).json({
        success: false,
        message: 'Server error processing your request. Please message us on WhatsApp directly for immediate assistance.'
      });
    }
  });

  // 3. Get recent submissions for demo/portal check
  app.get('/api/leads', (req, res) => {
    res.json({
      success: true,
      total: submissions.length,
      leads: submissions.slice(0, 10)
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Groowth Mantra Server running on http://localhost:${PORT}`);
  });
}

startServer();
