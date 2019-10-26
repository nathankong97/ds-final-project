<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

$stmt = $db->prepare('SELECT m.firstName, m.lastName, m.position, c.certificationName, ca.renewedDate,
cast(date_add(ca.renewedDate, INTERVAL CAST(c.defaultExpirationPd AS Unsigned) YEAR) as DATE)  as expirationDate,
Case When (date_add(ca.renewedDate, INTERVAL CAST(c.defaultExpirationPd AS Unsigned) YEAR)<=sysdate()) then "Expired" else "Not Expired" end as overdue
from Member as m, Certification as c, CertificationAssociation as ca
where m.memberGuid=ca.memberGuid and c.certificationId=ca.certificationID and c.certificationName = ?');

$stmt->execute(
  [
    $_POST['certificationName']
  ]
);

$ExpCerts = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($ExpCerts, JSON_PRETTY_PRINT);
// Step 4: Output
header('Content-Type: application/json');
echo $json;

header('HTTP/1.1 303 See Other');
