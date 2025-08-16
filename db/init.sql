CREATE TABLE IF NOT EXISTS customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL UNIQUE,
    phone_number TEXT,
    newsletter_signup BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS reservations (
    reservation_id SERIAL PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    time_slot TIMESTAMP NOT NULL,
    table_number INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id) ON DELETE CASCADE
);