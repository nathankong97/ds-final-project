<?php
use Ramsey\Uuid\Uuid;

$db = DbConnection::getConnection();
$guid = Uuid::uuid4()->toString();

$stmt = $db->prepare(
  "SELECT memberGuid FROM Member WHERE concat(firstName, ' ', lastName) = ?");

$stmt->execute([
  $_POST['member']
]);
$member = $stmt->fetchAll();
$json = json_encode($member[0], JSON_PRETTY_PRINT);

$stmt2 = $db->prepare(
  "SELECT certificationId FROM Certification WHERE concat(certificationName, ' | ', certifyingAgency) = ?");

$stmt2->execute([
  $_POST['cert']
]);
$cert = $stmt2->fetchAll();
$json2 = json_encode($cert[0], JSON_PRETTY_PRINT);

$result = json_decode($json);
$result2 = json_decode($json2);

$stmt3 = $db->prepare(
  "INSERT INTO CertificationAssociation
  (certificationAssocId, memberGuid, certificationId, renewedDate)
  VALUES (?, ?, ?, ?)");

$stmt3->execute([
  $guid,
  $result->memberGuid,
  $result2->certificationId,
  $_POST['date']
]);

header('HTTP/1.1 303 See Other');
