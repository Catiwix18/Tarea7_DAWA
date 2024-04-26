const express = require('express');
const app = express();
app.set('view engine', 'pug');


// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta para el portafolio personal
app.get('/Portafolio/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.render('index', { nombre });
});

// Ruta para la página de habilidades
app.get('/Portafolio/:nombre/habilidades', (req, res) => {
  const nombre = req.params.nombre;
  res.render('habilidades', { nombre });
});

// Ruta para la página de contacto
app.get('/Portafolio/:nombre/contacto', (req, res) => {
  const nombre = req.params.nombre;
  res.render('contacto', { nombre });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
