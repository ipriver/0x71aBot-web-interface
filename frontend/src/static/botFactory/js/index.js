/*$("#del_bot").click( function() {
    $.post("/del_bot/", {}, function () {
       location.reload(); 
    });
});*/

document.addEventListener("DOMContentLoaded", function(event) {

	/*var signInForm = document.querySelector('.signin_form');
	signInForm.addEventListener('submit', ValidateSignInForm);*/

    var listT = document.querySelectorAll('.bot');
    listT.forEach(function(element) {
    	var controlPanel = new BotControlsDom();
    	element.append(controlPanel);
    });
});

var authButton = document.getElementsByClassName('button')[0];
authButton.onclick = function() {
	var idLogin = document.getElementById('id_login');
	var idPass = document.getElementById('id_password');
	if (!idPass.value || !idLogin.value) {
		alert('erroro');
	} else if (idPass.value.length < 5 || idLogin.value.length < 5) {
		alert('too shorto erroro');
	}
};

function BotControlsDom(options) {

	function AddControlButton(options) {

		function addEvents(elem, events) {
			events.forEach(function(evObj) {
				elem.addEventListener(evObj.event, evObj.func)
			})
			return elem;
		}

		function render() {
			var elem = document.createElement('button');
			elem.className = options.class;
			if ('events' in options) {
				elem = addEvents(elem, options.events);
			}
			return elem;
		}
		return render();
	}

	function render() {
		//TODO: minimize code

		var elem = document.createElement('div');
		elem.className = 'botControls';

		var runButton = new AddControlButton({
			class: 'runButton',
		});
		elem.append(runButton);

		var stopButton = new AddControlButton({
			class: 'stopButton',
		});
		elem.append(stopButton);

		var restartButton = new AddControlButton({
			class: 'restartButton',
		});
		elem.append(restartButton);

		var editButton = new AddControlButton({
			class: 'editButton',
		});
		elem.append(editButton);

		var removeButton = new AddControlButton({
			class: 'removeButton',
			events: [
				{
					event: 'click', 
					func: function() {
						alert('remove Bot event');
					} 
				},
				{
					event: 'mouseover', 
					func: function() {
						alert('mouseover event');
					} 
				},
			],
		});
		elem.append(removeButton);

		return elem;
	}
	return render();
}
