const repeatString = function(word, repeat) {
  let concatString = "";
  if (repeat < 0) {
    return "ERROR";
  }
  for (let i = 0; i < repeat; i++) {
    concatString += word;
  }
  return concatString;
};

// Do not edit below this line
module.exports = repeatString;
