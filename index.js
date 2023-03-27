// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

let k = document.querySelector('h1');
const l = document.createElement('h1');
l['innerHTML'] = 'Hello there';
l['style']['color'] = 'green';

k.innerHTML = 'Hey, bro!';
document.body.append(l);
console.log(k);
