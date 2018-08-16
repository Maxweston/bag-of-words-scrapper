var Xray = require("x-ray");
var x = Xray();

let sportinglife = x("https://www.sportinglife.com/", [
  "p",
  "h1",
  "h2",
  "h3",
  "h4"
]).then(res => {
  return res;
});

let wiki = x("https://en.wikipedia.org/wiki/Gambling", [
  "p",
  "h1",
  "h2",
  "h3",
  "h4"
]).then(res => {
  return res;
});

async function compareText() {
  console.log("here3");
  let sp = await sportinglife;
  let wki = await wiki;
  sp = sp.join(" ");
  wki = wki.join(" ");
  sp = splitIntoWords(sp);
  wki = splitIntoWords(wki);
  console.log("sp:", sp);
  console.log("wki:", wki);
}

function splitIntoWords(string) {
  return string.split(" ");
}

compareText();
