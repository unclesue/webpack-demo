function getSum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function curryFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curryFn(...args.concat(Array.from(arguments)));
      };
    }
    return fn(...args);
  };
}

const curried = curry(getSum);

console.log(curried(1, 2, 3));
console.log(curried(1)(2, 3));
console.log(curried(1, 2)(3));
