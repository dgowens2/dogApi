var changeImage = function(newDog) {
    console.log(newDog);
    var data = JSON.parse(newDog.responseText);
    document.getElementById("image").src = data.message;
}

var button = document.getElementById("getTheDog");

button.addEventListener("click", function(){
    var breed = document.getElementById("dogInput").value;
    console.log("breed= " + breed);
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            changeImage(this);
        }
    };
    request.open("GET", "https://dog.ceo/api/breed/"+breed+"/images/random");
    request.send();
});

var request = new XMLHttpRequest();
request.onreadystatechange = function () {
    if (request.readyState === 4) {
        changeImage(this);
    } 
};
request.open("GET", "https://dog.ceo/api/breeds/image/random");
request.send();
