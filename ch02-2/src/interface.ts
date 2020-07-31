interface IVehicle {
  name: string;
  year: number;
  broken: boolean | number;
  summary(): string;
  // 함수의 리턴 값이 string
}

const oldCivic = {
  name: "civic",
  year: 2000,
  broken: 1,
  summary() {
    return `Name + ${this.name}`;
  },
};

const printVehicle = (vehicle: IVehicle): void => {
  console.log(`Name : ${vehicle.name}`);
  console.log(`Year : ${vehicle.year}`);
  console.log(`Broken? : ${vehicle.broken}`);
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
