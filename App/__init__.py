#最终版�?
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__,template_folder='templates',static_folder="static",static_url_path='/web')
app.config.from_object('config')

db = SQLAlchemy(app)
migrate = Migrate(app, db)

from App import views, models
from App import app, db


