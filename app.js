const express = require('express');
const mongoose = require('mongoose');
const partidosRouter = require('./routes/partidos');

const app = express();

app.use(express.json());

if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.MONGO_URI);
}

app.use('/partidos', partidosRouter);

const PORT = process.env.PORT || 3000;

module.exports = { app };

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}