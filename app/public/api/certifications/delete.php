<?php


$db = DbConnection::getConnection();
$stmt = $db->prepare(
  'DELETE FROM Certification
  WHERE certificationId = ?');


  $stmt->execute([
    $_POST['certificationId']
  ]);

  header('HTTP/1.1 303 See Other');
