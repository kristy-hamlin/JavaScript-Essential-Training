//More practice:

class Bike {
  constructor(
    name,
    brand,
    model,
    color,
    isFullSuspension,
    frontWheelSize,
    backWheelSize
  ) {
    (this.name = name),
      (this.brand = brand),
      (this.model = model),
      (this.color = color),
      (this.isFullSuspension = isFullSuspension),
      (this.wheelSizes = {
        front: frontWheelSize,
        back: backWheelSize,
      });
  }

  paint(newColor) {
    this.color = newColor;
  }

  newWheels(frontWheelSize, backWheelSize) {
    this.wheelSizes = {
      front: frontWheelSize,
      back: backWheelSize,
    };
  }
}

export default Bike;
