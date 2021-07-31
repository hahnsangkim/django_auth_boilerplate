# Django Auth (DAuth) Boilerplate
The objective of the boilerplate code is to provide user authentication using postgreSQL.

## Requirements
- A web app provides a login feature
- A web app provides a register feature
- A web app provides a logout feature
- A successful login leads to a projects page
- The projects page is accessible only to authenticated users
- A web app provides a password-reset feature 
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
(dauth) $ pipenv shell --python=3
```

### Create a superuser
```shell
(dauth) $ python manage.py createsuperuser
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
(dauth) $ python manage.py startapp users
```

### Update tables
```shell
(dauth) $ python manage.py makemigrations
(dauth) $ python manage.py migrate
```

## Instruction
Set configuration
```shell
(dauth) $ cp sample.env .env
(dauth) $ vi .env
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
(dauth) $ python manage.py runserver
```

## Reference
[Django Authentication](https://docs.djangoproject.com/en/3.2/topics/auth/default/)