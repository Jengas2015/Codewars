function perimeter(n) {
    const fib = [0, 1]
    for (i=0; i<n; i++) {
        fib.push(fib[fib.length-1]+fib[fib.length-2])
    }
    const fibSum = fib.reduce((a, b) => {
        return a+b
    })
    return fibSum*4
}

console.log(perimeter(20))

//link to explanation tweet: https://twitter.com/Codingwithroy/status/1646520103142576131?s=20