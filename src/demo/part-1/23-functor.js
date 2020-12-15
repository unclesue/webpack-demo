class Test {
  static of(value) {
    return new Test(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return Test.of(fn(this._value));
  }
}

const test = Test.of(1)
  .map((x) => x + 1)
  .map((x) => Math.pow(x, 6));
console.log(test);
