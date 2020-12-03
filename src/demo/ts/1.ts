let a = 10
a = NaN
a = Infinity
// a = null

let b = 'bar'
b = ''
// b = null
// b = undefined

const c = true
// c = null

const d: void = undefined

const h = Symbol()

let foo: object = () => {}
foo = []
foo = {}

const obj: { foo: number; bar?: string } = { foo: 1231 }
obj.foo = 123
obj.bar = '1'

const arr1: Array<number> = [1, 2, 3]
arr1.push(2)

const arr2: string[] = ['1', '3']
arr2.push('3')

function sum(...args: number[]) {
  return args.reduce((prev, current) => prev + current, 0)
}

const tuple: [number, string] = [1, '2']
const [age, name] = tuple
Object.entries({
  foo: 1,
  bar: 1233,
})

const enum status {
  Draft = 'succ',
  Unpublished = 'unpub',
  Published = 'pub',
}
status.Draft

function func1(
  a: number,
  b = false,
  c?: number,
  ...rest: number[]
): string {
  return 'func1'
}

const func2: (a: number, b: number) => string = function (
  a: number,
  b: number
): string {
  return 'func2'
}

function stringify(val: any) {
  return JSON.stringify(val)
}

const nums = [1, 2, 34, 5]
const res = nums.find((i) => i > 0)
const num1: number = res as number

interface Post {
  title: string;
  content: string;
  subtitle?: string;
  readonly summary: string;
}
function pP(post: Post) {
  console.log(post.title)
  console.log(post.content)
  // post.summary = '1'
}
pP({
  title: 't',
  content: 'c',
  summary: 's',
  // subtitle: 'sub'
})

interface Cache {
  [name: string]: string;
}
const cache: Cache = {}
cache.key1 = '1'
cache.key2 = '2'

function createArray<T>(length: number, value: T) {
  return Array<T>(length).fill(value)
}
createArray<string>(4, '1')
createArray<number>(4, 1)
createArray<number[]>(4, [1, 2])

export {}
