from flask import Blueprint, request, jsonify
from ..controllers import upsert_newsletter_customer

newsletter_bp = Blueprint('newsletter', __name__)

@newsletter_bp.route('/newsletter', methods=['POST'])
def handle_newsletter_signup():
    data = request.form

    customer_data = {
        'name': data.get('name'),
        'email': data.get('email'),
        'phone_number': data.get('phone')
    }

    response, status = upsert_newsletter_customer(customer_data)
    return jsonify(response), status