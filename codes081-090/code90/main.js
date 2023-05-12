/* Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes. */

function encrypt(text, n) {
    if (text === null) {
        return null
    }

    if (n <= 0 || text.length === 0) {
        return text;
    }

    let odd = "";
    let even = "";
    for (let i = 0; i < text.length; i++) {
        if (i % 2 === 0) {
            even += text[i];
        } else {
            odd += text[i];
        }
    }
    return encrypt(odd + even, n - 1);

}

function decrypt(encryptedText, n) {
    
    if (encryptedText === null) {
        return null
    }

    if (n <= 0 || encryptedText.length === 0) {
        return encryptedText
    }

    const mid = Math.floor(encryptedText.length / 2)
    let firstHalf = encryptedText.slice(0, mid)
    let secondHalf = encryptedText.slice(mid)
    let res = ""

    for (i = 0; i < mid + (encryptedText.length % 2); i++) {
        res += secondHalf[i] + (firstHalf[i] || "")
    }

    return decrypt(res, n - 1)
}

console.log(encrypt("This is a test!", 1))

console.log(decrypt(encrypt("This is a test!", 1), 1))

//explanation tweet: https://twitter.com/Codingwithroy/status/1657060587816222732?s=20