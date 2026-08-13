DROP DATABASE AirportDB;

CREATE DATABASE AirportDB;
USE AirportDB;
CREATE TABLE Visitors (
    visitor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    id_type VARCHAR(30),
    id_number VARCHAR(30) UNIQUE
);
CREATE TABLE Flights (
    flight_id INT PRIMARY KEY AUTO_INCREMENT,
    flight_number VARCHAR(20) UNIQUE,
    destination VARCHAR(50),
    departure_time DATETIME
);
CREATE TABLE Gates (
    gate_id INT PRIMARY KEY AUTO_INCREMENT,
    gate_name VARCHAR(10)
);
CREATE TABLE EntryLog (
    entry_id INT PRIMARY KEY AUTO_INCREMENT,
    visitor_id INT,
    flight_id INT,
    gate_id INT,
    entry_time DATETIME,
    security_status VARCHAR(20),
    FOREIGN KEY (visitor_id) REFERENCES Visitors(visitor_id),
    FOREIGN KEY (flight_id) REFERENCES Flights(flight_id),
    FOREIGN KEY (gate_id) REFERENCES Gates(gate_id)
);
INSERT INTO Flights (flight_id, flight_number, destination, departure_time) VALUES
(1,'AI101','Mumbai','2026-08-10 08:00:00'),
(2,'6E202','Bangalore','2026-08-10 09:30:00'),
(3,'UK303','Kolkata','2026-08-10 10:15:00'),
(4,'SG404','Hyderabad','2026-08-10 11:00:00'),
(5,'AI505','Chennai','2026-08-10 12:30:00'),
(6,'6E606','Pune','2026-08-10 13:45:00'),
(7,'UK707','Ahmedabad','2026-08-10 15:00:00'),
(8,'SG808','Jaipur','2026-08-10 16:15:00'),
(9,'AI909','Goa','2026-08-10 17:30:00'),
(10,'6E110','Lucknow','2026-08-10 19:00:00');
INSERT INTO Gates (gate_id, gate_name) VALUES
(1,'A1'),
(2,'A2'),
(3,'B1'),
(4,'B2'),
(5,'C1');

INSERT INTO Visitors (visitor_id,name,phone,id_type,id_number) VALUES
(1,'Rahul Sharma','9876543210','Aadhaar','AD1001'),
(2,'Priya Singh','9876543211','Passport','PP1002'),
(3,'Amit Verma','9876543212','Driving License','DL1003'),
(4,'Sneha Kapoor','9876543213','Aadhaar','AD1004'),
(5,'Rohan Gupta','9876543214','Passport','PP1005'),
(6,'Anjali Mehta','9876543215','Aadhaar','AD1006'),
(7,'Vikas Yadav','9876543216','Passport','PP1007'),
(8,'Neha Arora','9876543217','Driving License','DL1008'),
(9,'Karan Malhotra','9876543218','Aadhaar','AD1009'),
(10,'Simran Kaur','9876543219','Passport','PP1010'),
(11,'Aditya Jain','9876543220','Aadhaar','AD1011'),
(12,'Pooja Sharma','9876543221','Passport','PP1012'),
(13,'Ritika Singh','9876543222','Aadhaar','AD1013'),
(14,'Mohit Bansal','9876543223','Driving License','DL1014'),
(15,'Harsh Gupta','9876543224','Passport','PP1015'),
(16,'Divya Verma','9876543225','Aadhaar','AD1016'),
(17,'Yash Agarwal','9876543226','Passport','PP1017'),
(18,'Kriti Sinha','9876543227','Driving License','DL1018'),
(19,'Nikhil Arora','9876543228','Aadhaar','AD1019'),
(20,'Tanvi Kapoor','9876543229','Passport','PP1020'),
(21,'Ayush Mishra','9876543230','Aadhaar','AD1021'),
(22,'Ishita Jain','9876543231','Passport','PP1022'),
(23,'Sahil Verma','9876543232','Driving License','DL1023'),
(24,'Muskan Sharma','9876543233','Aadhaar','AD1024'),
(25,'Arjun Singh','9876543234','Passport','PP1025'),
(26,'Riya Mehra','9876543235','Aadhaar','AD1026'),
(27,'Manav Khanna','9876543236','Passport','PP1027'),
(28,'Naina Gupta','9876543237','Driving License','DL1028'),
(29,'Akash Yadav','9876543238','Aadhaar','AD1029'),
(30,'Mehak Arora','9876543239','Passport','PP1030');

INSERT INTO EntryLog
(entry_id,visitor_id,flight_id,gate_id,entry_time,security_status)
VALUES
(1,1,1,1,'2026-08-10 06:45:00','Cleared'),
(2,2,2,2,'2026-08-10 07:10:00','Cleared'),
(3,3,3,3,'2026-08-10 07:30:00','Pending'),
(4,4,4,4,'2026-08-10 08:00:00','Cleared'),
(5,5,5,5,'2026-08-10 08:15:00','Cleared'),
(6,6,6,1,'2026-08-10 08:30:00','Cleared'),
(7,7,7,2,'2026-08-10 08:45:00','Pending'),
(8,8,8,3,'2026-08-10 09:00:00','Cleared'),
(9,9,9,4,'2026-08-10 09:20:00','Cleared'),
(10,10,10,5,'2026-08-10 09:35:00','Cleared'),
(11,11,1,1,'2026-08-10 09:50:00','Pending'),
(12,12,2,2,'2026-08-10 10:05:00','Cleared'),
(13,13,3,3,'2026-08-10 10:20:00','Cleared'),
(14,14,4,4,'2026-08-10 10:35:00','Cleared'),
(15,15,5,5,'2026-08-10 10:50:00','Pending'),
(16,16,6,1,'2026-08-10 11:05:00','Cleared'),
(17,17,7,2,'2026-08-10 11:20:00','Cleared'),
(18,18,8,3,'2026-08-10 11:35:00','Cleared'),
(19,19,9,4,'2026-08-10 11:50:00','Pending'),
(20,20,10,5,'2026-08-10 12:05:00','Cleared'),
(21,21,1,1,'2026-08-10 12:20:00','Cleared'),
(22,22,2,2,'2026-08-10 12:35:00','Cleared'),
(23,23,3,3,'2026-08-10 12:50:00','Pending'),
(24,24,4,4,'2026-08-10 13:05:00','Cleared'),
(25,25,5,5,'2026-08-10 13:20:00','Cleared'),
(26,26,6,1,'2026-08-10 13:35:00','Cleared'),
(27,27,7,2,'2026-08-10 13:50:00','Pending'),
(28,28,8,3,'2026-08-10 14:05:00','Cleared'),
(29,29,9,4,'2026-08-10 14:20:00','Cleared'),
(30,30,10,5,'2026-08-10 14:35:00','Cleared');
