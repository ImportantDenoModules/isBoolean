// deno-lint-ignore no-explicit-any
export default function isBoolean(value: any) {
    // deno-lint-ignore no-prototype-builtins
    return Boolean.prototype.isPrototypeOf(value) || value === true || value === false
}
