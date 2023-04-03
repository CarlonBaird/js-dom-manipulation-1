// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

let k = document.querySelector('h1');
const l = document.createElement('h1');
l['innerHTML'] = 'Hello there';
l['style']['color'] = 'green';

k.innerHTML = 'Hey!';
document.body.append(l);
// console.log(k);
console.log(document.URL);
const greet = document.getElementById('greet');
console.log(greet);

const h1s = document.getElementsByTagName('h1');
console.log(h1s);

const firstH1Match = document.querySelector('h1');
console.log(`first h1: ${firstH1Match.innerHTML}`);
