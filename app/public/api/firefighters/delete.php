<?php
//Step 0:Validate incoming datase (Arlie entered)
use Ramsey\Uuid\Uuid;

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Member
  (memberGuid, firstName, lastName, position, sexAtBirth, address, workPhone, radioNumber, stationNumber, isActive, dob, startDate)
  VALUES (?,?,?,?,?,?,?,?,?,?,?,?)'
);

$guid = Uuid::uuid4()->toString();

$stmt->execute([
  $guid, //ie 257......
  $_POST['firstName'],
  $_POST['lastName'],
  $_POST['position'],
  $_POST['sexAtBirth'],
  $_POST['address'],
  $_POST['workPhone'],
  $_POST['radioNumber'],
  $_POST['stationNumber'],
  $_POST['isActive'],
  $_POST['dob'],
  $_POST['startDate']
]);

//Step 4: fann_descale_output
header('HTTP/1.1 303 See Other');
header('Location: ../firefighters/?guid='.$guid);
