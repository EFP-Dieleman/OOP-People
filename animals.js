class Animal{
    constructor(name, onomatopea, dangerous=true){
      this.name = name;
      this.onomatopea = onomatopea;
      this.dangerous = dangerous;
    }

    speak(){
      console.log(this.onomatopea);
    }
}

class Pet extends Animal{
    constructor(name, onomatopea){
      super(name, onomatopea, false);
    }
}

class Dog extends Pet{
  constructor(name){
    super(name, 'Woof');
  }
}

class Cat extends Pet{
  constructor(name){
    super(name, 'Meow');
  }
}

export default Animal;
export {Animal, Pet, Cat, Dog};
