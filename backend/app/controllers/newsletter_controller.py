from ..models import Customer
from app import db

def subscribe_customer_to_newsletter(data):
    status_code = 400

    required_fields = ['name', 'email']
    for field in required_fields:
        if field not in data or not data[field]:
            return {
                "error": f"Missing Required Input: {field}"
            }, status_code

    customer = Customer.query.filter_by(customer_email=data['email']).first()

    if customer:
        customer.newsletter_signup = True
        status_code = 200
    else:
        customer = Customer(
            customer_name=data['name'],
            customer_email=data['email'],
            phone_number=data.get('phone_number') or None,
            newsletter_signup=True
        )
        db.session.add(customer)
        status_code = 201

    db.session.commit()

    return {
        "message": "You're signed up!",
        "customer_id": customer.customer_id,
    }, status_code

    