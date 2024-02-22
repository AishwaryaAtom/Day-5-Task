class UberPriceCalculator {
  constructor(
    distance,
    duration,
    surgeMultiplier = 1.0,
    baseFare = 2.0,
    costPerMinute = 0.2,
    costPerMile = 1.5
  ) {
    this.distance = distance;
    this.duration = duration;
    this.surgeMultiplier = surgeMultiplier;
    this.baseFare = baseFare;
    this.costPerMinute = costPerMinute;
    this.costPerMile = costPerMile;
  }

  calculatePrice() {
    const surgeFare = this.baseFare * this.surgeMultiplier;
    const timeFare = this.duration * this.costPerMinute;
    const distanceFare = this.distance * this.costPerMile;
    return surgeFare + timeFare + distanceFare;
  }
}

const distance = 10;
const duration = 30;
const surgeMultiplier = 1.5;
const calculator = new UberPriceCalculator(distance, duration, surgeMultiplier);
const price = calculator.calculatePrice();
console.log(`Estimated Uber price: $${price}`);
