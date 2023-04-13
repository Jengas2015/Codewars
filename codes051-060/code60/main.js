/* Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered. */

function incrementString(strng) {
    let lastIndex = strng.length - 1
    while (i >= 0 && strng[i] >= "0" && strng[i] <= "9") {
        lastIndex--
    }

    let prefix = strng.slice(0, lastIndex + 1)
    let number = strng.slice (lastIndex + 1)

    if (number === "") {
        return prefix + "1"
    }

    let num = parseInt (number, 10) + 1
    let paddleNum = num.toString().padStart(number.length, "0");
    return prefix + paddleNum

}

console.log(incrementString("foobar000"))