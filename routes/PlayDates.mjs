import express from 'express'
import PlayDate from '../models/Playdates.mjs'
//could not be found when I uploaded to render, trying to change path
const router = express.Router()

router.get('/', async (req, res) => {
    let PlayList = await PlayDate.find({});
        res.json(PlayList)
    
})

router.post('/createPlayDate/:id', (req, res) => {
    console.log(PlayDate, req.body)
    PlayDate.create(req.body)
    .then(PlayDate=>res.json(PlayDate))
    .catch(err => res.json(err))
})

export default router;