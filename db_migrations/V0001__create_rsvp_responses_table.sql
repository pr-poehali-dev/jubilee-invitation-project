CREATE TABLE IF NOT EXISTS rsvp_responses (
    id SERIAL PRIMARY KEY,
    guest_name VARCHAR(255),
    response_type VARCHAR(20) NOT NULL CHECK (response_type IN ('accept', 'decline')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);