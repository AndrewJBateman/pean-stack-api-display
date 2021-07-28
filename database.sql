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

INSERT INTO metalsData(element, density, color, symbol) VALUES ('Magnesium', 1.74, '#696969', 'Mg');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Titanium', 4.5, 'blue', 'Ti');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Vanadium', 6.11, '#d4b8cf', 'V');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Chromium', 7.19, '#fff500', 'Cr');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Iron', 7.87, '#d4661b', 'Fe');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Cobalt', 8.9, '#0047AB', 'Co');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Copper', 8.94, '#b87333', 'Cu');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Silver', 10.49, 'silver', 'Ag');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Gold', 19.3, 'gold', 'Au');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Platinum', 21.45, '#e5e4e2', 'Pt');

INSERT INTO companyPerfData(year, sales, expenses) VALUES ('2008', 1020, 570);
INSERT INTO companyPerfData(year, sales, expenses) VALUES ('2009', 1060, 700);
INSERT INTO companyPerfData(year, sales, expenses) VALUES ('2010', 1020, 550);
INSERT INTO companyPerfData(year, sales, expenses) VALUES ('2011', 1250, 800);
INSERT INTO companyPerfData(year, sales, expenses) VALUES ('2012', 1090, 900);
INSERT INTO companyPerfData(year, sales, expenses) VALUES ('2013', 900, 800);

INSERT INTO frameworkMarketData(framework, share) VALUES ('React', 57.5);
INSERT INTO frameworkMarketData(framework, share) VALUES ('Angular', 31.5);
INSERT INTO frameworkMarketData(framework, share) VALUES ('Vue', 11.0);

INSERT INTO gaugeData(label, reading) VALUES ('Memory', 80);
INSERT INTO gaugeData(label, reading) VALUES ('CPU', 55);
INSERT INTO gaugeData(label, reading) VALUES ('Network', 68);

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

SELECT * FROM metalsData ORDER BY density ASC;
SELECT * FROM companyPerfData;
SELECT * FROM frameworkMarketData;
SELECT * FROM gaugeData;
SELECT * FROM countryData ORDER BY population ASC;