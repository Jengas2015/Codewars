/* Given a variable n,

If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

If n is not an integer, return the string "NaN".

Ex:

dashatize(274) -> '2-7-4'
dashatize(6815) -> '68-1-5' */

function dashatize(num) {
    if (Number.isInteger(num)) {
        num = Math.abs(num);
        let str = num.toString();
        let result = '';
        for (let i = 0; i < str.length; i++) {
          if (str[i] % 2 === 1) {
            if (i !== 0 && result[result.length - 1] !== '-') result += '-';
            result += str[i];
            if (i !== str.length - 1 && str[i + 1] % 2 === 0) result += '-';
          } else {
            result += str[i];
          }
        }
        return result;
      } else {
        return 'NaN';
      }
}

console.log(dashatize(974302))