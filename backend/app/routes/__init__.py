from .newsletter import newsletter_bp

def register_routes(app):
    app.register_blueprint(newsletter_bp)