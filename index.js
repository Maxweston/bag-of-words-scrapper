var Xray = require("x-ray");
var x = Xray();

x("https://www.sportinglife.com/", {
  document: x(["p", "h1", "h2", "h3", "h4", "section", "header"]),
  ad: x(".fresh8 .container", ["*"])
}).write("page-results.json");

// x("https://en.wikipedia.org/wiki/Gambling", [
//   fresh8: ".fresh8"
// ]).write("other-results.json");
