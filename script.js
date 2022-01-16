const fs = require("fs");
const strings = require("./customStrings.json");
let result;
strings.forEach(async string => {
  await fs.readFile("./messages.properties", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  result = data.replace(string.original, string.new);

  fs.writeFile("./messages.properties", result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
});
