
//assigning the h1 with id "hola" to a variable in javascript
const firstWord = document.getElementById("ola");
const secondWord = document.getElementById("welcome-section");
const portfolio_section = document.querySelector(".portfolio-section");
const p = document.getElementById('p');
const o1 = document.getElementById('o1');
const r = document.getElementById('r');
const t = document.getElementById('t');
const f = document.getElementById('f');
const o2 = document.getElementById('o2');
const l = document.getElementById('l');
const i = document.getElementById('i');
const o3 = document.getElementById('o3');
const wordOne = "ola!";
const wordTwo = "Welcome to my"; 
const linkedinImage = document.getElementById("linkedin-img");
const githubImage = document.getElementById("github-img");
const third_nav_element = document.getElementById("third-nav-element");
const lightModeImage = document.getElementById("lightMode-img");
const second_nav_element = document.getElementById("second-nav-element");
const fourth_nav_element = document.getElementById("fourth-nav-element");
const htmlPage = document.querySelector("html");
var lightModeSet = false;
const intro_section = document.querySelector(".first-intro-section");
const navBar = document.querySelector("nav");
const loading = document.getElementById("pre-load");
const aboutMeSection = document.querySelector(".about-me-section");
let changingAboutMeText = document.querySelector(".changing-part");

linkedinImage.onmouseover = function(){changeImage(linkedinImage, "svg(s)/linkedin2.svg")}
linkedinImage.onmouseout = function(){revertImage(linkedinImage, "svg(s)/linkedin.svg")}

githubImage.onmouseover = function(){changeImage(githubImage, "svg(s)/github2.svg")}
githubImage.onmouseout = function(){revertImage(githubImage, "svg(s)/github.svg")}


function changeImage(original_Image, new_Image){
    original_Image.src = new_Image;
}

function revertImage(new_Image, old_Image){
    new_Image.src = old_Image;
}


//creating a function that counts all the characters
function TypeWrite(sentence, word, index){
    if(index === word.length){
        return;
    }
    sentence.textContent += word[index];

    setTimeout(TypeWrite, 70, sentence, word, index + 1);
}

setTimeout(TypeWrite, 2500, firstWord, wordOne, 0);

function opacityChanger(letter, color) {
    if(lightModeSet === true && color == "normal"){
        color = "blue";
    }else if(color === "normal") {
        color = "#d57474";
    } 
    else if (color === "grey") {
        color = "#3d2020";
    }
    var stringColor = String(color); // Declare stringColor with var, let, or const
    letter.style.webkitTextStrokeColor = stringColor; // Directly manipulate style property
}

function opacityTimingCalc(initialTime, letter) {
    setTimeout(opacityChanger, initialTime, letter, "grey");
    setTimeout(opacityChanger, initialTime + (1/100) * initialTime, letter, "black");
    setTimeout(opacityChanger, initialTime + (2/100) * initialTime, letter, "grey");
    setTimeout(opacityChanger, initialTime + (2.5/100) * initialTime, letter, "normal");
    setTimeout(opacityChanger, initialTime + (6/100) * initialTime, letter, "grey");
    setTimeout(opacityChanger, initialTime + (6.2/100) * initialTime, letter, "black");
    setTimeout(opacityChanger, initialTime + (6.5/100) * initialTime, letter, "grey");
    setTimeout(opacityChanger, initialTime + (7/100) * initialTime, letter, "normal");
}

//creating a function that will dynamically change 1 or more opacities of the "portfolio" word.
function DynamicOpacityChanger(){
    //generates a random number between 1 and 9.
    let randomNumber = Math.floor(Math.random() * 8) + 1;
    if(randomNumber == 1){
        opacityTimingCalc(8000, o1);
    }
    else if(randomNumber == 2){
        opacityTimingCalc(10000, r);
    }
    else if(randomNumber == 3){
        opacityTimingCalc(7500, t);
    }
    else if(randomNumber == 4){
        opacityTimingCalc(9000, f);
    }
    else if(randomNumber == 5){
        opacityTimingCalc(9200, o2);
    }
    else if(randomNumber == 6){
        opacityTimingCalc(9500, l);
    }
    else if(randomNumber == 7){
        opacityTimingCalc(7600, i);
    }
    else if(randomNumber == 8){
        opacityTimingCalc(8400, o3);
    }
}

opacityTimingCalc(6200, p);
for(let i = 0; i < 100; i++){
    DynamicOpacityChanger()
}

//creating a function that adds hover to the clickable things after a certain amount of time.
function hover_delay(){
    second_nav_element.style.cursor = 'pointer';
    third_nav_element.style.cursor = 'pointer';    
    fourth_nav_element.style.cursor = 'pointer';     
}

setTimeout(hover_delay, 4200);

