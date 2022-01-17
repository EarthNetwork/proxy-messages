const fs = require("fs");
const strings = require("./customStrings.json");
let result;
strings.forEach(async string => {
  console.log("String actuelle: " + JSON.stringify(string));
  await fs.readFile("./messages.properties", 'utf8', async function (err,data) {
  if (err) {
    return console.log(err);
  }
  result = await data.replaceAll(string.original, string.new);

  await fs.writeFile("./messages.properties", result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
});
