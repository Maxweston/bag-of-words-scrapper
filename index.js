var Xray = require("x-ray");
var x = Xray();
var sportinglife;
var wiki;

x("https://www.sportinglife.com/", [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "section",
  "header"
])(function(err, data) {
  // console.log(data);
  sportinglife = data;
});

var wiki = x("https://en.wikipedia.org/wiki/Gambling", [
  "p",
  "h1",
  "h2",
  "h3",
  "h4",
  "section",
  "header"
])(function(err, data) {
  // console.log(data);
  wiki = data;
});

console.log(sportinglife);
console.log(wiki);
// x("https://en.wikipedia.org/wiki/Gambling", [
//   fresh8: ".fresh8"
// ]).write("other-results.json");
