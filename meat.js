import {Person, Student} from './people.js';
import {Animal,Pet,Cat,Dog} from './animals.js';

let john = new Person('John', 20);
let mary = new Student('Mary', 21, 'Biology');

john.speak();
mary.speak();

mary.meet(john); // console: mary has a new friend: John

if(mary.hasMet(john))
  console.log('Mary knows John');

if(john.hasMet(mary))
  console.log('John knows Mary');

console.log("John's friends: ", john.friendNames().join(','));
console.log("Mary's friends: ", mary.friendNames().join(','));


let cat = new Cat('Nina');
let dog = new Dog('Capsule');
let lion = new Animal('Leo', 'Roar');
let mouse = new Animal('Stuart Little', 'Squeek', false);

john.meet(cat);   // console: John has a new cat pet: Nina
mary.meet(dog);   // console: Mary has a new dog pet: Capsule
john.meet(mouse); // console: John has seen a cute animal
john.meet(lion);  // console: John is dead

mary.meet('harry'); // console: Mary meets only people or pets

mary.pets(); // console: Mary has 1 pet(s): Capsule
mary.meet(dog); // console: Mary has a new dog pet: Nina

mary.pets(); // console: Mary has 2 pet(s): Capsule, Nina
