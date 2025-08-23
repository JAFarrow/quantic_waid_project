from flask import Blueprint, request, jsonify
from ..controllers import make_reservation

reservation_bp = Blueprint('reservation', __name__)

@reservation_bp.route('/reservation', methods=['POST'])
def handle_newsletter_signup():
    data = request.form

    resevation_data = {
        'name': data.get('name'),
        'email': data.get('email'),
        'phone_number': data.get('phone_number'),
        'timeslot': data.get('timeslot')
    }

    response, status = make_reservation(resevation_data)
    return jsonify(response), status