var express = require('express');
var router = express.Router();

const Anuncio = require('../models/Anuncio');

/* GET home page. */
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
        res.render('index', { title: 'NodePop', anuncios })
    } catch (err) {
        next(err);
    }
    });

module.exports = router;
