const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/partidoController');

router.get('/torneo/:torneo', ctrl.getByTorneo);
router.get('/equipo/:equipo', ctrl.getByEquipo);
router.get('/fecha/:fechaInicio-:fechaFin', ctrl.getByFecha);
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getById);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.remove);

module.exports = router;