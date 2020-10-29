/*
function multiply(a, b) {
  return a + b;
}

const result = multiply(2, 4);

console.log(result);


const amounts = [61.00, 52.25, 112.99, 5.00]
let total = 0;
for (let i = 0; i < amounts.length; i++) {
  total += amounts[i];
}
console.log('Order total is:', total);

const amounts = [1, 2, 3, 4, 5]
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);


//Udacity 5-3 Quiz


let buildTriangle = (loop) => {
  loop += length
}
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
  line += "* "
  }
  return line + "\n";



let x = function() {
  console.log("I am called from inside a function");
};

let y = function(callback) {
  console.log("do something");
}

console.log(y())

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
  
  // function declaration helloCat accepting a callback
  function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
  }
  
  // pass in catSays as a callback function
  console.log(helloCat(catSays));

  let notListening = function(num) {
    let sound = ""
    for (let i = 0; i < num; i++) {
      sound += "la ";
    } return sound;
  }

  console.log(notListening(20))
  

let cry = function() {
  return "boohoo!";
}

console.log(cry())

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big Al Pizza', 50, 'restaurant']
]


function chooseStations (stations) {
    const goodStations = [];
    for (const station of stations) {
      const capacity = station[1];
      if (capacity >= 20) {
        const type = station[2]
        if (type === 'school' || type === 'community centre') {
          goodStations.push(station[0]); 
        } 
    }
  } 
  return goodStations;
} 
console.log(chooseStations(stations));
*/
