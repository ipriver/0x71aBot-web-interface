# 0x71aBot-web-interface
![Alt text](https://cs541607.userapi.com/c816730/u95107266/docs/7af2475009d8/snaphot.png?extra=VzcFaoEwU6Ae96nJSVG74VMzasFp2SmBRA6uy-cmtWKkHjzGFW0OKZii_2vIXTRIVc26mvN0qFbDuVKJecAvbRhShhyXXmKNCiOwPJ1XC0oDCagrsQT2wA "index page snapshot")

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

