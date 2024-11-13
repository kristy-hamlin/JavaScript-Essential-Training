//JS Classes

//Recall that JS reads from top to bottom. A conventional and legible way to
//use classes is to keep them in a separate file. Then, import that file at the
//top of your main JS file like so:
import Backpack from "./Backpack.js";
import Bike from "./Bike.js";

//To use the class, you create a variable and use the new keyword along with the
//class constructor, similar to other languages:
const kristyMTBbag = new Backpack("Kristy's MTB bag", 60, 30, 30, false);

console.log("The MTB Backpack object: ", kristyMTBbag);

const kristyBike = new Bike(
  "Kristy's Stumpy",
  "Specialized",
  "Stumpjumper",
  "Pink",
  true,
  29,
  29
);

console.log("Kristy's bike: ", kristyBike);

kristyBike.paint("Coral Pink");
console.log("Kristy's painted bike: ", kristyBike);
