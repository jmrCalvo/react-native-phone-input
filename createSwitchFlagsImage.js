console.log(process.argv[2]);
var fs = require('fs');

if (!process.argv[2]) {
  return new Error('You must provide a file');
}

var countries = require(process.argv[2]);
console.log(`loaded ${countries.length} countries`);

const exportFile = './switchFlag.ts';

fs.writeFileSync(
  exportFile,
  `
    const flagImage = (flagName: string) => {\n
      switch (flagName) {\n`,
);

for (const country of countries) {
  fs.appendFileSync(
    exportFile,
    `
    \ncase '${country.flag}':
      \n\nreturn require('../assets/flags/${country.flag}.png');
  `,
  );
}

fs.appendFileSync(
  exportFile,
  `
    \n}
    \n};
    \n export default flagImage;`,
);
