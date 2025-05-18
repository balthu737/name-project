from flask import Flask
from routes.routes import api

def create_app():
    app = Flask(__name__)
    app.register_blueprint(api, url_prefix='/api')
    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host="0.0.0.0", port=8000, debug=True)
