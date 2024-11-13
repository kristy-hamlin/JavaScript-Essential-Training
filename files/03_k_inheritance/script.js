//Consider this simplified backpack object:

const backpack = {
  name: "Kristy's MTB bag",
  volume: 30,
};

//If you print it to the console you will see that it has a
//hidden property called [[Prototype]].
//Every object in JS inherits its structure from another
//prototype object, and the base protoype for all objects
//is the core Object.prototype.

//Access the prototype:
console.log("Backpack object: ", backpack);
//Access the object's prototype:
console.log("Backpack's prototype: ", Object.getPrototypeOf(backpack));

//Because of inheritance, all objects inherit from the Object prototype
//unless otherwise specified. That means there are some base values and functions
//that they will automatically have, including two methods: valueOf() and toString():

//valueOf() returns the primitive value of an object property:
console.log(backpack.volume.valueOf());

//toString() returns a string representation fo an object property:
console.log(backpack.volume.toString());

//You can even override inherited properties and methods by providing a
//property or method of the same name:

const backpack2 = {
  name: "Kristy's 2nd MTB bag",
  volume: 40,
  toString: function () {
    return "Backpack: ${this.name}, Volume: ${this.volume} liters";
  },
};
console.log(backpack2.toString());
//I assumed that the returned string was supposed to have the properties filled in and
//it did not. I'm sure we will learn more about printing strings later.
