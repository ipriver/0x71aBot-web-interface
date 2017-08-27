from django.shortcuts import render, redirect
from .forms import SignInForm, RegForm, AddBotForm
from django.http import HttpResponseRedirect
from django.contrib.auth import logout
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from .models import Account, Bot
from django.views.decorators.csrf import csrf_exempt
from django.views.generic import (ListView, TemplateView, DetailView, CreateView, 
UpdateView, DeleteView)



class IndexView(TemplateView):
    template_name = 'botFactory/index.html'

    def get_context_data(self, **kwargs):
        context = super(IndexView, self).get_context_data(**kwargs)
        context['authenticated'] = False
        context['form'] = None
        return context

    def get(self, request, *args, **kwargs):
        context = self.get_context_data()
        if request.user.is_authenticated:
            context['message'] = 'Hello, ' + request.user.username
            context['authenticated'] = True
            context['form'] = AddBotForm()
            user = request.user
            account = Account.objects.get(user=user)
            bot_list = Bot.objects.filter(account=account)
            context['bot_list'] = bot_list
        else:
            context['authenticated'] = False
            context['form'] = SignInForm()
        return render(request, self.template_name, context)

    def post(self, request, *args, **kwargs):
        form = SignInForm(request.POST)
        if form.is_valid():
            username = request.POST['login']
            password = request.POST['password']
            user_login(request, username, password)
        return HttpResponseRedirect('/')


    # def add_new_bot(self, request):
    #     form = AddBotForm(request.POST)
    #     if form.is_valid():
    #         channel_name = request.POST['channel_name']
    #         user = request.user
    #         account = Account.objects.get(user=user)
    #         if account.bot_count < 5:
    #             bot = Bot(account=account, channel_name=channel_name)
    #             bot.bot_start()
    #             account.bot_count += 1
    #             account.save()
    #             bot.save()
    #     return redirect('botFactory:index')

    # @csrf_exempt
    # def del_bot(self, request):
    #     if request.is_ajax:
    #         user = request.user
    #         account = Account.objects.get(user=user)
    #         account.bot_count -= 1
    #         bot_list = Bot.objects.filter(account=account)
    #         Bot.objects.filter(id=bot_list[0].id).delete()
    #         account.save()

    #     return redirect('botFactory:index')


class RegisterView(TemplateView):
    template_name = 'botFactory/register.html'
    form_class = RegForm

    def get_context_data(self, **kwargs):
        context = super(RegisterView, self).get_context_data(**kwargs)
        return context

    def get(self, request, *args, **kwargs):
        form = self.form_class(initial={'key': 'value'})
        context = self.get_context_data(form=form)
        return render(request, self.template_name, context)

    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            login = request.POST.get('login')
            email = request.POST.get('email')
            password = request.POST.get('password')
            re_password = request.POST.get('re_password')
            if password == re_password:
                user = User.objects.create_user(login, email, password)
                user.save()
                account = Account(user=user, bot_count=0)
                account.save()
                user_login(request, login, password)
            else:
                return redirect('botFactory:register')
        return redirect('botFactory:index')

def user_logout(request):
    logout(request)
    return redirect('botFactory:index')

def user_login(request, username, password):
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)

class BotDetails(DetailView):
    pass

class CreateBot(CreateView):
    pass

class DeleteBot(DeleteView):
    pass

class UpdateBot(UpdateView):
    pass