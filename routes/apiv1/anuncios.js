'use strict';

const express = require('express');
const router = express.Router();
const Anuncio = require('../../models/Anuncio');

// GET /apiv1/anuncios
// Devuelve una lista de anuncios
router.get('/', async (req, res, next) => {
    try {
        const nombre = req.query.nombre;
        const venta = req.query.venta;
        const precio = req.query.precio;
        const tags = req.query.tags;
        const skip = req.query.skip;
        const limit = req.query.limit;
        const select = req.query.select;
        const sort = req.query.sort;

        const filtro = {};

        if (nombre) {
        filtro.nombre = nombre;
        }

        if (venta) {
        filtro.venta = venta;
        }

        if (precio) {
        filtro.precio = precio;
        }

        if (tags) {
        filtro.tags = tags;
        }

        const anuncios = await Anuncio.lista(filtro, skip, limit, select, sort);
        res.json({ results: anuncios });
    } catch (err) {
        next(err);
    }
    });


    // GET /apiv1/anuncios:id
    // Obtener un anuncio
    router.get('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;

        const anuncio = await Anuncio.find({ _id: _id });
        res.json({ result: anuncio });
    } catch (err) {
        next(err);
    }
    });


    // GET /apiv1/anuncios/precioMIN/precioMAX
    // Filtrar por rango de precios
    router.get('/:precio1/:precio2', async (req, res, next) => {
    try {
        const rango = [req.params.precio1, req.params.precio2];

        const anuncio = await Anuncio.find({ precio: { $gt: rango[0], $lt: rango[1] } });

        res.json({ result: anuncio });
    } catch (err) {
        next(err);
    }
    });


    // POST /apiv1/anuncios
    // Crear un anuncio
    router.post('/', async (req, res, next) => {
    try {
        const anuncioData = req.body;

        const anuncio = new Anuncio(anuncioData);

        const anuncioCreado = await anuncio.save();

        res.status(201).json({ result: anuncioCreado });

    } catch (err) {
        next(err);
    }
    });


    // PUT /apiv1/anuncios:id
    // Actualizar un anuncio
    router.put('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;
        const anuncioData = req.body;

        const anuncioActualizado = await Anuncio.findOneAndUpdate({ _id: _id }, anuncioData, {
        new: true
        });

        if (!anuncioActualizado) {
        res.status(404).json({ error: 'not found'});
        return;
        }

        res.json({ result: anuncioActualizado });
    } catch (err) {
        next(err);
    }
    });


    // DELETE /apiv1/anuncios:id
    // Elimina un anuncio
    router.delete('/:id', async (req, res, next) => {
    try {
        const _id = req.params.id;

        await Anuncio.deleteOne({ _id: _id });
        res.json();
    } catch (err) {
        next(err);
    }
    });

module.exports = router;