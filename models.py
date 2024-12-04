from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    detailed_description = db.Column(db.Text, nullable=True, default='')
    image_url = db.Column(db.String(200), nullable=False)
    project_url = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    technologies = db.Column(db.String(200), nullable=True)
    featured = db.Column(db.Boolean, default=False)

    def __repr__(self):
        return f'<Project {self.title}>'
