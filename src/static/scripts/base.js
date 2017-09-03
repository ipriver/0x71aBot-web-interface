
function sendAjax() {
  let name = 'max';
  let surname = 'drozdov';
  let xhr = new XMLHttpRequest();
  let params = '?name=' + encodeURIComponent(name);
  xhr.open('GET', 'ajax/' + params);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send();

  xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      let myText = document.createElement('p');
      myText.innerText = xhr.responseText;
      document.body.append(myText);
    }
  };
}

let csrftoken = getCookie('csrftoken');
let but = document.querySelector('#aja');
but.addEventListener('click', sendAjax);
but.addEventListener('contextmenu', function() {
  setInterval(sendAjax, 5000);
});

let myf = document.forms[0];
myf.querySelector('#submit').addEventListener('click', function(event) {
  event.preventDefault();
  let xhr = new XMLHttpRequest();
  let name = this.getElementsByTagName('input')[0].value;
  let pass= this.getElementsByTagName('input')[1].value;
  let params = `name=${name}&password=${pass}`;
  xhr.open('POST', 'ajax/');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.setRequestHeader("X-CSRFToken", csrftoken);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send(params);

  xhr.onreadystatechange = function() {
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
      alert(xhr.status + ': ' + xhr.statusText);
    } else {
      let myText = document.createElement('p');
      myText.innerText = xhr.responseText;
      document.body.append(myText);
    }
  };
}.bind(myf));

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


function Person(name, age) {
    this.name = name;
    this.age = age;
}

let jsonF = document.forms[1];
jsonF.onsubmit = function(event) {
    event.preventDefault();
    console.log(this.elements.name.value)
    let me = new Person(this.elements.name.value, this.elements.age.value);
    let jsonMe = JSON.stringify(me);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'json_ajax/');
    xhr.setRequestHeader("X-CSRFToken", csrftoken);
    xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    xhr.send(jsonMe);

    xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return;
        if (xhr.status != 200) {
            alert(xhr.status + ': ' + xhr.statusText);
        } else {
            let {name, age} = JSON.parse((xhr.responseText));
            let newMe = new Person(name, age);
            let nDiv = document.createElement('div');
            let pName = document.createElement('p');
            pName.innerText = newMe.name;
            let pAge = document.createElement('p');
            pAge.innerText = newMe.age;
            nDiv.append(pName);
            nDiv.append(pAge);
            document.body.append(nDiv);
        }
    };
}
