

const http = require('http');

http.createServer( (req, res) => {
  // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
  // res.writeHead(200, {'Content-Type': 'application/csv'});

  // res.write('id, nombre\n');
  // res.write('1, Selene\n');
  // res.write('2, Anaid\n');
  // res.write('3, Maza\n');
  // res.write('4, Pelu\n');
  // res.write('5, Pan\n');
  res.end();
})
.listen(3001);

console.log('Escuchando el puerto ', 3001);