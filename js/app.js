'use strict';

var userName = prompt('Hello what is your name?');
alert('Okay ' + userName + ' here are some questions about myself');
console.log('the users name is ' + userName + '.');

var wasIMilitary = prompt('With a Y for yes or a N for no, do you think i was in the military?').toUpperCase().trim();
if (wasIMilitary === 'Y' || wasIMilitary === 'YES'){
  alert('Correct, USMC 2/1 Fox Company from 2004 till 2008');
} else if(wasIMilitary === 'N' || wasIMilitary === 'NO'){
  alert('I joined the Marines in 2004');
}else {
  alert('you didn\'t answer with a yes or no');
}
console.log('the user thinks ' + wasIMilitary + ' that I was in military');

var myFavoriteColor = prompt('Do you think I have a favorite color? yes or no').toLowerCase().trim();
if (myFavoriteColor === 'yes' || myFavoriteColor === 'y'){
  alert('Meh, I like most colors, the only color I don\'t like is Yellow.');
}else if( myFavoriteColor === 'n' || myFavoriteColor === 'no') {
  alert('Yeah you\'re right I don\'t really have a favorite color.');
}else {
  alert('Sorry that was an invalid answer.');
}
console.log('The user thinks ' + myFavoriteColor + ', that I have a favorite color');

var mySiblings = prompt('Do you think I have siblings? please answer with No or Yes').toLowerCase().trim();
if (mySiblings === 'n'|| mySiblings === 'no'){
  alert('sometimes I wish I was an only child, but I have a twin sister and an older brother.');
} else if(mySiblings === 'yes' || mySiblings === 'y'){
  alert('You\'re right i have a brother and a twin sister');
} else{
  alert('gotta answer with a yes or no.');
}
console.log('the user thinks ' + mySiblings + ' i may have siblings');

var amICreative = prompt('do you think I am very creative?').toLowerCase().trim();
if (amICreative === 'y' || amICreative === 'yes'){
  alert('Nope I get writers block on everything');
}else if(amICreative === 'n' || amICreative === 'no'){
  alert('You\'re right!');
}else{
  alert('still need a y or n for questions');
}
console.log('the user answered ' + amICreative + '. For if they think I am creative.');

var amFromSeattle = prompt('Do you think I am from Seattle?').toLowerCase().trim();
if (amFromSeattle === 'y' || amFromSeattle === 'yes'){
  alert('Kinda, i\'ve been in Seattle since I was 2 years old.');
}else if( amFromSeattle === 'n' || amFromSeattle === 'no'){
  alert('I moved up to Seattle from Stockton Ca, when I was 2 years old.');
}else{
  alert('you would have gotten a better alert if answered with y or n');
}
console.log(amFromSeattle + ' was the users imput for if they thought I was from Seattle.');