//creating a Dark and lightMode Function
function darkMode(){
    lightModeSet = false;
    htmlPage.style.backgroundColor = "#151515";
    intro_section.style.animationName = "colorChangeLight";
    intro_section.style.animationDelay = "0s";
    portfolio_section.style.color = "black";
    secondWord.style.color = "#b2a183";
    const Letter_Array = [p,o1,r,t,f,o2,l,i,o3];
    for(let i = 0; i < Letter_Array.length; i++){
        Letter_Array[i].style.webkitTextStrokeColor = "rgb(213, 116, 116)";
    }
    second_nav_element.onclick = function(){changeImage(lightModeImage, "svg(s)/darkModePressed.svg")};
    second_nav_element.onmouseleave = function(){changeImage(lightModeImage, "svg(s)/lightMode.svg")};
    third_nav_element.onmouseleave = function(){changeImage(githubImage, "svg(s)/github.svg")};
    linkedinImage.onmouseleave = function(){changeImage(linkedinImage, "svg(s)/linkedin.svg")};

    githubImage.src = "svg(s)/github.svg";
    linkedinImage.src = "svg(s)/linkedin.svg";
    navBar.style.backgroundColor = "rgba(32, 31, 31, 0.34)";
    toggleSwitch();
}

function lightMode(){
    htmlPage.style.backgroundColor = "white";
    intro_section.style.animationName = "colorChangeDark";
    intro_section.style.animationDelay = "0s";
    portfolio_section.style.color = "#b0e5ff";
    secondWord.style.color = "#ca6b55";
    htmlPage.style.backgroundColor = "#FFE6D0";
    const Letter_Array = [p,o1,r,t,f,o2,l,i,o3];
    for(let i = 0; i < Letter_Array.length; i++){
        Letter_Array[i].style.webkitTextStrokeColor = "blue";
    }
    second_nav_element.onclick = function(){changeImage(lightModeImage, "svg(s)/lightModePressed.svg")};
    second_nav_element.onmouseleave = function(){changeImage(lightModeImage, "svg(s)/lightMode2.svg")};
    third_nav_element.onmouseleave = function(){changeImage(githubImage, "svg(s)/githubLightMode.svg")};
    linkedinImage.onmouseleave = function(){changeImage(linkedinImage, "svg(s)/linkedinLightMode.svg")};

    githubImage.src = "svg(s)/githubLightMode.svg";
    linkedinImage.src = "svg(s)/linkedinLightMode.svg";
    navBar.style.backgroundColor = "#ded7d757";
    
    lightModeSet = true;
    toggleSwitch();
} 
function toggleSwitch(){
    if(lightModeSet == false){
        lightModeImage.onclick = function(){lightMode()};
    }
    else if(lightModeSet == true){
        lightModeImage.onclick = function(){darkMode()};
    }
}
toggleSwitch();

window.onload = function(){
    loading.style.display = 'none';
    console.log("website is loaded");
};

// Creating a interesection Observer to check when the element (about me) is in the viewport.
const AboutMeObserver = new IntersectionObserver(tracker);
//TEST VARS
let string = "a frequent enjoyer of ";
let bling = "I like Art";
let aboutMeWordArray = ["Programming", "Art", "Music", "Martial-Arts", "Games"];
let status = true;
let changeTextOne = false;
let changeTextTwo = false;
let changeTextThree = false;
let changeTextFour = false;

function tracker(array){
    array.forEach(function(element){
        if(element.isIntersecting){
        console.log("section is in view");
        aboutMeSection.classList.remove("about-me-section");  // Remove mystyle class
        aboutMeSection.classList.add("about-me-section-visible");  // Add newone class
        }


        else if(element.isIntersecting == false){
        }
        // console.log("section is outside the view"); 
        // aboutMeSection.classList.remove("about-me-section-visible");  // Remove mystyle class
        // aboutMeSection.classList.add("about-me-section-invisible");  // Add newone class
        // }
    });
}

function aboutMeInitialOpacityChange(){
    setTimeout(function(){AboutMeObserver.observe(aboutMeSection);}, 5000);
}

aboutMeInitialOpacityChange();
totalFunction();

function totalFunction(){
    setTimeout(TypeWrite, 5500, changingAboutMeText, aboutMeWordArray[0], 0);
    setTimeout(backspace, 7000, aboutMeWordArray[0]);
    setTimeout(TypeWrite, 8000, changingAboutMeText, aboutMeWordArray[1], 0);
    setTimeout(backspace, 9000, aboutMeWordArray[1]);
    setTimeout(TypeWrite, 10000, changingAboutMeText, aboutMeWordArray[2], 0);
    setTimeout(backspace, 11000, aboutMeWordArray[2]);
    setTimeout(TypeWrite, 12000, changingAboutMeText, aboutMeWordArray[3], 0);
    setTimeout(backspace, 14000, aboutMeWordArray[3]);
    

}

function backspace(word){
    let result = '';
    let length = word.length;
    if(word.length == 0){
        return;
    }
    for(let i = 0; i < length-1; i++){
        result += word[i];
    }
    changingAboutMeText.textContent = result;
    setTimeout(backspace, 50, result);         
}


//create a function that goes
// I am a frequent enjoyer of Programming
// backspace
// I am a frequent enjoyer of Art
// backspace
// I am a frequent enjoyer of Music
// backspace
// I am an avid fan of Gaming
// backspace

// then loop.


// function backWardsType(word, text) {
//     let result = "";
//     for (let i = 0; i < word.length; i++) {
//         result += word[i];
//     }
//     text.textContent = result;
    
//     if (word.length == 0) {
//         console.log("ho");
//         return;
//     }
    
//     setTimeout(backWardsType, 100, word.substring(0, word.length - 1), text);
// }

// artist
// artist
// artis