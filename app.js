'use strict';

alert ('Welcome to my page. Before you get to see my page, let\'s see what you already know...or think you know about me.');

var climb = prompt ('I have climbed every peak over 8000ft in Washington State. Believe me?');

if (climb.toLowerCase() === 'yes' || 'y') {
  alert('I wish. But, alas, I have climbed to 7223 ft on Navajo Peak, but nothing higher in Washington.');
} else if(climb.toLowerCase() === 'no' || 'n') {
  alert('You are correct! As cool as that would be, the highest peak I\'ve climbed is Navajo Peak at 7223ft.');
}

var kids = prompt ('Do you think I have two boys, 1 and 3 years old, who are the most awesome kids in the world?');

if (kids.toLowerCase() === 'yes' || 'y') {
  alert('Yes! I have the two most awesome boys in the world. I say this without the ability to know whether this is an objective or subjective truth, but it is definitly true to me!!!');
} else if(kids.toLowerCase() === 'no' || 'n') {
  alert('I indeed have the two coolest kids on the planet.I say this without the ability to know whether this is an objective or subjective truth, but it is definitly true to me!!!');
}

var language = prompt ('Do I speak many languages?');

if (language.toLowerCase() === 'yes' || 'y') {
  alert('Nope. Although I am half Mexican and my dad\'s first language is Spanish, I only speak English.');
} else if(language.toLowerCase() === 'no' || 'n') {
  alert('Unfortunately, you are correct. Although I am half Mexican and my dad\'s first language is Spanish, I only speak English.');
}

var juggling = prompt ('I am terrible at juggling. Yes or no?');

if (juggling.toLowerCase() === 'yes' || 'y') {
  alert('Nope. Although I am half Mexican and my dad\'s first language is Spanish, I only speak English.');
} else if(juggling.toLowerCase() === 'no' || 'n') {
  alert('Unfortunately, you are correct. Although I am half Mexican and my dad\'s first language is Spanish, I only speak English.');
}
