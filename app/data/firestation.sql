USE dbMSIS-Fire-Final;

CREATE TABLE Member (
    memberGuid VARCHAR(64) PRIMARY KEY,
    firstName VARCHAR(64),
    lastName VARCHAR(64),
    position VARCHAR(64),
    sexAtBirth CHAR(1) DEFAULT,
    street VARCHAR(64),
    city VARCHAR(64),
    state VARCHAR(4),
    zipCode VARCHAR(10),
    workPhone VARCHAR(50),
    mobilePhone VARCHAR(50),
    radioNumber INTEGER(5),
    stationNumber INTEGER(5) FOREIGN KEY,
    isActive  : BOOL,
    dob DATE DEFAULT NULL,
    startDate DATE DEFAULT NULL
);

INSERT INTO Member (memberGuid, firstName, lastName, position,  street, city, state, zipCode, workPhone, mobilePhone, sexAtBirth, radioNumber, stationNumber,  isActive, dob, startDate) VALUES
("OFF-10000-2000-000", "Kathryn", "Pryde", "Chief","F", "1123 Xavier School Drive", "Watkinsville", "GA", "30677", "707-555-1234", "707-555-2345", "A-1", "0", "TRUE", "1977-10-06", "2000-09-01" ),
("OFF-10001-2001-001", "Piotr", " Rasputin", "Captain", "M", "A31 Mother Russia Road", "Seattle", "WA", "98133", "", "206-555-9876", "841", “8”, "TRUE", "1987-04-01", "2007-03-11" ),
("OFF-10002-2002-002", "Warren", "Worthington III", "Firefighter/Paramedic", "M", "1140 Experiment Station Rd", "Watkinsville", "GA", "30677", "(706) 555-3945", "", "122", "1", "TRUE", "1994-12-14", "2015-06-20" );


CREATE TABLE Certification (
    certificationId INTEGER PRIMARY KEY AUTO_INCREMENT,
    certificationName VARCHAR(64),
    certifyingAgency VARCHAR(64),
    defaultExpirationLen INTEGER(3)

);

INSERT INTO Certification(certificationId, certificationName,  certifyingAgency,  defaultExpiration ) VALUES
("C0001-X001-0001", "CPR", "CPR for Healthcare Providers/American Heart Association", "2"),
("C0002-X002-0002", "CPR", "CPR for the Professional Rescuer/American Red Cross", "2"),
("C0003-X003-0003", "Firefighter I", "Athens Technical College", "3"),
("C0004-X004-0004", "Firefighter I", "Ivy Technical College", "3"),
("C0005-X005-0005", "POST", "Georgia POST Academy", "5");


CREATE TABLE Station  (
    stationId INTEGER PRIMARY KEY AUTO_INCREMENT,
    stationName VARCHAR(64)
);




INSERT INTO Station ( stationId, stationName ) VALUES
("0", "All"),
("1", "1"),
("2", "2"),
("3", "3"),
("4", "4"),
("5", "5"),
("6", "6"),
("7", "7"),
("8", "8");




CREATE TABLE CertificationAssociation (
    certificationAssocId INTEGER PRIMARY KEY AUTO_INCREMENT,
    memberGuid VARCHAR(64) FOREIGN KEY,
    certificationId  VARCHAR(64) FOREIGN KEY,
    renewedDate DATE DEFAULT NULL,
    expirationDate DATE DEFAULT NULL,
    overdue('Not Overdue', 'Expired')

);

INSERT INTO CertificationAssociation (certificationAssocId, memberGuid,  certificationID,  renewedDate, expirationDate,  overdue  ) VALUES
("CA0000-A000-0001", "OFF-10000-2000-000", "C0001-X001-0001","2018-12-15","2021-12-15", "Not Overdue"),
("CA0000-A001-0002","OFF-10000-2000-000", "C0003-X003-0003","2016-04-01","2019-04-01", "Overdue"),
("CA000-A002-0003", "OFF-10001-2001-001", "C0002-X002-0002","2019-07-15”,"2021-07-15", Not Overdue"),
("CA0000-A003-0004", "OFF-10002-2002-002", "C0004-X004-0004","2017-01-07","2020-01-07", "Not Overdue"),
("CA0000-A004-0005", "OFF-10000-2000-000", "C0005-X005-0005","2019-04-03","2024-04-03","Not Overdue");

Arlie, I think each of us has to submit at least 1 commit. If you finish this, could you put this to the repo and push it? Let me know if you have any questions about GitHub.
