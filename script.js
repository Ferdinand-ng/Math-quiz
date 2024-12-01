let x;
let y;
let z;
let art = 0
let diff = 0
let cntt = 0;
let time = 100
let timeID = document.getElementById("timer")
let answered = false; // Flag to prevent multiple score updates for the same question
let cvt = document.getElementById("cnt");
let sign = document.getElementById("sign");
let zz = document.getElementById("gen");
let zy = document.getElementById("genm");
let zx = document.getElementById("genp");
let digone = document.getElementById("digone");
let digtwo = document.getElementById("digtwo");
let sub = document.getElementById("butt");
let val = document.getElementById("val").value;
let valld = document.getElementById("val")
let decla = document.getElementById("decla");
let conttent = document.getElementById("content")
let res = document.getElementById("reset")
val = Number(val);
let vall = document.getElementById("val");
let darkmode = document.getElementById("dkmd")
let easyButton = document.getElementById("btEZ")
let mdButton = document.getElementById("btMD")
let hardButton = document.getElementById("btHD")
let extButton = document.getElementById("btEXT")
let display = document.getElementById("disp")

// Function to reset and generate a new question
function resetQuestion() {
    answered = false; // Reset the answered flag when a new question is generated
    vall.value = ""; // Clear the input field
    vall.style.border = "1px solid black"; // Reset border
    vall.focus()
}

