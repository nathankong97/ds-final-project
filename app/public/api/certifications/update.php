<?php

$db = DbConnection::getConnection();

$stmt = $db->prepare(
  'UPDATE Certification
  SET certificationName = ?, certifyingAgency = ?, defaultExpirationPd = ? WHERE certificationId = ?'
);

$stmt->execute([
  $_POST['certificationName'],
  $_POST['certifyingAgency'],
  $_POST['defaultExpirationPd'],
  $_POST['certificationId']
]);

header('HTTP/1.1 303 See Other');
