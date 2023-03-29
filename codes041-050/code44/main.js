/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

function humanReadable (seconds) {
    let newSeconds = seconds % 60
    if (newSeconds < 10) {
        newSeconds = `0${newSeconds}`
    }
    const min = seconds / 60
    let newMin = Math.floor(min % 60)
    if (newMin < 10) {
        newMin = `0${newMin}`
    }
    let hours = Math.floor(seconds/3600)
    if (hours < 10) {
        hours = `0${hours}`
    }
    return (`${hours}:${newMin}:${newSeconds}`)
  }

  humanReadable(359999)