//rotate.js
//Handles the image rotation

//Use that prefix to put the proper sequence of image filenames into an array
var imageArray = new Array(10);
imageArray[0] = "mocha.png"
imageArray[1] = "almond.png"
imageArray[2] = "oolong.png"
imageArray[3] = "taro.png"
imageArray[4] = "mango.jpg"
imageArray[5] = "banana.jpg"
imageArray[6] = "beef.jpg"
imageArray[7] = "blueberry.jpg"
imageArray[8] = "chicken.jpg"
imageArray[9] = "rice.jpg"

var imageCounter = 0;
function rotate()
{
    var imageObject = document.getElementById('placeholder');
    imageObject.src = "images/" + imageArray[imageCounter];
    ++imageCounter;
    if (imageCounter == 10) imageCounter = 0;
}

//Called as soon as home page has loaded, to start image rotation
function startRotation()
{
    document.getElementById('placeholder').src= "images/"+ imageArray[5];
    setInterval('rotate()', 2000);
}
