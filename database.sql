CREATE DATABASE peandata;

CREATE TABLE metals(
  metal_id SERIAL PRIMARY KEY,
  name VARCHAR(20),
  symbol VARCHAR(2),
  density DOUBLE PRECISION
);
