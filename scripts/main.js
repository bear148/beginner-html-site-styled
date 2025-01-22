const header = document.querySelector("h1");
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myVariable = "Michael";
let animal = "Bear";

/*
Multi-Lined comment
*/

// Single Line Comment

// document.querySelector("html").addEventListener("click", () => {
//     alert("You poked me!");
// });

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc == "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/poolball.ico");
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
});

myButton.addEventListener("click", setUserName());

function setUserName() {
    const myName = prompt("What is your username?");

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        header.textContent = `Mozilla is cool, ${myName}`;
    }
}
