class Left {
  static of(value) {
    return new Left(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return this;
  }
}

class Right {
  static of(value) {
    return new Right(value);
  }

  constructor(value) {
    this._value = value;
  }

  map(fn) {
    return Right.of(fn(this._value));
  }
}

const parseJson = (str) => {
  try {
    return Right.of(JSON.parse(str));
  } catch (err) {
    return Left.of({ error: err.message });
  }
};

const res = parseJson('{"name": "zhangsan"}').map((x) => x.name.toUpperCase());
console.log(res);
