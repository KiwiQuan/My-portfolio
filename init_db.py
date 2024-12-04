from app import app, db
from models import Project

def init_database():
    with app.app_context():
        # Define the projects you want to ensure exist
        projects = [
            Project(
                id=1,
                title='Snake Game',
                description='A customizable snake game where you can change the speed and the size of the snake. Controls are W,A,S,D.',
                image_url='/static/thumbnails/snake.png',
                project_url='/snake-game',
                technologies='HTML, CSS, JavaScript, jQuery'
            ),
            Project(
                id=2,
                title='Password Generator',
                description='A password generator. You can choose the length of the password and a option to include symbols, uppercase letters, lowercase, letters and numbers.',
                image_url='/static/thumbnails/password.png',
                project_url='/password-generator',
                technologies='HTML, CSS, JavaScript',
                featured=True
            ),
            Project(
                id=3,
                title='Calculator',
                description='A simple calculator',
                image_url='/static/thumbnails/calculator.png',
                project_url='/calculator',
                technologies='HTML, CSS, JavaScript',
                featured=True
            ),
            Project(
                id=4,
                title='Loading Screen',
                description='Just a loading screen. I was curious how these things were made and so I did some research and made this. You can also change the color of the loading animation.',
                image_url='/static/thumbnails/loader.png',
                project_url='/loading-screen',
                technologies='HTML, CSS, JavaScript, jQuery'
            ),
            Project(
                id=5,
                title='3D Mockup Website',
                description='A nonfunctional 3D mockup website. this is just a project to turn a figma reference into html and css, perhaps in the future I will add functionality to it.',
                detailed_description='A nonfunctional 3D mockup website. this is just a project to turn a figma reference into html and css, perhaps in the future I will add functionality to it.',
                image_url='/static/thumbnails/Sign_up.png',
                project_url='/3d-mockup-website',
                technologies='HTML, CSS, JavaScript',
                featured=True
            )
        ]
        
        # For each project, update if exists or create if doesn't exist
        for project_data in projects:
            existing_project = Project.query.filter_by(title=project_data.title).first()
            
            if existing_project:
                # Update existing project
                existing_project.id = project_data.id
                existing_project.description = project_data.description
                existing_project.image_url = project_data.image_url
                existing_project.project_url = project_data.project_url
                existing_project.technologies = project_data.technologies
                existing_project.detailed_description = project_data.detailed_description
                existing_project.featured = project_data.featured
            else:
                # Add new project
                db.session.add(project_data)
        
        try:
            db.session.commit()
            print("Successfully updated/added projects to database")
        except Exception as e:
            print("Error updating projects:", e)
            db.session.rollback()

if __name__ == '__main__':
    init_database() 