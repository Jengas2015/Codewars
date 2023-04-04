/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */

function domainName(url){
    const removeHttp = url.split("http://").join('')
    const removeHttps = removeHttp.split("https://").join('')
    const removeWWW = removeHttps.split("www.").join('')
    let siteArr = removeWWW.split('')
    siteArr.splice(siteArr.indexOf("."))
    return siteArr.join('')
  }

  console.log(domainName("https://www.cnet.com"))

  //link to explanation tweet: https://twitter.com/Codingwithroy/status/1643252200989130755?s=20