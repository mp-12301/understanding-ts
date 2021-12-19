// const person: {
//   name: string
//   age: number
// } = {
// const person : {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: "Max",
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
  name: 'max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

// person.role.push('admin')
// person.role[1] = 10

let favouriteActivies: any[]
favouriteActivies = ['Sports', 1]

console.log(person.role)


for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}
