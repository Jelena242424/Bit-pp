

function sendRequest(){
    var data = new XMLHttpRequest();
    data.open('GET', 'http://thecatapi.com/api/images/get?format=xml');
    data.onload = function(){
        var jsObj = data.responseXML;
        var image = document.createElement("img")
        image.setAttribute("src", jsObj.querySelector("url").textContent);
        var body = document.querySelector("body");
        body.appendChild(image);
    }
    data.send();
}

sendRequest();


function sendJasonRequest () {
    var jsonRequest = new XMLHttpRequest();
    jsonRequest.open("GET", "https://dog.ceo/api/breeds/image/random");
    jsonRequest.onload = function () {
    var response = jsonRequest.responseText;
    var obj = JSON.parse(response);
    var image = obj.message;
    var body = document.querySelector("body");
    
    body.innerHTML += "<img src='"+ image +"'>"
    }

    jsonRequest.send();
}

sendJasonRequest();

