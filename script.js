var changeImage = function(newDog) {
    console.log(newDog);

    //Create a JSON object from the string that the DB gives us
    var data = JSON.parse(newDog.responseText);

    //Add the URL to the HTML image source attribute
    document.getElementById("image").src = data.message;
}

//DOM representation of the button
var button = document.getElementById("getTheDog");

//Click event listener
button.addEventListener("click", function(){

    //Get the input from the form field
    var breed = document.getElementById("dogInput").value;
    console.log("breed= " + breed);

    //Build a new XHR request
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {  //Callback function to change the image on the page

        //When the request is ready, change the image on the page
        if (request.readyState === 4) {
            changeImage(this);
        }
    };

    //Send an API request for the breed from the input field (no error handling)
    request.open("GET", "https://dog.ceo/api/breed/"+breed+"/images/random");
    request.send();
});

//Build a new XHR request
var request = new XMLHttpRequest();
request.onreadystatechange = function () {   //Callback function to change the image on the page

    //When the request is ready, load the image on the page
    if (request.readyState === 4) {
        changeImage(this);
    } 
};

//Send an API request for a random image of a dog to be shown on page load
request.open("GET", "https://dog.ceo/api/breeds/image/random");
request.send();
