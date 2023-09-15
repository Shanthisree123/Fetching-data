<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
$data = file_get_contents('data.json');
$userData = json_decode($data, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = file_get_contents('php://input');
    $newUser = json_decode($postData, true);
    $userData[] = $newUser;

    // Store updated data in JSON format
    file_put_contents('data.json', json_encode($userData));

    // Send a response if needed
    echo json_encode(['message' => 'Data received successfully']);
}
?>

</body>
</html>