CREATE TABLE IF NOT EXISTS dinosaur (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    era VARCHAR(50) NOT NULL,
    area VARCHAR(50) NOT NULL,
    diet VARCHAR(50) NOT NULL
)