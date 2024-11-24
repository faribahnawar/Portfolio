// Footer

const currentYear = new Date().getFullYear();

const currentDate = new Date();

const footer = document.getElementById('footer');

footer.textContent = `(c) Faribah Nawar, ${currentYear}`;

console.log("Full Date:", currentDate.toString());

   
// Portfolio Greeting

const currentHour = currentDate.getHours();

let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "Good morning!"; 
    } else if (currentHour >= 12 && currentHour < 17) {
        greetingMessage = "Good afternoon!"; 
    } else {
        greetingMessage = "Good evening!"; 
    };

console.log(greetingMessage);

    
// Button for Javascript

const button = document.getElementById('btn-alert');


button.addEventListener('click', function() {

    alert('Error, please refresh the page');
});

// Hover Button

button.onmouseover = function () {
    button.innerText = 'Hovering';
};

button.onmouseout = function() {
    button.innerText = 'Not Hovering';
};


// Loops

const ol = document.getElementById('numbers')

for (let i =1; i <= 12; i++) {

    const listItem = document.createElement('li');

    listItem.textContent = (i % 2 === 0) ? 'even' : 'odd';

    ol.appendChild(listItem);
};