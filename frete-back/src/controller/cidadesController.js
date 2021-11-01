import express from 'express';
import db from '../service/cidadesService.js'

const router = express.Router();

router.post('/insert', async (req, res) =>{
    try{
        await db.insertCity(req.body);
        res.status(201).send({message: 'Cidade cadastrada com sucesso'})
    }catch{
        res.status(500).send({mensage:`Internal Error Server`});
    }
});

router.get('/findAll', async (req, res) => {
    try{
        const found = await db.findAllcity();
        res.status(201).send(found);
    }catch (err){
        res.status(500).send({mensage: err});
    }
});

router.get('/findName/:name', async (req, res) => {
    try{
        const nameCity = req.params.name;
        console.log(nameCity)
        const city = await db.findNameCity(nameCity);
        res.status(201).send({message: city}); 
    }catch(err){
        res.status(500).send({mensage:err});
    }
});


router.put('/updateCity', async (req, res) =>{
    try{
        await db.updateCity(req.body);
        res.status(201).send({message: 'Cidade cadastrada com sucesso'})
    }catch{
        res.status(500).send({mensage:`Internal Error Server`});
    }
});


export default router;