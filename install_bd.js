'use strict';

// Conexión con la Base de Datos
const dbConnection = require('./lib/connectMongoose');

// Modelo de Anuncios
const Anuncio = require('./models/Anuncio');
const anuncioData = require('./anuncios.json');


main().catch(err => console.log('Hubo un error', err));

async function main() {
    await initAnuncios();

    dbConnection.close();
}

async function initAnuncios() {
  // Eliminar todos los anuncios existentes
    const deleted = await Anuncio.deleteMany();
    console.log(`Eliminados ${deleted.deletedCount} anuncios.`);

  // Crear anuncios por defecto
    const anuncios = await Anuncio.insertMany(anuncioData.anuncios);
    console.log(`Creados ${anuncios.length} anuncios.`);
}