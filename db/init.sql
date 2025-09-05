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

INSERT INTO customers (customer_name, customer_email, phone_number, newsletter_signup)
SELECT
    'Customer ' || i,
    'customer' || i || '@example.com',
    '555-010' || i,
    FALSE
FROM generate_series(1, 30) AS s(i);

INSERT INTO reservations (customer_id, time_slot, table_number)
SELECT
    c.customer_id,
    '2025-09-07 17:15:00',
    c.customer_id  -- use customer_id as table_number for simplicity (1..30)
FROM customers c
WHERE c.customer_id <= 30;