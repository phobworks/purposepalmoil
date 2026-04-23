<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// Get data
$data = json_decode(file_get_contents("php://input"), true);

$email = trim($data['email'] ?? '');
$website = $data['website'] ?? '';
$time = $data['time'] ?? 0;

// 🚨 1. Honeypot check
if (!empty($website)) {
    echo json_encode(["success" => false, "message" => "Spam detected"]);
    exit;
}

// 🚨 2. Time check (bots submit too fast)
if ($time < 3000) { // less than 3 seconds
    echo json_encode(["success" => false, "message" => "Too fast"]);
    exit;
}

// 🚨 3. Validate email
if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(["success" => false, "message" => "Invalid email"]);
    exit;
}

// 📩 Send email
$to = "phedwallace36th@gmail.com";
$subject = "New Newsletter Subscriber";

$message = "New subscriber:\n\n$email";

$headers = "From: no-reply@purposepalmoil.com";

if (mail($to, $subject, $message, $headers)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Email failed"]);
}
