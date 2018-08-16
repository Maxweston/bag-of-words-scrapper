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

  stringOccuranceCounter(wki, sp);

  // let resultsSP = new Counter(sp);
  // let resultsWiki = new Counter(wki);
  // let wordOccuranceVectorSp = [];
  // let wordOccuranceVectorWiki = [];
  // for (let [word, times] of resultsSP.entries())
  //   wordOccuranceVectorSp.push(times);

  // for (let [word, times] of resultsWiki.entries())
  //   wordOccuranceVectorWiki.push(times);
  // // console.log("%s occurs %s times", word, times);
  // console.log(wordOccuranceVectorSp);
  // console.log(wordOccuranceVectorWiki);
}

function splitIntoWords(string) {
  return string.split(" ");
}

class Counter extends Map {
  constructor(iter, key = null) {
    super();
    this.key = key || (x => x);
    for (let x of iter) {
      this.add(x);
    }
  }
  add(x) {
    x = this.key(x);
    this.set(x, (this.get(x) || 0) + 1);
  }
}

function stringOccuranceCounter(array1, array2) {
  let occurancearray = [];
  array1.forEach(value1 => {
    array2.forEach(value2 => {
      if (value1 === value2) {
        occurancearray.push({
          word: value1,
          occurance: 1
        });
      } else {
        occurancearray.push({
          word: value1,
          occurance: 0
        });
      }
    });
  });
  console.log(occurancearray);
  occurancearray.forEach(value => {
    if (value.occurance === 1) {
      console.log(value);
    }
  });
}

// function CosineSimilarity(dataSet1Vector, dataSet2Vector) {}

compareText();
