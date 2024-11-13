//This file will keep the template for our Backpack class.
//In our main script.js file, we will import this file.

//There are two syntaxes for declaring classes, but we will use
//the shorter one:
/*
 * Class "declaration" style: class Name {....}
 * Cass "expression" style: const Name = class {....}
 */

class Backpack {
  //We define the constructor similar to other functions and
  //using the "constructor" keyword. We will put all the inputs
  //on separate lines for legibility.

  constructor(name, volume, leftStrap, rightStrap, lidOpen) {
    //Inside the curly brackets, give the code for how we
    //want the object to be setup using the constructor inputs:
    this.name = name;
    this.volume = volume;
    (this.strapLength = {
      left: leftStrap,
      right: rightStrap,
    }),
      (this.lidOpen = lidOpen);
  }
  //After the constructor, you can add methods like before.
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  newStrapLength(leftLength, rightLength) {
    this.strapLength.left = leftLength;
    this.strapLength.right = rightLength;
  }
}

//DON'T FORGET in JS if you are using a file inside another file, you need to export it at the end
//like so:
export default Backpack;
