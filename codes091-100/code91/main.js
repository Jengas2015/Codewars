/* A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks. */

function dataReverse(data) {
    let table = []
    let row =[]
    for (i=0; i<data.length; i++) {
        if (row.length<8) {
            row.push(data[i])
        } else {
            table.push(row)
            row=[data[i]]
        }
    }
    table.push(row)
    const reversedTable = table.reverse().map(array => {
        return array.join('')
    })

    const result = []

    for (i=0; i<reversedTable.length; i++) {
        for (j=0; j<reversedTable[i].length; j++) {
            result.push(parseInt(reversedTable[i][j]))
        }
    }

    return result
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))

//explanation tweet: https://twitter.com/Codingwithroy/status/1657496695033196544?s=20