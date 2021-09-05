CREATE DATABASE mileage;

-- \c mileage

CREATE TABLE Carros(
  id SERIAL PRIMARY KEY,
  modelo VARCHAR(255),
  marca VARCHAR(255),
  motor VARCHAR(255),
  piloto VARCHAR(255)
);
