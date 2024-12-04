from flask import Flask, render_template, url_for, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from models import db, Project
from os import path
import os
from dotenv import load_dotenv
from flask_migrate import Migrate

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///portfolio.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

migrate = Migrate(app, db)

# Create database tables
def create_database(app):
    if not path.exists('instance/portfolio.db'):
        with app.app_context():
            db.create_all()
            print('Created Database!')

@app.route('/')
def index():
    # Get featured projects for slideshow
    featured_projects = Project.query.filter_by(featured=True).all()
    return render_template('index.html', projects=featured_projects)

@app.route('/projects')
def projects():
    # Get all projects
    all_projects = Project.query.all()
    print("Projects found:", all_projects)
    return render_template('projects.html', projects=all_projects)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/snake-game')
def snake_game():
    return render_template('snake.html')

@app.route('/password-generator')
def password_generator():
    return render_template('password.html')

@app.route('/calculator')
def calculator():
    return render_template('calculator.html')

@app.route('/loading-screen')
def loading_screen():
    return render_template('loading_screen.html')

@app.route('/3d-mockup-website')
def mockup_website():
    return render_template('signup_form.html')

if __name__ == '__main__':
    create_database(app)
    app.run(debug=True)
