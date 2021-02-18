import { assertEquals } from "./deps.ts"
import isBoolean from "./mod.ts"

Deno.test("true", () => {
    assertEquals(isBoolean(true), true)
})

Deno.test("false", () => {
    assertEquals(isBoolean(false), true)
})

Deno.test("new boolean 'hi'", () => {
    assertEquals(isBoolean(new Boolean("hi")), true)
})

Deno.test("42", () => {
    assertEquals(isBoolean(42), false)
})

Deno.test("string 'Hello'", () => {
    assertEquals(isBoolean("Hello"), false)
})
