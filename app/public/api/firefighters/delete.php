<?php


$db = DbConnection::getConnection();
$stmt = $db->prepare(
  'DELETE FROM Member
  WHERE memberGuid = ?');


  $stmt->execute([
    $_POST['memberGuid']
  ]);

  header('HTTP/1.1 303 See Other');
