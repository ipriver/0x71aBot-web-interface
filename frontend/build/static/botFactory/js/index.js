function BotControlsDom(t){function e(t){return function(){var e=document.createElement("button");return e.className=t.class,e}()}return function(){var t=document.createElement("div");t.className="botControls";var n=new e({class:"runButton"});t.append(n);var o=new e({class:"stopButton"});t.append(o);var a=new e({class:"restartButton"});t.append(a);var r=new e({class:"editButton"});t.append(r);var u=new e({class:"removeButton"});return t.append(u),t}()}document.addEventListener("DOMContentLoaded",function(t){document.querySelectorAll(".bot").forEach(function(t){var e=new BotControlsDom;t.append(e)})});var authButton=document.getElementsByClassName("button")[0];authButton.onclick=function(){var t=document.getElementById("id_login"),e=document.getElementById("id_password");e.value&&t.value?(e.value.length<5||t.value.length<5)&&alert("too shorto erroro"):alert("erroro")};