<?php

use Ramsey\Uuid\Uuid;


$db = DbConnection::getConnection();


$stmt = $db->prepare(
  'INSERT INTO Certification
  (certificationID, certificationName, certifyingAgency, defaultExpirationPd)
  VALUES (?,?,?,?)'
);

$guid = Uuid::uuid4()->toString();

$stmt->execute([
  $guid, //ie 257......
  $_POST['certificationName'],
  $_POST['certifyingAgency'],
  $_POST['defaultExpirationPd']
]);


header('HTTP/1.1 303 See Other');
header('Location: ../certifications/?guid='.$guid);
