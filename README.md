# Django-based Auth Boilerplate - Django + Authentication + REST API + Frontend App
The boilerplate code includes
- Django authentication
- Django REST APIs
- Login, Logout, Register templates
- An independent frontend app that communicates with the REST APIs

## Requirements
- A web app provides a login feature
- A web app provides a register feature
- A web app provides a logout feature
- A successful login leads to a projects page
- The projects page is accessible only to authenticated users
- A web app provides a password-reset feature via an email
- An app supports a json token for authentication, storing the token locally (frontend)
- A web app also supports a session authentication, storing a sessionid in the database
- A web app supports APIs
- Endpoints
    - users/login
    - users/logout
    - projects
    - reset_password
    - set-password

## Development
### Create a django project
```shell
$ django-admin startproject dauth
$ cd dauth
django_auth_boilerplate $ pipenv shell --python=3
```

### Create a superuser
```shell
django_auth_boilerplate $ python manage.py createsuperuser
Username: admin
Email address: admin@example.com
Password: **********
Password (again): *********
Superuser created successfully.
```

### Set a reply email address
Generate an alternative password for sending a welcome email. Go to _myaccount.google.com_ and turn on 2-step verification

### Create apps
Apps include home, projects, and users.
```shell
django_auth_boilerplate $ python manage.py startapp users
```

### Update tables
```shell
django_auth_boilerplate $ python manage.py makemigrations
django_auth_boilerplate $ python manage.py migrate
```

### Create an independent frontend app
- frontend

## Instruction
Set configuration
```shell
$ git clone https://github.com/hahnsangkim/django_auth_boilerplate.git
$ cd django_auth_boilerplate
(django_auth_boilerplate) $ cp sample.env .env
django_auth_boilerplate $ vi .env
# Set following parameters to your values
PG_NAME=''
PG_USER=''
PG_PASSWORD=''
PG_HOST=''
DJANGO_SECRET_KEY=''
# email
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = ''
EMAIL_HOST_PASSWORD = ''
```

Run a web app
```shell
django_auth_boilerplate $ python manage.py runserver
```

Use Cases
- Open frontend/login.html in your browser and then try with login and logout
- Register, login, logout

## Reference
* [Django Authentication](https://docs.djangoproject.com/en/3.2/topics/auth/default/)
* [Django REST framework - JSON Web Token Authentication](https://www.django-rest-framework.org/api-guide/authentication/#json-web-token-authentication)
* [Simple JWT](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)
* [JWT](https://jwt.io)
* [JWT token](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/settings.html)
* [Django CORS](https://pypi.org/project/django-cors-headers/)