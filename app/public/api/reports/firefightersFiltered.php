<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();
//console.log("connection works")
// Step 2: Create & run the query
$stmt = $db->prepare('SELECT * FROM Member where stationNumber =?');
//console.log("query prepared")
$stmt->execute(
  [
    $_POST['stationNumber']
  ]
);
//console.log("query executed")
//$Firefighters = $stmt->fetchAll();
console.log("query fetched")
// Step 3: Convert to JSON
$json = json_encode($Firefighters, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
