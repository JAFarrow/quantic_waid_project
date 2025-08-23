from .newsletter import newsletter_bp
from .reservation import reservation_bp

def register_routes(app):
    app.register_blueprint(newsletter_bp)
    app.register_blueprint(reservation_bp)