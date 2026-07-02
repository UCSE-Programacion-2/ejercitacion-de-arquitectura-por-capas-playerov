const Partido = require('../models/Partido');

exports.getAll = async (req, res) => {
  const partidos = await Partido.find().limit(20);
  res.status(200).json(partidos);
};

exports.getById = async (req, res) => {
  const partido = await Partido.findById(req.params.id);
  if (!partido) return res.status(404).json({ error: 'Partido no encontrado' });
  res.status(200).json(partido);
};

exports.create = async (req, res) => {
  try {
    const partido = await Partido.create(req.body);
    res.status(201).json(partido);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  const partido = await Partido.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!partido) return res.status(404).json({ error: 'Partido no encontrado' });
  res.status(200).json(partido);
};

exports.remove = async (req, res) => {
  const partido = await Partido.findByIdAndDelete(req.params.id);
  if (!partido) return res.status(404).json({ error: 'Partido no encontrado' });
  res.status(200).json({ message: 'Partido eliminado' });
};

exports.getByTorneo = async (req, res) => {
  const partidos = await Partido.find({ tournament: req.params.torneo });
  res.status(200).json(partidos);
};

exports.getByEquipo = async (req, res) => {
  const partidos = await Partido.find({
    $or: [{ home_team: req.params.equipo }, { away_team: req.params.equipo }]
  });
  res.status(200).json(partidos);
};

exports.getByFecha = async (req, res) => {
  const { fechaInicio, fechaFin } = req.params;
  const partidos = await Partido.find({
    date: { $gte: fechaInicio, $lte: fechaFin }
  });
  res.status(200).json(partidos);
};