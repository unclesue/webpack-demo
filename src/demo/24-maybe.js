class MayBe {
  static of(value) {
    return new MayBe(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return this.isVild() ? MayBe.of(fn(this._value)) : MayBe.of(null);
  }

  isVild() {
    return this._value !== null && this._value !== undefined;
  }
}

const maybe = MayBe.of('hello world')
  .map((x) => x.toUpperCase())
  .map(x => null)
  .map(x => x.split(' '))
console.log(maybe);
