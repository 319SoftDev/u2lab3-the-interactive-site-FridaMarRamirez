// YOUR CODE HERE
// PART 1
const radioInput = document.querySelector("#fav_color");
const radioOutput = document.querySelector("#radio-output");

const displayColor = (e) => {
    // the color that was selected
    const color = e.target.value;
    if (color == "blue"){
        radioOutput.innerHTML = "You picked blue 💙";
    } else if ( color == "green"){
        radioOutput.innerHTML = "You picked green 💚";
    } else if ( color == "pink"){
        radioOutput.innerHTML = "You picked pink 💕";
    } else if ( color == "black"){
        radioOutput.innerHTML = "You picked black 🖤";
    }
};

radioInput.addEventListener('change', displayColor);

// PART 2
// guess the number (1 to 100)
const randomNumber = getRandomInt();
console.log(randomNumber);

const numInput = document.querySelector("#num-input");
const numOutput = document.querySelector("#num-output");

const checkNumber = (e) => {
    const value = e.target.valueAsNumber;
    if (value > randomNumber){
        numOutput.innerHTML = "Not " + value + ", guess lower!";
    } else if (value < randomNumber){
        numOutput.innerHTML = "Not " + value + ", guess higher!";
    } else if (value == randomNumber){
        numOutput.innerHTML = "Horray! You got it! It's " + value;
    }
}


numInput.addEventListener('change', checkNumber);

//  PART 3
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

// query selectors 
const textInput = document.querySelector("#text-input");
const textOutput = document.querySelector("#sr-continent-alert");
const continents = ["north america", "europe", "asia", "south america", "africa", "australia", "antarctica"];
let guessedContinents = [];

const checkContinent = (e) => {
    const input = e.target.value.trim().toLowerCase(); 
    // input to lowercase
    e.target.value = ''; 

    // Check if the input is a valid continent
    if (continents.includes(input)) {
        // Capitalize the continent name to match the alt attribute
        const formattedInput = input.charAt(0).toUpperCase() + input.slice(1);

        if (!guessedContinents.includes(formattedInput)) {
            guessedContinents.push(formattedInput);
            // Update the output message with proper string interpolation
            textOutput.innerHTML = `Yes, ${formattedInput} is a continent. ${guessedContinents.length} out of 7.`;
            
            // Show the corresponding image by removing the "hidden" class
            const imgElement = document.querySelector(`img[alt="${formattedInput}"]`);
            if (imgElement) {
                imgElement.classList.remove("hidden");
                console.log(formattedInput);
            }
        } else {
            textOutput.innerHTML = `${formattedInput} has already been selected.`;
        }
    } else {
        textOutput.innerHTML = `${formattedInput} is not a continent.`;
    }
};

textInput.addEventListener('change', checkContinent);

// PART 4
// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.
const colorForm = document.querySelector("#back_color");
const colorInput = document.querySelector("#color");
const body = document.body;

const changeBackground = (e) => {
    e.preventDefault();
    if (document.querySelector("#human").checked) {
        body.style.background = colorInput.value;
    }
};

colorForm.addEventListener('submit', changeBackground);
