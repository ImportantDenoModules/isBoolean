export default function isBoolean(value: any) {
    return Boolean.prototype.isPrototypeOf(value) || value === true || value === false
}
