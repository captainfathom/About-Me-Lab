'use strict';

alert ('Welcome to my page. Before you get to see my page, let\'s see what you already know...or think you know about me. In this little game, there\'s 7 superpower points available. Good luck.');

<<<<<<< HEAD
var score = 0;

var climb = prompt ('I have climbed every peak over 8000ft in Washington State. Believe me?');

if (climb.toLowerCase() === 'yes' || climb.toLowerCase() === 'y') {
  alert('I wish. But, alas, I have climbed only to 7223 ft on Navajo Peak, but nothing higher in Washington.');
} else if(climb.toLowerCase() === 'no' || climb.toLowerCase() === 'n') {
  alert('You are correct! As cool as that would be, the highest peak I\'ve climbed is Navajo Peak at 7223ft.');
  score++;
} else {
  alert('Please answer yes or no. But, for now, let\'s just move on...');
}
console.log('I have climbed every peak over 8000ft in Washington State. Believe me?');
console.log(climb.toLowerCase());

var kids = prompt ('Do you think I have two boys, 1 and 3 years old, who are the most awesome kids in the world?');

if (kids.toLowerCase() === 'yes' || kids.toLowerCase() === 'y') {
  alert('Yes! I have the two most awesome boys in the world. I say this without the ability to know whether this is an objective or subjective truth, but it is definitly true to me!!!');
  score++;
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
  score++;
} else {
  alert('Please answer yes or no. But, for now, let\'s just move on...');
}
console.log('Do I speak many languages?');
console.log(language.toLowerCase());

