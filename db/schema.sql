CREATE DATABASE blood_db;
USE blood_db;

CREATE TABLE bldBanks
(
    id INT NOT NULL AUTO_INCREMENT,
    bankname VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE patients
(
    id INT NOT NULL AUTO_INCREMENT,
    patient_name VARCHAR(255) NOT NULL,
    bloodtype VARCHAR(10) NOT NULL,
    FOREIGN KEY(bank) REFERENCES bldBanks(id),
    condition VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE donors
(
    id INT NOT NULL AUTO_INCREMENT,
    donor_name VARCHAR(255) NOT NULL,
    bloodtype VARCHAR(10) NOT NULL,
    FOREIGN KEY(bank) REFERENCES bldBanks(id),
    canDonate BOOLEAN DEFAULT TRUE,
    PRIMARY KEY (id)
);