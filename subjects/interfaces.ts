// type AddFn = (a: number, b:number) => number

interface AddFn {
  (a: number, b: number): number
}

let add: AddFn

add = (n1: number, n2: number) => {
  return n1 + n2
}

interface Named {
  readonly name?: string
  outputName?: string
}

interface Greetable extends Named {
  greet(phrase: string): void
}

class Person implements Greetable {
  name?: string
  age: number

  constructor(n?: string) {
    if (n) {
      this.name = n
    }
    this.age = 30
  }

  greet(phrase: string) {
    console.log(phrase + ' ' + this.name)
  }
}


let user1: Greetable = new Person()
// user1.name = 'bob'


user1.greet('hi there')
console.log(user1)