=======
function Score(){
  var score = 0;
  var answerlog = [];
  var Question6array = [];
  var questionlog = ['I have climbed every peak over 8000ft in Washington State. Believe me?', 'Do you think I have two boys, 1 and 3 years old, who are the most awesome kids in the world?', 'Do I speak many languages?', 'I am terrible at juggling. Yes or no?', 'I am from a beautiful island paradise. True?', 'My dog, Bentley, has been with me through a lot. Can you guess how old he is?', 'Can you guess what states I\'ve lived in other that Washington?'];
  var reslog = ['I wish. But, alas, I have climbed only to 7223 ft on Navajo Peak, but nothing higher in Washington.', 'You are correct! As cool as that would be, the highest peak I\'ve climbed is Navajo Peak at 7223ft.', 'Please answer yes or no. But, for now, let\'s just move on...', 'Yes! I have the two most awesome boys in the world. I say this without the ability to know whether this is an objective or subjective truth, but it is definitly true to me!!!', 'I indeed have the two coolest kids on the planet. I say this without the ability to know whether this is an objective or subjective truth, but it is definitly true to me!!!', 'Please answer yes or no. But, for now, let\'s just move on...', 'Nope. Although I am half Mexican and my dad\'s first language is Spanish, I only speak English.', 'Nope. Although I am half Mexican and my dad\'s first language is Spanish, I only speak English.', 'Please answer yes or no. But, for now, let\'s just move on...', 'I\'m mildly offended that you assume I can\'t juggle, jk, but you are correct.', 'I may look like a world class juggler, but you would be wrong.', 'Please answer yes or no. But, for now, let\'s just move on...', 'You\'re right! (mostly) I\'m from Whidbey Island in the Puget Sound. It is pretty awesome, but not the picture of an island paradise usually imagined.', 'Well, I think it\'s a kind of island paradise. I\'m from Whidbey Island in the Puget Sound. It is pretty awesome, but not the picture of an island paradise usually imagined', 'Please answer yes or no. But, for now, let\'s just move on...', 'Nope. Hint, he\'s a wise old soul.', 'I hope he makes it that long, but he\'s not there yet.', 'That\'s right! He\'s 11 years old and going strong!', 'Thanks for playing. Bentley is 11 years old and going strong!', 'You must answer with a number', ['You got one! I\'ve lived in Washington, ', '.'], ['Nope. Try again. You have ', ' left.'], ['Oh No! Better luck next time. I lived in Washington, ', '.']];
  console.log(reslog[20][0]);
  function Global(){
    function Question1(){
      var firstQuestion = questionlog[0];
      var climb = prompt (firstQuestion);
      answerlog.push(climb);
      if (climb.toLowerCase() === 'yes' || climb.toLowerCase() === 'y') {
        alert(reslog[0]);
      } else if(climb.toLowerCase() === 'no' || climb.toLowerCase() === 'n') {
        alert(reslog[1]);
        score++;
      } else {
        alert(reslog[2]);
      }
      console.log(firstQuestion);
      console.log(climb.toLowerCase());

    }
    Question1();

    function Question2 () {
      var secondQuestion = questionlog[1];
      var kids = prompt (secondQuestion);
      answerlog.push(kids);
      if (kids.toLowerCase() === 'yes' || kids.toLowerCase() === 'y') {
        alert(reslog[3]);
        score++;
      }else if(kids.toLowerCase() === 'no' || kids.toLowerCase() === 'n') {
        alert(reslog[4]);
      }else {
        alert(reslog[5]);
      }
      console.log(secondQuestion);
      console.log(kids.toLowerCase());
    }
    Question2();

    function Question3(){
      var thirdQuestion = questionlog[2];
      var language = prompt (thirdQuestion);
      answerlog.push(language);
      if (language.toLowerCase() === 'yes' || language.toLowerCase() === 'y') {
        alert(reslog[6]);
      } else if(language.toLowerCase() === 'no' || language.toLowerCase() === 'n') {
        alert(reslog[7]);
        score++;
      } else {
        alert(reslog[8]);
      }
      console.log(thirdQuestion);
      console.log(language.toLowerCase());
    }
    Question3();
>>>>>>> 3936485f1dd40a478a7cc78eec6fc1e24721789c
//score update

    alert ('You\'ve got ' + score + '/7 so far. Let\'s keep going!');

    function Question4(){
      var fourthQuestion = questionlog[3];
      var juggling = prompt (fourthQuestion);
      answerlog.push(juggling);
      if (juggling.toLowerCase() === 'yes' || juggling.toLowerCase() === 'y') {
        alert(reslog[9]);
        score++;
      } else if(juggling.toLowerCase() === 'no' || juggling.toLowerCase() === 'n') {
        alert(reslog[10]);
      } else {
        alert(reslog[11]);
      }
      console.log(fourthQuestion);
      console.log(juggling.toLowerCase());
    }
    Question4();
    function Question5(){
      var fifthQuestion = questionlog[4];
      var home = prompt (fifthQuestion);
      answerlog.push(home);
      if (home.toLowerCase() === 'yes' || home.toLowerCase() === 'y') {
        alert(reslog[12]);
        score++;
      } else if(home.toLowerCase() === 'no' || home.toLowerCase() === 'n') {
        alert(reslog[13]);
      } else {
        alert(reslog[14]);
      }
      console.log(fifthQuestion);
      console.log(home.toLowerCase());
    }
    Question5();
    alert ('Two more questions to go. So far you have ' + score + '/7.');
    //begin questions 6-7

    function Question6(){
      var attempts = 4;

      while (attempts > 0) {
        var sixthQuestion = questionlog[5];
        var oldDog = prompt (sixthQuestion);
        console.log(sixthQuestion);
        console.log(parseInt(oldDog));
        if (parseInt(oldDog) < 11) {
          attempts--;
          alert (reslog[15]);
        } else if (parseInt(oldDog) > 11) {
          attempts--;
          alert (reslog[16]);
        } else if (parseInt(oldDog) === 11) {
          alert (reslog[17]);
          answerlog.push(oldDog);
          score++;
          console.log(score);
          break;
        } else if (attempts === 1){
          alert (reslog[18]);
        } else {alert(reslog[19]);
        }
      }
    }
    Question6();
    function Question7(){
      var livedState = ['michigan', 'minnesota'];
      var printLivedState = livedState.join (', ');
      var guesses = 6;

      while (guesses > 0) {
        var seventhQuestion = questionlog[6];
        var state = prompt (seventhQuestion);
        console.log(seventhQuestion);
        console.log(state);
        if (livedState.includes(state.toLowerCase())) {
          alert (reslog[20].join(printLivedState));
          answerlog.push(state);
          score++;
          break;
        } else if (guesses > 1){
          guesses--;
          alert (reslog[21].join(guesses));
        } else if (guesses === 1){
          alert(reslog[22].join(printLivedState));
          guesses--;
        }
      }
    }
    Question7();
    if (score < 5) {
      alert ('Thanks for playing. You got ' + score + '/7! You are well on your way to superpowers galore. Welcome to my webpage.');
    } else if (score >= 5) {
      alert ('You\'re superpower is guessing random things about people, you got ' + score + '/7. Kudos to you.');
    }
  }
  Global();
}
Score();
