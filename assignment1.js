/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Abass Ahmed Abdi Student ID: 155737224 Date: 16/05/2024
*
********************************************************************************/ 



console.log("Hello World!");

var serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];

// Define serverPaths array
var serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];

// Define serverResponses array
var serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Abass Ahmed",
  "Abass Ahmed: aahmed362@myseneca.ca", 
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}


function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverPaths[i] === path) {
            if (serverVerbs[i] === httpVerb) {
                return `200: ${serverResponses[i]}`;
            } else {
                return `404: Unable to process ${httpVerb} request for ${path}`;
            }
        }
    }
    return `404: Path ${path} not found`;
}

var testVerbs = ["GET", "POST"];

var testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

function automateTests() {
    function randomRequest() {
        var randVerbIndex = getRandomInt(testVerbs.length - 1);
        var randPathIndex = getRandomInt(testPaths.length - 1);
        var randVerb = testVerbs[randVerbIndex];
        var randPath = testPaths[randPathIndex];
        var result = httpRequest(randVerb, randPath);
        console.log(result);
    }
    setInterval(randomRequest, 1000);
}

automateTests();
  