import isBoolean from './mod.ts'

console.log(isBoolean(true))
console.log(isBoolean(false))
console.log(isBoolean(new Boolean("hi")))
console.log(isBoolean(23))
console.log(isBoolean("Hello"))
