<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE Member
  SET firstName = ?, lastName = ?, position = ?, sexAtBirth = ?, address = ?, workPhone = ?, radioNumber = ?, stationNumber = ?,
  isActive = ?, dob = ?, startDate = ?, emailAddress = ? WHERE memberGuid = ?'
);

$stmt->execute([
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
  $_POST['startDate'],
  $_POST['emailAddress'],
  $_POST['memberGuid']
]);

header('HTTP/1.1 303 See Other');
