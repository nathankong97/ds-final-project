USE dataFireFinal;
show databases;

CREATE TABLE Station(
    stationId INTEGER PRIMARY KEY NOT NULL ,
    stationName VARCHAR(5) NOT NULL
);

INSERT INTO Station ( stationId, stationName ) VALUES
(0, "All"),
(1, "1"),
(2, "2"),
(3, "3");



CREATE TABLE Member (
    memberGuid VARCHAR(64) PRIMARY KEY NOT NULL ,
    firstName VARCHAR(64) NOT NULL ,
    lastName VARCHAR(64) NOT NULL ,
    position VARCHAR(64) NOT NULL ,
    sexAtBirth CHAR(1) DEFAULT '',
    address VARCHAR(64) NOT NULL ,
    workPhone VARCHAR(25) NOT NULL ,
    radioNumber VARCHAR(25) NOT NULL ,
    stationNumber VARCHAR(25) references Station(stationId),
    isActive ENUM('Active', 'Not Active') Not Null default 'Not Active',
    dob DATE NOT NULL,
    startDate DATE DEFAULT NULL
);

INSERT INTO Member (memberGuid, firstName, lastName, position, sexAtBirth, address, workPhone, radioNumber, stationNumber,  isActive, dob, startDate) VALUES
("OFF-10000-2000-000", "Kathryn", "Pryde", "Chief","F", "1123 Xavier School Drive Watkinsville, GA 30677", "707-555-1234", "A-1", "0", "Active", "1977-10-06", "2000-09-01" ),
("OFF-10001-2001-001", "Piotr", " Rasputin", "Captain", "M", "A31 Mother Russia Road Seattle, WA 98133", "206-555-9876", "841", "3", "Active", "1987-04-01", "2007-03-11" ),
("OFF-10002-2002-002", "Warren", "Worthington III", "Firefighter/Paramedic", "M", "1140 Experiment Station Rd Watkinsville, GA 30677", "706-555-3945", "122", "1", "Active", "1994-12-14", "2015-06-20" );


CREATE TABLE Certification (
    certificationId VARCHAR(64) PRIMARY KEY NOT NULL ,
    certificationName VARCHAR(64) NOT NULL ,
    certifyingAgency VARCHAR(64) NOT NULL ,
    defaultExpirationPd VARCHAR(4) NOT NULL
);


INSERT INTO Certification(certificationId, certificationName,  certifyingAgency, defaultExpirationPd) VALUES
("C0001-X001-0001", "CPR", "CPR for Healthcare Providers/American Heart Association", "2"),
("C0002-X002-0002", "CPR", "CPR for the Professional Rescuer/American Red Cross", "2"),
("C0003-X003-0003", "Firefighter I", "Athens Technical College", "3"),
("C0004-X004-0004", "Firefighter I", "Ivy Technical College", "3"),
("C0005-X005-0005", "POST", "Georgia POST Academy", "5");



CREATE TABLE CertificationAssociation (
    certificationAssocId VARCHAR(64) PRIMARY KEY Not Null ,
    memberGuid VARCHAR(64) references Member(memberGuid),
    certificationId VARCHAR(64) references Certification(certificationId),
    renewedDate DATE DEFAULT NULL,
    expirationDate DATE DEFAULT NULL,
    overdue ENUM('Not Overdue', 'Expired','Enter Status') default 'Enter Status'
);

INSERT INTO CertificationAssociation (certificationAssocId, memberGuid,  certificationID,  renewedDate, expirationDate,  overdue) VALUES
("CA0000-A000-0001", "OFF-10000-2000-000", "C0001-X001-0001","2018-12-15","2021-12-15", "Not Overdue"),
("CA0000-A001-0002","OFF-10000-2000-000", "C0003-X003-0003","2016-04-01","2019-04-01", "Expired"),
("CA000-A002-0003", "OFF-10001-2001-001", "C0002-X002-0002","2019-07-15","2021-07-15", "Not Overdue"),
("CA0000-A003-0004", "OFF-10002-2002-002", "C0004-X004-0004","2017-01-07","2020-01-07", "Not Overdue"),
("CA0000-A004-0005", "OFF-10000-2000-000", "C0005-X005-0005","2019-04-03","2024-04-03","Not Overdue");

CREATE TABLE Login (
    userId VARCHAR(64) PRIMARY KEY Unique Not Null,
    memberGuid VARCHAR(64) references Member(memberGuid),
    password VARCHAR(64) NOT NULL
  );

INSERT INTO Login (userId, memberGuid, password) VALUES
("chiefkitty","OFF-10000-2000-000","WhatWalls?"),
("collosus","OFF-10001-2001-001","Xmen4life"),
("worthingtonIII","OFF-10002-2002-002","AngelorArchangel");
