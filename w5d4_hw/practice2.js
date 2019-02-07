const titleize = (array) => {
    const titleizeWord = (word) =>`Mx. ${word} Jingleheimer Schmidt`

    return array.map(titleizeWord)
};

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
};

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`)
};

Elephant.prototype.grow = function() {
  return this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
  return this.tricks.push(trick);
};

Elephant.prototype.play = function() {
  let tr = this.tricks[(Math.random(0,this.tricks.length)]
  console.log(`${this.name} is ${tr}!`)
}

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];
