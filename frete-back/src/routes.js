import express from 'express';
import city from './controller/cidadesController.js';

const router = express.Router();

router.use('/City', city)

router.use("/*", (req, res) => {
    res.status(404).send({message: "Caminho não encontrado"});
})

export default router;