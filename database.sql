CREATE DATABASE peandata;

CREATE TABLE metalsData(
  element VARCHAR(20),
  density DOUBLE PRECISION,
  color VARCHAR(20),
  symbol VARCHAR(2)
);

CREATE TABLE companyPerfData(
  year VARCHAR(4),
  sales SMALLINT,
  expenses SMALLINT
);

CREATE TABLE frameworkMarketData(
  framework VARCHAR(20),
  share NUMERIC(3,1)
);

CREATE TABLE gaugeData(
  label VARCHAR(10),
  reading SMALLINT
);

CREATE TABLE countryData(
  name VARCHAR(20),
  population SMALLINT,
  bordersMed  BOOLEAN
);

INSERT INTO metalsData(element, density, color, symbol) VALUES ('Silver', 10.49, 'silver', 'Ag');
INSERT INTO companyPerfData(year, sales, expenses) VALUES ('2008', 1020, 570);
INSERT INTO frameworkMarketData(framework, share) VALUES ('React', 57.5);
INSERT INTO gaugeData(label, reading) VALUES ('Memory', 80);
INSERT INTO countryData(name, population, bordersMed) VALUES ('Russia', 146, FALSE);
INSERT INTO countryData(name, population, bordersMed) VALUES ('Germany', 84, FALSE);
INSERT INTO countryData(name, population, bordersMed) VALUES ('Turkey', 85, TRUE);
INSERT INTO countryData(name, population, bordersMed) VALUES ('France', 65, TRUE);
INSERT INTO countryData(name, population, bordersMed) VALUES ('UK', 68, FALSE);
INSERT INTO countryData(name, population, bordersMed) VALUES ('Italy', 60, TRUE);
INSERT INTO countryData(name, population, bordersMed) VALUES ('Spain', 47, TRUE);
INSERT INTO countryData(name, population, bordersMed) VALUES ('Poland', 38, FALSE);
INSERT INTO countryData(name, population, bordersMed) VALUES ('Ukraine', 44, FALSE);
INSERT INTO countryData(name, population, bordersMed) VALUES ('Romania', 19, FALSE);

SELECT * FROM metalsData;
SELECT * FROM companyPerfData;
SELECT * FROM frameworkMarketData;
SELECT * FROM gaugeData;