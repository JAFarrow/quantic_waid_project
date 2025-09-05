import React, { useState } from 'react';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    date: '',
    time: '',
    guests: 1,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateTimeSlot = (dateStr, timeStr) => {
    if (!dateStr || !timeStr) return 'Date and time are required.';

    const selectedDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) return 'Date must be today or in the future.';

    const day = selectedDate.getDay(); // 0 = Sunday
    const [hours, minutes] = timeStr.split(':').map(Number);
    const selectedTime = hours + minutes / 60;

    if (selectedTime < 17) return 'Reservations start at 5:00 PM.';

    if (day === 0) {
      if (selectedTime > 21) return 'Sunday reservations end at 9:00 PM.';
    } else {
      if (selectedTime > 23) return 'Reservations end at 11:00 PM.';
    }

    // For today, check if time is in the future
    if (selectedDate.toDateString() === today.toDateString()) {
      const nowHours = new Date().getHours() + new Date().getMinutes() / 60;
      if (selectedTime <= nowHours) return 'Time must be in the future.';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!formData.name) {
      setError('Name is required.');
      return;
    }
    if (!formData.email) {
      setError('Email is required.');
      return;
    }
    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (formData.guests < 1) {
      setError('Number of guests must be at least 1.');
      return;
    }

    const timeSlotError = validateTimeSlot(formData.date, formData.time);
    if (timeSlotError) {
      setError(timeSlotError);
      return;
    }

    const timeslot = `${formData.date}T${formData.time}:00`;

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    if (formData.phone_number) {
      data.append('phone_number', formData.phone_number);
    }
    data.append('timeslot', timeslot);

    try {
        const response = await fetch('http://localhost:5000/reservation', {
        method: 'POST',
        body: data
        });
        const result = await response.json();
        if (response.ok) {
        const tableNumber = result.table_number || 'N/A'; // Fallback if not present
        setMessage(`Reservation successfully booked! Table number: ${tableNumber}`);
        setFormData({
            name: '',
            email: '',
            phone_number: '',
            date: '',
            time: '',
            guests: 1,
        });
        } else {
        setError(result.error || 'The time slot is fully booked or an error occurred. Please try again.');
        }
    } catch (err) {
        setError('Failed to submit. Please check your connection.');
    }
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <main style={{
      backgroundColor: 'var(--color-background)',
      color: 'var(--color-text)',
      padding: '2rem',
      minHeight: '100vh',
    }}>
      <section style={{
        backgroundColor: 'var(--color-surface)',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: 'var(--color-secondary)',
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>Make a Reservation</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="date" style={{ display: 'block', marginBottom: '0.5rem' }}>Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={today}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="time" style={{ display: 'block', marginBottom: '0.5rem' }}>Time:</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              step="1800" // 30 minutes
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="guests" style={{ display: 'block', marginBottom: '0.5rem' }}>Number of Guests:</label>
            <input
              type="number"
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              min="1"
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="phone_number" style={{ display: 'block', marginBottom: '0.5rem' }}>Phone Number (optional):</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '4px',
                border: '1px solid var(--color-secondary)',
                backgroundColor: 'var(--color-background)',
                color: 'var(--color-text)'
              }}
            />
          </div>
          <button type="submit" style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-background)',
            padding: '0.75rem 1.5rem',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            display: 'block',
            margin: '0 auto'
          }}>
            Book Reservation
          </button>
        </form>
        {message && <p style={{ textAlign: 'center', color: 'green', marginTop: '1rem' }}>{message}</p>}
        {error && <p style={{ textAlign: 'center', color: 'red', marginTop: '1rem' }}>{error}</p>}
      </section>
    </main>
  );
};

export default Reservations;