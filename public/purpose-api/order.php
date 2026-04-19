<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid data"]);
    exit;
}

$fullname = $data['fullname'];
$phone = $data['phone'];
$email = $data['email'];
$address = $data['address'];
$items = $data['items'];

if (!$fullname || !$phone || !$email || !$address) {
    echo json_encode(["success" => false, "message" => "Missing fields"]);
    exit;
}

// Build message
$message = "New Order\n\n";
$message .= "Name: $fullname\nPhone: $phone\nEmail: $email\nAddress: $address\n\n";

$message .= "Items:\n";

foreach ($items as $item) {
    if ($item['qty'] > 0) {
        $message .= $item['product'] . " - Qty: " . $item['qty'] . "\n";
    }
}

mail("your@email.com", "New Palm Oil Order", $message);

echo json_encode(["success" => true]);
