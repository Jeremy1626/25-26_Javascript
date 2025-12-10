// List of buttons
const buttons= document.querySelectorAll('button')

// Input for displaying calculations
const display = document.querySelector('.display')

// Fpr each button, add an onclick method with teh calculate function
buttons.forEach(
    function(button){
        button.addEventListener("click", calculate);
    }
);