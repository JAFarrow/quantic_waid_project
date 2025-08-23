from flask import Blueprint, request, jsonify
from ..controllers import subscribe_customer_to_newsletter

newsletter_bp = Blueprint('newsletter', __name__)

@newsletter_bp.route('/newsletter', methods=['POST'])
def handle_newsletter_signup():
    data = request.form

    customer_data = {
        'name': data.get('name'),
        'email': data.get('email'),
        'phone_number': data.get('phone_number')
    }

    response, status = subscribe_customer_to_newsletter(customer_data)
    return jsonify(response), status