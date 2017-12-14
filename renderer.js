// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


function sayHello() {
    alert(document.getElementById("myDiv").innerHTML)
}

function changeMessage(message) {
    document.getElementById("myDiv").innerHTML = message
}


var count = 0;
function updateCounter() {
    document.getElementById("counter").innerHTML = "<br>" + count;
    count = count + 1;
}

var button = document.getElementById("button");
button.onclick = function () { 
    updateCounter()
 }

