class Person{
    constructor(name_p, age_p){
        this.name = name_p;
        this.age = age_p;
        this.friends = [];
    }

    speak(){
        console.log('My name is ', this.name, ' and my age is ', this.age);
    }

    meet(person){
        this.friends.push(person);
    }

    friendNames(){
      return this.friends.map(e => e.name);
    }

    hasMet(person){
        // return this.friends.includes(person);
        return this.friends.find(elt => elt.name === person.name) !== undefined;
    }
}

class Student extends Person{
  constructor(name_p, age_p, major_p){
      super(name_p, age_p);
      this.major = major_p;
  }

  speak(){
    console.log('Hey you, this is ', this.name, ' i am ', this.age, 'yo and i study ', this.major);
  }
}

export default Person;
export {Person, Student};
