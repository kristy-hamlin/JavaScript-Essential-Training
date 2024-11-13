/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

//const objects can have their property values changed but cannot be reassigned entirely with
//a different object.
const hpSpectre = {
  name: "Kristy HP Spectre",
  color: "Back and Gold",
  year: 2021,
  screenResolution: "4K",
  powerOn: true,
  switchPower: function (powerStatus) {
    this.powerOn = powerStatus;
  },
};
//console.log() allows you to provide a comment to the console and also
//an object or property and it will be displayed in the console:
console.log("HP Spectre Object: ", hpSpectre);

//There are two ways to access properties of objects. The first is
//the familiar dot notation:
console.log("Screen Resolution: ", hpSpectre.screenResolution);

//The second way to access a property is using bracket notation.
//Bracket notation allows you to use a variable and provide a string
//of the property you wan to access, or access properties whose names
//do not conform to JS rules (which happens).
var query = "year";
console.log("name value: ", hpSpectre[query]);

//Let's Practice More:
const kristyToyota = {
  name: "Kristy's Toyota Corolla",
  year: 2010,
  mileage: 200000,
  color: "gold",
  gasTank: 13,
  driveCar: function (gallonsUsed) {
    this.gasTank = this.gasTank - gallonsUsed;
  },
  fillGas: function (gallonsAdded) {
    this.gasTank = this.gasTank + gallonsAdded;
  },
};

console.log("Kristy Toyota: ", kristyToyota);
console.log("Gas Tank Level:", kristyToyota.gasTank);
console.log("Vroom vroom! Used 5 gallons of gas.");
kristyToyota.driveCar(5);
console.log("Gas Tank Level: ", kristyToyota.gasTank);
console.log("Vroom vroom! Used 6 gallons of gas.");
kristyToyota.driveCar(6);
console.log("Gas Tank Level: ", kristyToyota.gasTank);
console.log("Let's fill the tank!");
kristyToyota.fillGas(11);
console.log("Gas Tank Level: ", kristyToyota.gasTank);

const kristyPhone = {
  name: "Kristy's Phone",
  model: "Galaxy S22+",
  type: "Android",
  storage: 256,
  playMusic: function () {
    console.log("Boom boom boom music!");
  },
  innerObject: {
    socialMedia: "Instagram",
    videoApp: "Netflix",
    musicApp: "Spotify",
  },
};

console.log("Kristy's phone: ", kristyPhone);
var property = "model";
console.log("A propert of the phone: ", kristyPhone[property]);
kristyPhone.playMusic();
