require('dotenv').config();
const express = require('express')
var hbs = require('hbs');

const app = express()
const port = process.env.PORT;


// Cuando yo le pida a HandleBars que renderice una vista la va a buscar en el directorio de Views, por lo tanto debo crear dicho directorio (es la configuraión predeterminada)

// HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido estático

// Carpeta pública tiene prioridad sobre las rutas
// Express va a buscar el archivo llamado index.html cuando servimos contenido estático, entonces debe ser llamado así
app.use(express.static('public'));

// HBS Vistas
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
});

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html')
// });

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Fernando Herrera',
    titulo: 'Curso de Node'
  });
});

// app.get('*', (req, res) => {
//   res.sendFile(__dirname + '/public/404.html')
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});
