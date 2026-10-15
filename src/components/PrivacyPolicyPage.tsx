import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Database, 
  Server, 
  UserCheck, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Home, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Cookie,
  RefreshCw,
  ArrowRight,
  Printer
} from 'lucide-react';
import { AppPage } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: AppPage) => void;
  onOpenBooking: () => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [activeSection, setActiveSection] = useState<string>('intro');

  const sections = [
    { id: 'intro', label: '1. Introduction & Overview' },
    { id: 'collection', label: '2. Information We Collect' },
    { id: 'usage', label: '3. How We Use Your Data' },
    { id: 'cookies', label: '4. Cookies & Pixel Tracking' },
    { id: 'sharing', label: '5. Third-Party Disclosures' },
    { id: 'security', label: '6. Data Storage & Security' },
    { id: 'dpdp-gdpr', label: '7. DPDP Act (India) & GDPR Rights' },
    { id: 'retention', label: '8. Data Retention Policy' },
    { id: 'children', label: "9. Children's Privacy" },
    { id: 'grievance', label: '10. Grievance Officer & Contact' },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-24 pb-20 bg-[#F5FAFD] min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <div className="flex items-center gap-2 text-xs text-[#8295A8]">
          <button 
            onClick={() => onNavigate('overview')} 
            className="hover:text-[#07579D] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3 h-3 text-[#8295A8]" />
          <span className="text-[#07579D] font-semibold">Privacy Policy</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#020617] via-[#071E42] to-[#07579D] p-8 sm:p-12 text-white border border-white/10 shadow-xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#09B5E5]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 bg-[#078CCB]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-[#09B5E5] font-semibold mb-6">
              <ShieldCheck className="w-4 h-4 text-[#09B5E5]" />
              <span>Legal Transparency & Compliance</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
              Privacy Policy & Data Protection
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              At <strong className="text-white">Groowth Mantra</strong>, we take your personal and business data privacy with the utmost seriousness. This policy outlines how we collect, handle, store, and safeguard your information in full adherence to the <strong className="text-[#09B5E5]">Digital Personal Data Protection (DPDP) Act, 2023</strong> of India, the Information Technology Act, 2000, and global regulations including GDPR.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 border-t border-white/10">
              <div className="flex items-center gap-1.5">
                <RefreshCw className="w-3.5 h-3.5 text-[#09B5E5]" />
                <span>Last Updated: <strong>October 2026</strong></span>
              </div>
              <span className="text-white/30">•</span>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#25D366]" />
                <span>256-Bit SSL/TLS Encryption Protected</span>
              </div>
              <span className="text-white/30">•</span>
              <button 
                onClick={handlePrint}
                className="inline-flex items-center gap-1 text-[#09B5E5] hover:text-white transition-colors cursor-pointer"
                title="Print Policy"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Highlights Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#DCEAF3] shadow-xs hover:border-[#078CCB] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5FB] text-[#07579D] flex items-center justify-center mb-3">
              <Lock className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-[#031A3D] mb-1">Zero Data Selling</h2>
            <p className="text-xs text-[#475569] leading-relaxed">
              We never sell, rent, or lease your business details or client dossiers to third-party data brokers.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#DCEAF3] shadow-xs hover:border-[#078CCB] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5FB] text-[#07579D] flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-[#031A3D] mb-1">DPDP 2023 Compliant</h2>
            <p className="text-xs text-[#475569] leading-relaxed">
              Strict compliance with India’s Digital Personal Data Protection Act and international GDPR privacy frameworks.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#DCEAF3] shadow-xs hover:border-[#078CCB] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5FB] text-[#07579D] flex items-center justify-center mb-3">
              <Cookie className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-[#031A3D] mb-1">Transparent Tracking</h2>
            <p className="text-xs text-[#475569] leading-relaxed">
              Clear consent controls for Meta Pixel, Google Tag Manager, and conversion APIs with easy opt-outs.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#DCEAF3] shadow-xs hover:border-[#078CCB] transition-all">
            <div className="w-10 h-10 rounded-xl bg-[#EAF5FB] text-[#07579D] flex items-center justify-center mb-3">
              <UserCheck className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold text-[#031A3D] mb-1">Full Data Control</h2>
            <p className="text-xs text-[#475569] leading-relaxed">
              Request a full export or immediate erasure of your submitted leads and audit data within 48 business hours.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Sidebar Table of Contents */}
          <div className="lg:col-span-4 sticky top-28 hidden lg:block">
            <div className="bg-white p-6 rounded-2xl border border-[#DCEAF3] shadow-sm">
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#DCEAF3]">
                <FileText className="w-4 h-4 text-[#078CCB]" />
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#031A3D]">Contents</h3>
              </div>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center justify-between ${
                      activeSection === section.id 
                        ? 'bg-[#EAF5FB] text-[#07579D] font-bold border-l-2 border-[#078CCB]' 
                        : 'text-[#475569] hover:bg-slate-50 hover:text-[#031A3D]'
                    }`}
                  >
                    <span className="truncate">{section.label}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${activeSection === section.id ? 'text-[#078CCB] translate-x-0.5' : 'text-slate-400'}`} />
                  </button>
                ))}
              </nav>

              {/* Dedicated Support Card */}
              <div className="mt-6 pt-6 border-t border-[#DCEAF3] bg-gradient-to-br from-[#F5FAFD] to-[#EAF5FB] p-4 rounded-xl border border-[#DCEAF3]/60">
                <h4 className="text-xs font-bold text-[#031A3D] mb-1">Data Privacy Questions?</h4>
                <p className="text-[11px] text-[#475569] mb-3">
                  Reach out directly to our Grievance Officer in Noida.
                </p>
                <a
                  href="mailto:info@groowthmantra.com?subject=Privacy%20Inquiry%20-%20Groowth%20Mantra"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#07579D] hover:text-[#078CCB] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@groowthmantra.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Main Legal Prose */}
          <div className="lg:col-span-8 space-y-8">

            {/* Section 1: Intro */}
            <section id="intro" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                1. Introduction & Who We Are
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-3 leading-relaxed">
                <p>
                  Welcome to <strong>Groowth Mantra</strong> (&ldquo;Groowth Mantra&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a premier full-stack digital marketing agency, performance engineering firm, web ecosystems developer, and digital event organizer operating from <strong>Block A-26, Sector 4, Noida, Uttar Pradesh 201301, India</strong>.
                </p>
                <p>
                  We operate the website <a href="https://groowthmantra.com" className="text-[#078CCB] font-semibold hover:underline">groowthmantra.com</a> and provide performance marketing services (Google Ads, Meta Ads, SEO, CRO), custom web and eCommerce application development (Shopify, WordPress, Next.js, Headless), influencer & social media labs, and digital event management.
                </p>
                <p>
                  This Privacy Policy applies to all individuals who browse our website, request our free 48-point growth audits, book strategy calls, communicate via WhatsApp or contact forms, or enter into client agreements with Groowth Mantra.
                </p>
              </div>
            </section>

            {/* Section 2: Information We Collect */}
            <section id="collection" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                2. Information We Collect
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-4 leading-relaxed">
                <p>
                  We only gather information necessary to deliver high-performance growth engineering and communicate effectively with our prospects and clients. Information is collected through the following channels:
                </p>

                <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-[#E2E8F0] space-y-3">
                  <h3 className="font-bold text-[#031A3D] text-sm flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#07579D]" />
                    A. Information You Voluntarily Provide to Us
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Contact Credentials:</strong> Full name, official business email address, WhatsApp/mobile phone number.</li>
                    <li><strong>Company & Brand Dossiers:</strong> Company name, website URL, industry sector, target geographic markets.</li>
                    <li><strong>Growth Audit Parameters:</strong> Monthly ad spend budget, monthly revenue tiers, key conversion hurdles, and selected service packages.</li>
                    <li><strong>Enquiry & Communication Records:</strong> Notes and requirements submitted via our contact forms, audit generator, or WhatsApp dialogues.</li>
                  </ul>
                </div>

                <div className="bg-[#F8FAFC] p-4 sm:p-5 rounded-xl border border-[#E2E8F0] space-y-3">
                  <h3 className="font-bold text-[#031A3D] text-sm flex items-center gap-2">
                    <Server className="w-4 h-4 text-[#07579D]" />
                    B. Information Collected Automatically
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
                    <li><strong>Device & Network Data:</strong> IP address, operating system, browser type and version, language preferences.</li>
                    <li><strong>Interaction & Telemetry Data:</strong> Pages visited, scroll depth, time spent per case study or service pillar, referral URLs, and click patterns.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Usage of Data */}
            <section id="usage" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 3
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                3. How We Use Your Data & Legal Basis
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-3 leading-relaxed">
                <p>
                  We utilize your data strictly for legitimate business growth purposes, including:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#EAF5FB]/60 border border-[#DCEAF3] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#031A3D] text-xs">Generating Audits & Projections:</strong>
                      <p className="text-[11px] text-[#475569] mt-0.5">Calculating ROAS, identifying funnel leakages, and creating custom 90-day growth blueprints.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#EAF5FB]/60 border border-[#DCEAF3] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#031A3D] text-xs">Consultation Scheduling:</strong>
                      <p className="text-[11px] text-[#475569] mt-0.5">Arranging Zoom or Google Meet discovery calls and answering project enquiries via phone/WhatsApp.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#EAF5FB]/60 border border-[#DCEAF3] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#031A3D] text-xs">Client Command Center:</strong>
                      <p className="text-[11px] text-[#475569] mt-0.5">Providing secure access to real-time performance dashboards, ad spend trackers, and deliverables.</p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#EAF5FB]/60 border border-[#DCEAF3] flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#078CCB] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#031A3D] text-xs">Security & Spam Prevention:</strong>
                      <p className="text-[11px] text-[#475569] mt-0.5">Mitigating DDOS, bot submissions, and honeypot trap validation on form submissions.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Cookies & Pixels */}
            <section id="cookies" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 4
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                4. Cookies, Pixels & Tracking Technologies
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-3 leading-relaxed">
                <p>
                  As an advanced performance agency, we utilize first-party cookies, Google Analytics 4 (GA4), Meta Pixel, and Server-Side Conversion APIs (CAPI) to measure traffic quality, campaign attribution, and optimize user experience:
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-[#031A3D] text-xs">Essential & Session Cookies:</strong>
                    <span className="text-xs text-[#475569] block mt-0.5">Required for page navigation, session persistence, and client portal authentication.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-[#031A3D] text-xs">Analytical & Performance Cookies:</strong>
                    <span className="text-xs text-[#475569] block mt-0.5">Google Analytics 4 cookies to analyze traffic volume, average session duration, and geographical breakdown.</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <strong className="text-[#031A3D] text-xs">Advertising & Retargeting Pixels:</strong>
                    <span className="text-xs text-[#475569] block mt-0.5">Meta (Facebook/Instagram), Google Display, and LinkedIn insight tags to show relevant case studies and agency offerings to past visitors.</span>
                  </div>
                </div>
                <p className="text-xs text-[#8295A8] italic">
                  You can disable cookies at any time via your browser settings (Chrome, Safari, Firefox, Edge). Note that disabling cookies may affect certain interactive site features such as the ROI calculator.
                </p>
              </div>
            </section>

            {/* Section 5: Third-Party Disclosures */}
            <section id="sharing" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 5
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                5. Third-Party Sharing & Platform Partners
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-3 leading-relaxed">
                <p>
                  <strong>We do not sell, rent, trade, or monetize your personal or business data.</strong> Data is shared only with trusted technology infrastructure providers under strict non-disclosure and processing agreements:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Cloud Infrastructure & Hosting:</strong> Vercel, AWS, Google Cloud Platform (GCP) for secure website delivery and server runtime.</li>
                  <li><strong>Communication & CRM:</strong> Twilio, WhatsApp Business Cloud API, Resend/SendGrid, Google Workspace for direct email and message dispatch.</li>
                  <li><strong>Advertising Networks:</strong> Google Ads and Meta Business Manager solely for attribution and aggregated campaign reporting.</li>
                  <li><strong>Legal & Regulatory Mandates:</strong> Where required by applicable Indian law, court order, or government authority pursuant to the Information Technology Act.</li>
                </ul>
              </div>
            </section>

            {/* Section 6: Security */}
            <section id="security" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 6
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                6. Data Storage, Security & International Transfers
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-3 leading-relaxed">
                <p>
                  We maintain industry-standard physical, electronic, and administrative safeguards to protect your personal data from unauthorized access, modification, disclosure, or loss:
                </p>
                <div className="bg-[#EAF5FB]/40 border border-[#DCEAF3] p-4 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#031A3D]">
                    <Lock className="w-4 h-4 text-[#078CCB]" />
                    <span>Cryptographic Protection</span>
                  </div>
                  <p className="text-xs text-[#475569]">
                    All data transmitted between your browser and our servers is encrypted using modern 256-bit TLS (Transport Layer Security) encryption. Database connections and client storage use AES-256 standards.
                  </p>
                </div>
                <p>
                  Internal access to client performance data, ad accounts, and audit submissions is restricted solely to authorized growth strategists and engineers bound by strict confidentiality agreements.
                </p>
              </div>
            </section>

            {/* Section 7: DPDP Act 2023 & GDPR */}
            <section id="dpdp-gdpr" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 7
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                7. India DPDP Act 2023 & GDPR Compliance
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-3 leading-relaxed">
                <p>
                  In compliance with India’s <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> as well as the EU/UK <strong>General Data Protection Regulation (GDPR)</strong>, you are entitled to comprehensive Data Principal rights:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-[#031A3D] text-xs block mb-1">Right to Access:</strong>
                    <span className="text-[11px] text-[#475569]">Request a summary of what personal data we hold about you and how it is processed.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-[#031A3D] text-xs block mb-1">Right to Correction & Updating:</strong>
                    <span className="text-[11px] text-[#475569]">Request rectifications of any outdated or inaccurate business and contact records.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-[#031A3D] text-xs block mb-1">Right to Erasure (To Be Forgotten):</strong>
                    <span className="text-[11px] text-[#475569]">Request the permanent removal of your contact numbers, audit histories, or messages.</span>
                  </div>
                  <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                    <strong className="text-[#031A3D] text-xs block mb-1">Right to Withdraw Consent:</strong>
                    <span className="text-[11px] text-[#475569]">Opt out of marketing communications, WhatsApp updates, or retargeting ad campaigns at any time.</span>
                  </div>
                </div>

                <p className="text-xs text-[#07579D] pt-2 font-medium">
                  To exercise any of these rights, email us at <a href="mailto:info@groowthmantra.com" className="underline font-bold">info@groowthmantra.com</a> with the subject line &ldquo;Data Rights Request&rdquo;. We fulfill all valid requests within 48 to 72 business hours.
                </p>
              </div>
            </section>

            {/* Section 8: Retention */}
            <section id="retention" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 8
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                8. Data Retention Policy
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-3 leading-relaxed">
                <p>
                  We retain your personal data only as long as necessary to fulfill the purposes for which it was obtained:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li><strong>Enquiry & Audit Submissions:</strong> Retained for 12 months for follow-up consults, after which they are securely scrubbed or anonymized.</li>
                  <li><strong>Active Client Accounts:</strong> Retained throughout the contractual engagement and for 3 years post-termination to satisfy statutory tax and GST compliance in India.</li>
                  <li><strong>Web Analytics & Pixels:</strong> Aggregated analytical logs are retained in accordance with Google Analytics default settings (up to 14 months).</li>
                </ul>
              </div>
            </section>

            {/* Section 9: Children's Privacy */}
            <section id="children" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 9
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                9. Children&apos;s Privacy
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-3 leading-relaxed">
                <p>
                  Our services, digital performance solutions, and websites are designed exclusively for businesses and adults aged 18 and older. We do not knowingly solicit or collect personal identifiable information from children under 18 years of age.
                </p>
              </div>
            </section>

            {/* Section 10: Grievance Officer & Contact */}
            <section id="grievance" className="bg-white p-6 sm:p-8 rounded-2xl border border-[#DCEAF3] shadow-xs">
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#078CCB] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#078CCB]" />
                Section 10
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#031A3D] mb-4">
                10. Grievance Officer & Official Contact Details
              </h2>
              <div className="text-xs sm:text-sm text-[#475569] space-y-4 leading-relaxed">
                <p>
                  Pursuant to the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules and the DPDP Act 2023, the designated Grievance Officer for Groowth Mantra is:
                </p>

                {/* Grievance Card */}
                <div className="bg-gradient-to-br from-[#020617] to-[#071E42] text-white p-6 rounded-2xl border border-white/10 shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#078CCB] flex items-center justify-center text-white font-bold">
                      GM
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Data Protection Grievance Officer</h4>
                      <p className="text-xs text-[#09B5E5]">Groowth Mantra Legal & Privacy Cell</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300 pt-2 border-t border-white/10">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#09B5E5] flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">Office Address:</strong>
                        Block A-26, Sector 4, Noida,<br />
                        Uttar Pradesh 201301, India
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#09B5E5] flex-shrink-0" />
                        <div>
                          <strong className="text-white">Phone: </strong>
                          <a href="tel:+918505866668" className="hover:text-white transition-colors underline">+91 85058 66668</a>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-[#09B5E5] flex-shrink-0" />
                        <div>
                          <strong className="text-white">Email: </strong>
                          <a href="mailto:info@groowthmantra.com" className="hover:text-white transition-colors underline">info@groowthmantra.com</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-slate-400">
                    Response Timeline: We acknowledge all grievance notifications within 24 hours and resolve enquiries within 48 to 72 business hours.
                  </div>
                </div>
              </div>
            </section>

            {/* Bottom Call to Action */}
            <div className="bg-gradient-to-r from-[#07579D] to-[#078CCB] text-white p-8 rounded-2xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1">Ready to Scale Your Brand Securely?</h3>
                <p className="text-xs sm:text-sm text-white/90">
                  Book a confidential 1-on-1 strategy call with our senior growth leaders.
                </p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-white text-[#07579D] font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
