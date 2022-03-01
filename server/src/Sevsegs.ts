import { Pin } from 'johnny-five';

class Sevsegs {

  private pins: Array<Pin>;

  private nums: number[][] = [
    [1, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0, 1],
    [1, 1, 1, 1, 0, 0, 1],
    [0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 1, 1]];

  constructor(pins: Array<number>) {
    this.pins = pins.map(pin => new Pin(pin));
  }

  clear() {
    this.pins.forEach(pin => pin.low());
  }

  print(n: number) {
    if(n < 0 || n > 9) {
      throw new Error('Il numero deve essere compreso fra 0 e 9.');
    }
    this.clear();
    this.pins.forEach((pin, i) => pin.write(this.nums[n][i]));
  }

  async countdown() {
    for(let i = 9; i >= 0; i--) {
      this.print(i);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  async countup() {
    for(let i = 0; i < 10; i++) {
      this.print(i);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}

export default Sevsegs;