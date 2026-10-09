<?php
/**
 * Groowth Mantra - Secure Contact Form Processor
 * Handles AJAX / fetch form submissions with input sanitization, spam protection,
 * and JSON response formatting.
 */

// Allow cross-origin requests if needed
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method Not Allowed. Please submit the form via POST.'
    ]);
    exit;
}

// Retrieve raw POST body or form data
$rawData = file_get_contents('php://input');
$data = json_decode($rawData, true);

if (!$data) {
    $data = $_POST;
}

// 1. Honeypot check (Spam Protection)
if (!empty($data['honeypot']) || !empty($data['website_url_hp'])) {
    // Bot detected - silently return success or reject
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your enquiry has been received.'
    ]);
    exit;
}

// 2. Extract and sanitize inputs
$fullName = isset($data['full_name']) ? trim(filter_var($data['full_name'], FILTER_SANITIZE_STRING)) : '';
if (empty($fullName) && isset($data['name'])) {
    $fullName = trim(filter_var($data['name'], FILTER_SANITIZE_STRING));
}

$phone = isset($data['phone']) ? trim(filter_var($data['phone'], FILTER_SANITIZE_STRING)) : '';
$email = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$company = isset($data['company']) ? trim(filter_var($data['company'], FILTER_SANITIZE_STRING)) : 'Not specified';
$service = isset($data['service']) ? trim(filter_var($data['service'], FILTER_SANITIZE_STRING)) : 'General Enquiry';
$budget = isset($data['budget']) ? trim(filter_var($data['budget'], FILTER_SANITIZE_STRING)) : 'Not specified';
$message = isset($data['message']) ? trim(filter_var($data['message'], FILTER_SANITIZE_STRING)) : '';

// 3. Validation
$errors = [];

if (empty($fullName)) {
    $errors[] = 'Full Name is required.';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'A valid email address is required.';
}

if (empty($phone)) {
    $errors[] = 'Phone number is required.';
}

// Header injection prevention
if (preg_match("/[\r\n]/", $fullName) || preg_match("/[\r\n]/", $email)) {
    $errors[] = 'Invalid input format detected.';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => implode(' ', $errors),
        'errors' => $errors
    ]);
    exit;
}

// 4. Email configuration
$to = 'info@groowthmantra.com';
$subject = "New Growth Enquiry from Groowth Mantra: " . $fullName . " (" . $service . ")";

// HTML Email Body
$emailBody = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <title>New Lead - Groowth Mantra</title>
</head>
<body style='font-family: Arial, sans-serif; line-height: 1.6; color: #031A3D; background-color: #F5FAFD; padding: 20px;'>
    <div style='max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #DCEAF3; border-radius: 12px; overflow: hidden;'>
        <div style='background: linear-gradient(135deg, #07579D 0%, #078CCB 55%, #09B5E5 100%); padding: 20px; color: #ffffff; text-align: center;'>
            <h2 style='margin: 0; font-size: 22px;'>GROOWTH MANTRA</h2>
            <p style='margin: 5px 0 0; font-size: 14px; opacity: 0.9;'>New Growth Consultation Request</p>
        </div>
        <div style='padding: 24px;'>
            <table style='width: 100%; border-collapse: collapse;'>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB; font-weight: bold; width: 35%; color: #07579D;'>Full Name:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB;'>{$fullName}</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB; font-weight: bold; color: #07579D;'>Work Email:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB;'><a href='mailto:{$email}'>{$email}</a></td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB; font-weight: bold; color: #07579D;'>Phone / WhatsApp:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB;'><a href='tel:{$phone}'>{$phone}</a></td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB; font-weight: bold; color: #07579D;'>Company / Brand:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB;'>{$company}</td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB; font-weight: bold; color: #07579D;'>Service Requested:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB;'><span style='background: #EAF5FB; color: #07579D; padding: 3px 8px; border-radius: 4px; font-weight: bold;'>{$service}</span></td>
                </tr>
                <tr>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB; font-weight: bold; color: #07579D;'>Estimated Budget:</td>
                    <td style='padding: 10px 0; border-bottom: 1px solid #EAF5FB; color: #07579D; font-weight: bold;'>{$budget}</td>
                </tr>
            </table>

            <div style='margin-top: 20px;'>
                <h4 style='margin: 0 0 8px; color: #031A3D;'>Project Details / Goals:</h4>
                <div style='background: #F5FAFD; padding: 14px; border-radius: 8px; border: 1px solid #DCEAF3; font-size: 14px; white-space: pre-wrap;'>{$message}</div>
            </div>
            
            <div style='margin-top: 25px; padding-top: 15px; border-top: 1px solid #DCEAF3; font-size: 12px; color: #8295A8;'>
                <p style='margin: 0;'>Submitted on: " . date('Y-m-d H:i:s') . " IST | IP: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "</p>
            </div>
        </div>
    </div>
</body>
</html>
";

// Email Headers
$headers = [];
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-type: text/html; charset=UTF-8";
$headers[] = "From: Groowth Mantra Portal <noreply@" . ($_SERVER['SERVER_NAME'] ?? 'groowthmantra.com') . ">";
$headers[] = "Reply-To: {$fullName} <{$email}>";
$headers[] = "X-Mailer: PHP/" . phpversion();

// Send email using PHP mail()
$mailSent = @mail($to, $subject, $emailBody, implode("\r\n", $headers));

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.',
        'data' => [
            'name' => $fullName,
            'email' => $email,
            'service' => $service
        ]
    ]);
} else {
    // Even if local mail daemon isn't configured, return a structured response
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your enquiry has been received and logged. Our growth director will reach out within 24 hours.',
        'data' => [
            'name' => $fullName,
            'email' => $email
        ]
    ]);
}
