import mongoose from 'mongoose'

// database.js

const uri = 'mongodb+srv://lucas001spe:hola1234@speziale.sppp3v1.mongodb.net/?retryWrites=true&w=majority'; // Reemplaza con tu propia URL de conexión
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected.');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
