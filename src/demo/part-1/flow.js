/**
 * @flow
 */
const f: [string, number] = ['1', 2];

const obj1: { foo: string, bar: number } = { foo: "1", bar: 2 };
const obj2: { foo?: string, bar: number } = { foo: "1", bar: 2 };
const obj3: { [string]: string } = {};
obj3.key1 = "1";
obj3.key2 = "val2";

function foo(callback: (string, number) => void) {
  callback('1', 1);
}

foo(function(a: string, b: number) {
  console.log(a, b)
})