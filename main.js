document.querySelector('.button-85').addEventListener('click', function() {
    // Generate a random number between 1 and 6
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    // Create the dice layout for the random number
    let diceHTML = '';

    // Define the dice layout for each number
    if (randomNumber === 1) {
        diceHTML = `<div class="dot center"></div>`;
    } else if (randomNumber === 2) {
        diceHTML = `
            <div class="dot top-left"></div>
            <div class="dot bottom-right"></div>
        `;
    } else if (randomNumber === 3) {
        diceHTML = `
            <div class="dot top-left"></div>
            <div class="dot center"></div>
            <div class="dot bottom-right"></div>
        `;
    } else if (randomNumber === 4) {
        diceHTML = `
            <div class="dot top-left"></div>
            <div class="dot top-right"></div>
            <div class="dot bottom-left"></div>
            <div class="dot bottom-right"></div>
        `;
    } else if (randomNumber === 5) {
        diceHTML = `
            <div class="dot top-left"></div>
            <div class="dot top-right"></div>
            <div class="dot center"></div>
            <div class="dot bottom-left"></div>
            <div class="dot bottom-right"></div>
        `;
    } else if (randomNumber === 6) {
        diceHTML = `
            <div class="dot top-left"></div>
            <div class="dot top-right"></div>
            <div class="dot middle-left"></div>
            <div class="dot middle-right"></div>
            <div class="dot bottom-left"></div>
            <div class="dot bottom-right"></div>
        `;
    }

    // Get the dice container and apply the flip effect
    let diceContainer = document.querySelector('.dice-container');

    // Add flip class to trigger flip animation
    let diceElement = document.createElement('div');
    diceElement.classList.add('dice');
    diceElement.innerHTML = diceHTML;

    // Append new dice to the container and apply the flip effect
    diceContainer.innerHTML = ''; // Clear previous dice
    diceContainer.appendChild(diceElement);

    // Trigger the flip animation
    setTimeout(() => {
        diceElement.classList.add('flip'); // Trigger flip after rendering
    }, 10);

    // Display the result message after the flip
    let messageElement = document.querySelector('#message');
    if (randomNumber === 6) {
        messageElement.innerHTML = "You Won!";
    } else {
        messageElement.innerHTML = `You rolled a ${randomNumber}`;
    }
});