// Add event listeners for the generation buttons
butt.disabled = true
// zz.disabled = true
// zx.disabled = true
// zy.disabled = true
start.disabled = true
function easyMode(){
    zz.onclick = function() {
        x = Math.floor(Math.random() * 10) + 1;
        y = Math.floor(Math.random() * 10) + 1;
        z = x + y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "+";
        resetQuestion(); // Reset the question state
        decla.textContent = "START GAME";
        zz.style.fontSize="2px solid lime"
        art = 1
        console.log(art)
    };
    zy.onclick = function() {
        x = Math.floor(Math.random() * 10) + 1;
        y = Math.floor(Math.random() * 10) + 1;
        z = x - y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "-";
        resetQuestion(); // Reset the question state
        art = 2
        decla.textContent = "START GAME";
        console.log(art)
    };
    zx.onclick = function() {
        x = Math.floor(Math.random() * 10) + 1;
        y = Math.floor(Math.random() * 10) + 1;
        z = x * y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "*";
        resetQuestion(); // Reset the question state
        art = 3
        decla.textContent = "START GAME";
        console.log(art)
    }
    diff = 1
}
function medMode(){
    zz.onclick = function() {
        x = Math.floor(Math.random() * 100) + 1;
        y = Math.floor(Math.random() * 100) + 1;
        z = x + y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "+";
        resetQuestion(); // Reset the question state
        art = 1
        decla.textContent = "START GAME";
        console.log(art)
    }

    zy.onclick = function() {
        x = Math.floor(Math.random() * 100) + 1;
        y = Math.floor(Math.random() * 100) + 1;
        z = x - y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "-";
        resetQuestion(); // Reset the question state
        art = 2
        decla.textContent = "START GAME";
        console.log(art)
    };
    zx.onclick = function() {
        x = Math.floor(Math.random() * 100) + 1;
        y = Math.floor(Math.random() * 100) + 1;
        z = x * y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "*";
        resetQuestion(); // Reset the question state
        art = 3
        decla.textContent = "START GAME";
        console.log(art)
    }
    diff=2
}
function hardMode(){
    zz.onclick = function() {
        x = Math.floor(Math.random() * 1000) + 1;
        y = Math.floor(Math.random() * 1000) + 1;
        z = x + y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "+";
        resetQuestion(); // Reset the question state
        art = 1
        decla.textContent = "START GAME";
        console.log(art)
    };
    zy.onclick = function() {
        x = Math.floor(Math.random() * 1000) + 1;
        y = Math.floor(Math.random() * 1000) + 1;
        z = x - y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "-";
        resetQuestion(); // Reset the question state
        art = 2
        decla.textContent = "START GAME";
        console.log(art)
    };
    zx.onclick = function() {
        x = Math.floor(Math.random() * 1000) + 1;
        y = Math.floor(Math.random() * 1000) + 1;
        z = x * y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "*";
        resetQuestion(); // Reset the question state
        art = 3
        decla.textContent = "START GAME";
        console.log(art)
    }
    diff = 3
}
function extMode(){
    zz.onclick = function() {
        x = Math.floor(Math.random() * 10000) + 1;
        y = Math.floor(Math.random() * 10000) + 1;
        z = x + y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "+";
        resetQuestion(); // Reset the question state
        art = 1
        decla.textContent = "START GAME";
        console.log(art)
    };
    zy.onclick = function() {
        x = Math.floor(Math.random() * 10000) + 1;
        y = Math.floor(Math.random() * 10000) + 1;
        z = x - y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "-";
        resetQuestion(); // Reset the question state
        art = 2
        decla.textContent = "START GAME";
        console.log(art)
    };
    zx.onclick = function() {
        x = Math.floor(Math.random() * 10000) + 1;
        y = Math.floor(Math.random() * 10000) + 1;
        z = x * y;
        digone.textContent = x;
        digtwo.textContent = y;
        sign.textContent = "*";
        resetQuestion(); // Reset the question state
        art = 3
        decla.textContent = "START GAME";
        console.log(art)
    }
    diff = 4
}
// zz.onclick = function(){
//     start.disabled = false
// }
// zy.onclick = function(){
//     start.disabled = false
// }
// zx.onclick = function(){
//     start.disabled = false
// }
// easyButton.onclick = function(){
//     easyMode()
//     start.disabled = false
//     decla.textContent="SELECT MODE"
//     easyButton.style.border="2px solid aqua"
//     mdButton.classList.add("default")
//     hardButton.classList.add("default")
//     extButton.classList.add("default")
// }
// mdButton.onclick = function(){
//     medMode()
//     start.disabled = false
//     decla.textContent="SELECT MODE"
//     mdButton.style.border="2px solid orange"
//     easyButton.classList.add("default")
//     hardButton.classList.add("default")
//     extButton.classList.add("default")
// }
// hardButton.onclick = function(){
//     hardMode()
//     start.disabled = false
//     decla.textContent="SELECT MODE"
//     hardButton.style.border="2px solid red"
//     mdButton.classList.add("default")
//     easyButton.classList.add("default")
//     extButton.classList.add("default")
// }
// extButton.onclick = function(){
//     extMode()
//     start.disabled = false
//     decla.textContent="SELECT MODE"
//     extButton.style.border="2px solid gold"
//     mdButton.classList.add("default")
//     hardButton.classList.add("default")
//     easyButton.classList.add("default")
// }
// Function to clear styles from all difficulty buttons
function clearButtonStyles() {
    easyButton.style.border = "1px solid transparent";
    easyButton.style.backgroundColor= "transparent";
    mdButton.style.border = "1px solid transparent";
    mdButton.style.backgroundColor = "transparent";
    hardButton.style.border = "1px solid transparent";
    hardButton.style.backgroundColor = "transparent";
    extButton.style.border = "1px solid transparent";
    extButton.style.backgroundColor= "transparent";
}

// Easy mode button
easyButton.onclick = function() {
    easyMode();
    start.disabled = false;
    decla.textContent = "SELECT MODE";

    // Clear styles and apply to the selected button
    clearButtonStyles();
    easyButton.style.border = "2px solid aqua";
    easyButton.style.backgroundColor = "aqua";
    zz.classList.add("signalive")
    zx.classList.add("signalive")
    zy.classList.add("signalive")
}

// Medium mode button
mdButton.onclick = function() {
    medMode();
    start.disabled = false;
    decla.textContent = "SELECT MODE";

    // Clear styles and apply to the selected button
    clearButtonStyles();
    mdButton.style.border = "2px solid orange";
    mdButton.style.backgroundColor = "orange";
    zz.classList.add("signalive")
    zx.classList.add("signalive")
    zy.classList.add("signalive")
}

