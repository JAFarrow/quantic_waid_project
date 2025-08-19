from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Customer(db.Model):
    __tablename__ = 'customers'

    customer_id = db.Column(db.Integer, primary_key=True)
    customer_name = db.Column(db.Text, nullable=False)
    customer_email = db.Column(db.Text, nullable=False, unique=True)
    phone_number = db.Column(db.Text)
    newsletter_signup = db.Column(db.Boolean, default=False)

    reservations = db.relationship('Reservation', back_populates='customer', cascade='all, delete')


class Reservation(db.Model):
    __tablename__ = 'reservations'

    reservation_id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customers.customer_id', ondelete='CASCADE'), nullable=False)
    time_slot = db.Column(db.DateTime, nullable=False)
    table_number = db.Column(db.Integer, nullable=False)

    customer = db.relationship('Customer', back_populates='reservations')
