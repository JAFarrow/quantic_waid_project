from ..models import Customer, Reservation
from app import db
from datetime import datetime
import random

def make_reservation(data):
    status_code = 400

    required_fields = ['name', 'email', 'timeslot']
    for field in required_fields:
        if field not in data or not data[field]:
            return {
                "error": f"Missing Required Input: {field}"
            }, status_code
        
    try:
        time_slot = datetime.fromisoformat(data['timeslot'].replace('Z', '+00:00'))
    except ValueError:
        return {
            "error": "Invalid Time Format. Use ISO 8601"
        }, status_code
    
    used_tables = db.session.query(Reservation.table_number) \
        .filter(Reservation.time_slot == time_slot).all()
    
    used_tables_set = {t[0] for t in used_tables}

    available_tables = list(set(range(1, 31)) - used_tables_set)

    if not available_tables:
        return {
            "error": "No Tables Available for This Timeslot."
        }, status_code
        
    customer = Customer.query.filter_by(customer_email=data['email']).first()

    if not customer:
        customer = Customer(
            customer_name=data['name'],
            customer_email=data['email'],
            phone_number=data.get('phone_number') or None
        )
        db.session.add(customer)
        db.session.flush()

    reservation = Reservation(
        customer_id=customer.customer_id,
        time_slot=time_slot,
        table_number=random.choice(available_tables)
    )
    db.session.add(reservation)
    db.session.commit()
    status_code = 201

    return {
        "message": "Reservation Booked Successfully!",
        "table_number": reservation.table_number
    }, status_code

    

    