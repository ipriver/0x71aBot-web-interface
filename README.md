# 0x71aBot-web-interface
![Alt text](https://pp.userapi.com/c840238/v840238567/39904/M5dnrzm6_Dc.jpg "index page snapshot")

# How to install?
## 1. JS, HTML, CSS, etc.
1.1 Download gulp, webpack for your system
```console
sudo npm install gulp-cli -g
sudo npm install webpack -g
```
1.2 Install js dependencies
```console
npm install
```
1.3 Build dist files from src
```console
npm run webpack
npm run gulp-dev
```
For production build you should use
```console
npm run build
npm run gulp-build
```
## 2. Python, Django
2.1 create virtualenv
```console
virtualenv venv
```
and activate it
```console
source venv/bin/activate
```
2.2 download python dependencies
```console
pip3 install -r pip3-requirements.txt
```
2.3 Makemigrations for apps
```console
python3 manage.py makemigrations (list of apps)
python3 manage.py migrate
```
2.4 Run django dev server
```console
python3 manage.py runserver
```

