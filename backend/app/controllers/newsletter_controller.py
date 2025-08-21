from ..models import Customer
from app import db

def upsert_newsletter_customer(data):
    required_fields = ['name', 'email']
    for field in required_fields:
        if field not in data or not data[field]:
            return {
                "error": f"Missing Required Input: {field}"
            }, 400

    customer = Customer.query.filter_by(customer_email=data['email']).first()

    if customer:
        customer.customer_name = data['name']
        customer.phone_number = data.get('phone_number') or None
        customer.newsletter_signup = True
    else:
        customer = Customer(
            customer_name=data['name'],
            customer_email=data['email'],
            phone_number=data.get('phone_number') or None,
            newsletter_signup=True
        )
        db.session.add(customer)

    db.session.commit()

    return {
        "message": "You're signed up!",
        "customer_id": customer.customer_id,
    }, 200

    