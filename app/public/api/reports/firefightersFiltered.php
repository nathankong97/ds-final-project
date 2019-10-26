<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT * FROM Member where radioNumber =? AND stationNumber =?');
$stmt->execute(
  [
    $_POST['radioNumber'],
    $_POST['stationNumber']
  ]
);

$Firefighters = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($Firefighters, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;

header('HTTP/1.1 303 See Other');
