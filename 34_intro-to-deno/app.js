// EXAMPLE WITH NODEJS
const fs = require('fs').promises;

const text = 'This is the same example but using Node.js instead';

fs.writeFile('node-message.txt', text).then(() => {
  console.log('Wrote file!');
});
