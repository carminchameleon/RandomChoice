// class Vehicle {
//   public drive(): void {
//     console.log("chungga chungga");
//   }

//   public honk(): void {
//     console.log("beep");
//   }
// }
// class Car extends Vehicle {
//   private drive(): void {
//     console.log("vrooom");
//   }

//   startDrivingProcess(): void {
//     this.drive();
//   }
// }

// const car = new Car();
// car.startDrivingProcess();
// car.honk();

class Vehicle {
  constructor(public color: string = "red") {
    this.color = color;
  }
}

const vehicle = new Vehicle("orange");
