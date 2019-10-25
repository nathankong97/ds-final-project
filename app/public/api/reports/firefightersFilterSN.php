<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT distinct stationNumber from Member order by stationNumber;');
$stmt->execute();
$FirefightersFilterSN = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($FirefightersFilterSN, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
