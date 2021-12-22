class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.info('Beep');
  }
}

const vihecle = new Vehicle('orange');
console.info(vihecle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.info('Vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
