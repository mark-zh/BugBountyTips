/*
  Developer: Marzavec ( https://github.com/marzavec )
  Description: A simple browser-based subdomain bruteforcing script, using DoH providers. Developed as a 5 minute hack, just to see it's preformance. Many improvements could be made, such as adding error handling or informing the user when the script is done.
  Usage: Open the browsers dev console (usually F12), paste this script, change the `rootTld`, press enter to run. Ezpz.
*/

const rootTld = 'lyka.pro'; // change to your target's root tld

// url to newline seperated wordlist
const wordlistUrl = 'https://raw.githubusercontent.com/rbsec/dnscan/master/subdomains.txt';
// array of dns over https providers, these have been tested against ratelimiting
const providerArray = ['https://dns.google.com/resolve','https://doh-jp.blahdns.com/dns-query','https://doh-de.blahdns.com/dns-query','https://dns.dns-over-https.com/dns-query','https://doh.securedns.eu/dns-query','https://doh.dns.sb/dns-query','https://doh.li/dns-query'];

// pull wordlist from source path
async function pullWordlist(path) {
  let response = await fetch(path);
  let data = await response.text();
  return data.split("\n");
}

// loop through each word and start the dns request
async function start(wordlist) {
  wordlist.forEach((word) => {
    requestDns(`${word}.${rootTld}`);
  });
}

// preforms the get request to a random doh provider
async function requestDns(domain) {
  let provider = providerArray[Math.floor(Math.random()*providerArray.length)];
  let response = await fetch(`${provider}?name=${domain}&type=A&cd=true`);
  let record = await response.json();
  checkResponse(record);
}

// check provider's response, `Status` will be 0 if found
function checkResponse(record) {
  if (record.Status === 0) {
    console.log(`Found ${record.Answer[0].name} at ${record.Answer[0].data}`);
  }
}

// request wordlist, then start processing
pullWordlist(wordlistUrl)
  .then(wordlist => start(wordlist));