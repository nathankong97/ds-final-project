<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare('SELECT  distinct certificationName from Member as m, Certification as c, CertificationAssociation as ca
where m.memberGuid=ca.memberGuid and c.certificationId=ca.certificationID and date_add(ca.renewedDate, INTERVAL CAST(c.defaultExpirationPd AS Unsigned) YEAR)<=sysdate() order by certificationName ;');
$stmt->execute();
$ExpCertsFilter = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($ExpCertsFilter, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
