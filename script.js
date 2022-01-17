const fs = require("fs");
const strings = require("./customStrings.json");
let result;
  fs.readFile("./messages.properties", 'utf8', async function (err,data) {
  if (err) {
    return console.log(err);
  }
    strings.forEach(async string => {
        console.log("String actuelle: " + JSON.stringify(string));
  result = await data.replaceAll(new RegExp(string.original, 'g'), string.new);
      });

  await fs.writeFile("./messages.properties", result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});

