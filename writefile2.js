var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Este é meu texto', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});