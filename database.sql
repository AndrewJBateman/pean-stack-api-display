CREATE DATABASE peandata;

CREATE TABLE metals(
  metal_id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  symbol VARCHAR(2),
  density DOUBLE PRECISION
);

CREATE TABLE metalsData(
  element VARCHAR(20),
  density DOUBLE PRECISION,
  color VARCHAR(20),
  symbol VARCHAR(2)
);

INSERT INTO metals(name, symbol, density) VALUES ('Silver', 'Ag', 10.49);
SELECT * FROM metals;

INSERT INTO metalsData(element, density, color, symbol) VALUES ('Silver', 10.49, 'silver', 'Ag');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Copper', 8.94, '#b87333', 'Cu');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Gold', 19.30, 'gold', 'Au');
INSERT INTO metalsData(element, density, color, symbol) VALUES ('Platinum', 21.45, '#e5e4e2', 'Pt');
SELECT * FROM metalsData;