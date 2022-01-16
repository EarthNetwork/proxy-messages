const fs = require("fs");
const strings = require("customStrings.json");
let result;
fs.readFile("./customStrings.json", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  strings.forEach(string => {
    result = data.replace(string.original, string.new);
  })

  fs.writeFile("./customStrings.json", result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
