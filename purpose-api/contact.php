<?php
header("Content-Type: application/json");

// Allow CORS (for development)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Get JSON data
$data = json_decode(file_get_contents("php://input"), true);

$fullname = trim($data['fullname'] ?? '');
$email = trim($data['email'] ?? '');
$message = trim($data['message'] ?? '');
$captcha = $data['captcha'] ?? '';

// Validate
if (!$fullname || !$email || !$message) {
    echo json_encode(["success" => false, "message" => "All fields required"]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email"]);
    exit;
}

// Verify CAPTCHA
$secretKey = "6Lfnbb0sAAAAAM2_7eLTxXcHMvTaanvos8lmzF0T";

$verify = file_get_contents(
    "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$captcha"
);

$responseData = json_decode($verify);

if (!$responseData->success) {
    echo json_encode(["success" => false, "message" => "Captcha failed"]);
    exit;
}

// Send Email
$to = "phedwallace36th@email.com";
$subject = "New Contact Message - Purpose Palm Oil";

$body = "Name: $fullname\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message";

$headers = "From: $email";

// Send
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Email failed"]);
}
