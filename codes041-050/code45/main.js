/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3 */

function rgb(r, g, b){

    const rgbArray = [r, g, b]

    const rgbCorrected = rgbArray.map(value => {
        if (value > 255) {
            return value = 255
        } else if(value < 0) {
            return value = 0
        } else {
            return value
        }
    })

    
    function hexConverter(value) {
        if (value === 10) {
            return 'A'
        } else if (value === 11) {
            return 'B'
        } else if (value === 12) {
            return 'C'
        } else if (value ===13) {
            return 'D'
        } else if (value ===14) {
            return 'E'
        } else if (value === 15) {
            return 'F'
        } else {
            return value
        }
    }

    const hexified = rgbCorrected.map(value => {
        let firstHex = Math.floor(value/16)
        let secondHex = Math.floor(value % 16)

        return value = `${hexConverter(firstHex)}${hexConverter(secondHex)}`
    })


    return hexified.join('') 
  }

  rgb(300,255,-47)

  //link to explanation tweet: https://twitter.com/Codingwithroy/status/1641099142486212608?s=20