// Hard mode button
hardButton.onclick = function() {
    hardMode();
    start.disabled = false;
    decla.textContent = "SELECT MODE";

    // Clear styles and apply to the selected button
    clearButtonStyles();
    hardButton.style.border = "2px solid red";
    hardButton.style.backgroundColor = "red";
    zz.classList.add("signalive")
    zx.classList.add("signalive")
    zy.classList.add("signalive")
}

// Extreme mode button
extButton.onclick = function() {
    extMode();
    start.disabled = false;
    decla.textContent = "SELECT MODE";

    // Clear styles and apply to the selected button
    clearButtonStyles();
    extButton.style.border = "2px solid gold";
    extButton.style.backgroundColor = "gold";
    zz.classList.add("signalive")
    zx.classList.add("signalive")
    zy.classList.add("signalive")
}
function randArt(){
    if(art === 1){
        zz.onclick()
    }
    else if(art === 2){
        zy.onclick()
    }
    else if(art === 3){
        zx.onclick()
    }
}
function endGame(){
conttent.classList.add("disp")
butt.disabled = true
zz.disabled = true
zx.disabled = true
zy.disabled = true
}

function timing(){
    if(time > 0){
        timeID.textContent = `${time} seconds`
        time --
    setTimeout(timing, 1000)
    }

    else{
        timeID.textContent = "GAME OVER"
        endGame()
    }
}
function quickStart(){
    if(art === 1){
        zz.onclick()
    }
    else if(art === 2){
        zy.onclick()
    }
    else if(art === 3){
        zx.onclick()
    }
}
start.onclick = function(){
butt.disabled = false
zz.disabled = false
zx.disabled = false
zy.disabled = false
decla.innerHTML = "SOLVE THE EQUATIONS AND SUBMIT!"
timing()
quickStart()
easyButton.disabled = true
mdButton.disabled = true
hardButton.disabled = true
extButton.disabled = true

// if(diff === 1){
//     easyMode()
// }
// else if(diff ===2){
//     medMode()
// }
// else if(diff===3){
//     hardMode()
// }
// else if(diff ===4){
//     extMode()
// }
// else{
//     return
// }
display.style.filter="blur(0px)"
valld.style.filter = "blur(0px)"
}

// Function to handle submission
butt.onclick = function() {
    let val = vall.value.trim(); // Get the input value

    if (val === "") { // If the input is empty
        decla.textContent = "Please submit an answer.";
        vall.style.border = "1px solid aqua";
        vall.classList.add("shake");

        setTimeout(() => {
            vall.classList.remove("shake");
            vall.style.removeProperty("border");
        }, 900);

        vall.focus(); // Refocus on the input field
        return; // Exit if no input is provided
    }

    val = Number(val); // Convert input to a number

    if (val === z) { // If the answer is correct
        if (!answered) { // Check if the answer hasn't been submitted yet
            decla.textContent = "You are correct";
            vall.style.border = "3px solid lime";
            cntt += 5; // Increment score
            cvt.textContent = cntt; // Update displayed score
            answered = true; // Mark as answered to prevent further increments
                // Delay before generating the next question, to show the feedback
    setTimeout(() => {
        randArt(); // Automatically generate a new question after a delay
    }, 100)
        }

    } else { // If the answer is incorrect
        decla.textContent = "That is incorrect";
        vall.style.border = "3px solid red";
        vall.classList.add("shake");

        setTimeout(() => {
            vall.classList.remove("shake");
        }, 900);
        vall.focus(); // Refocus on the input field
    }
};

// Handle the Enter keypress event for submission
vall.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Check if Enter key is pressed
        event.preventDefault(); // Prevent default action (like form submission)
        butt.onclick(); // Trigger the button click handler
    }
});
function resetGame(){
    location.reload()
}
res.onclick = function(){
    resetGame()
}
