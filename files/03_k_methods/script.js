//Functions and Methods:
//A function inside an Object is referred to as a method.

const backpack = {
  name: "Kristy's MTB bag",
  volume: 30,
  color: "blue",
  //So far, we have been using the longhand syntax for writing functions,
  //which specifically tells us we are writing a function:
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },

  //However, there is a shorthand for writing functions, where you
  //remove the function keyword:
  strapLength: {
    left: 20,
    right: 20,
  },
  changeStrapLengths(newLeft, newRight) {
    this.strapLength.left = newLeft;
    this.strapLength.right = newRight;
  },
};

//Let's call the methods so we can see them work:
console.log("Left Strap before: ", backpack.strapLength.left);
console.log("Right Strap before: ", backpack.strapLength.right);

//Call a function using dot notation on the object and provide the arguments:
backpack.changeStrapLengths(5, 19);

//Demonstrate that the call worked (hopefully!)
console.log("Left Strap after: ", backpack.strapLength.left);
console.log("Right Strap after: ", backpack.strapLength.right);
