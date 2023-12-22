import { scientistQuotes } from './quotes.js';

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * scientistQuotes.length);
    return scientistQuotes[randomIndex];
}

document.getElementById('quoteButton').addEventListener('click', function() {
    document.getElementById('quoteDisplay').innerText = getRandomQuote();
});

window.onload = () => {
    document.getElementById('quoteDisplay').innerText = getRandomQuote();
};


