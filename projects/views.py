from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

@login_required(login_url='users:login')
def projects(request):
    return render(request, 'projects/projects.html')
