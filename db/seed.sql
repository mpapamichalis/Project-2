USE blood_db;

INSERT INTO bldBanks (bankname) VALUES ('Great Western Bloodbank');
INSERT INTO bldBanks (bankname) VALUES ('Alliance Bloodbank');
INSERT INTO patients (patient_name,bloodtype,condition) VALUES ("John Smith", "O+","Sickle Cell Anemia");
INSERT INTO donors (donor_name,bloodtype,canDonate) VALUES("Sarah Palmer", "A-", true);
INSERT INTO donors (donor_name,bloodtype, canDonate) VALUES("Jim Bean", "O+", true);
INSERT INTO donors (donor_name,bloodtype, canDonate) VALUES("Candice Jones", "AB-", false);