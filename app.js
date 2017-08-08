'use strict';

alert ('Welcome to my page. Before you get to see my page, let\'s see what you already know...or think you know about me.');

var climb = prompt ('I have climbed every peak over 8000ft in Washington State. Believe me?');

if (climb.toLowerCase() === 'yes' || climb.toLowerCase() === 'y') {
  alert('I wish. But, alas, I have climbed only to 7223 ft on Navajo Peak, but nothing higher in Washington.');
} else if(climb.toLowerCase() === 'no' || climb.toLowerCase === 'n') {
  alert('You are correct! As cool as that would be, the highest peak I\'ve climbed is Navajo Peak at 7223ft.');
} else {
  alert('Please answer yes or no. But, for now, let\'s just move on...');
}
console.log('I have climbed every peak over 8000ft in Washington State. Believe me?');
console.log(climb.toLowerCase());

var kids = prompt ('Do you think I have two boys, 1 and 3 years old, who are the most awesome kids in the world?');

if (kids.toLowerCase() === 'yes' || kids.toLowerCase() === 'y') {
  alert('Yes! I have the two most awesome boys in the world. I say this without the ability to know whether this is an objective or subjective truth, but it is definitly true to me!!!');
} else if(kids.toLowerCase() === 'no' || kids.toLowerCase() === 'n') {
  alert('I indeed have the two coolest kids on the planet.I say this without the ability to know whether this is an objective or subjective truth, but it is definitly true to me!!!');
} else {
  alert('Please answer yes or no. But, for now, let\'s just move on...');
}
console.log('Do you think I have two boys, 1 and 3 years old, who are the most awesome kids in the world?');
console.log(kids.toLowerCase());

var language = prompt ('Do I speak many languages?');

if (language.toLowerCase() === 'yes' || language.toLowerCase() === 'y') {
  alert('Nope. Although I am half Mexican and my dad\'s first language is Spanish, I only speak English.');
} else if(language.toLowerCase() === 'no' || language.toLowerCase() === 'n') {
  alert('Unfortunately, you are correct. Although I am half Mexican and my dad\'s first language is Spanish, I only speak English.');
} else {
  alert('Please answer yes or no. But, for now, let\'s just move on...');
}
console.log('Do I speak many languages?');
console.log(language.toLowerCase());

var juggling = prompt ('I am terrible at juggling. Yes or no?');

if (juggling.toLowerCase() === 'yes' || juggling.toLowerCase() === 'y') {
  alert('I\'m mildly offended that you assume I can\'t juggle, jk, but you are correct.');
} else if(juggling.toLowerCase() === 'no' || juggling.toLowerCase() === 'n') {
  alert('I may look like a world class juggler, but you\'d be wrong');
} else {
  alert('Please answer yes or no. But, for now, let\'s just move on...');
}
console.log('I am terrible at juggling. Yes or no?');
console.log(juggling.toLowerCase());

var home = prompt ('I am from a beautiful island paradise. True?');

if (home.toLowerCase() === 'yes' || home.toLowerCase() === 'y') {
  alert('Sort of. I\'m from Whidbey Island in the Puget Sound. It is pretty awesome, but not the picture of an island paradise usually imagined.');
} else if(home.toLowerCase() === 'no' || home.toLowerCase() === 'n') {
  alert('Well, I think it\'s a kind of island paradise. I\'m from Whidbey Island in the Puget Sound. It is pretty awesome, but not the picture of an island paradise usually imagined');
} else {
  alert('Please answer yes or no. But, for now, let\'s just move on...');
}
console.log('I am from a beautiful island paradise. True?');
console.log(home.toLowerCase());
