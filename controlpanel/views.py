from django.shortcuts import render
from django.http import HttpResponse

import requests

def start_bot(request):
    user_channel = request.user.get_username()
    response = requests.post('http://localhost:8080', 
        json={"channel": request.user.get_username()})
    return HttpResponse(response.status_code)
