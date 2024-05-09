import {Router} from 'express'
import Pelicula from '../models/Pelicula.js'

const router = Router()

router.get('/peliculas', async(req,res) => {
    try {
        const movies = await Pelicula.findAll()

        res.status(200).json({movies: movies})
    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/peliculas/:id', async(req,res) => {

    const {id} = req.params

    try{
        const movie = await Pelicula.findOne({
            where: {
                id
            }
        })

        res.status(200).json({movies: movie})
    }catch(e) {
        res.status(500).json({error: error})
    }
})

router.post('/peliculas/:id', async(req,res) => {

    const {Nombre, Descripcion, Puntuacion, Duracion, categoria_id} = req.body

    try{
        const newMovie = Pelicula.create({Nombre, Descripcion, Puntuacion, Duracion, categoria_id})

        res.status(200).json({movies: movie})
    }catch(e) {
        res.status(500).json({error: e})
    }
})

router.put('/peliculas/:id', async(req,res) => {
    
    const {Nombre, Descripcion, Puntuacion, Duracion, categoria_id} = req.body
    const {id} = req.params
    
    try{
        const movie = await Pelicula.update({Nombre, Descripcion, Puntuacion, Duracion, categoria_id}, 
            {
                where: {
                    id
                }
            }
        )

        res.json({movie: movie})
    }catch(e){
        res.json({error: e})

    }
})

router.delete('/peliculas/:id', async(req,res) => {
    const {id} = req.params
    
    const movie = await Pelicula.delete({
        where: {
            id
        }
    })

    res.json({msg: "Pelicula elimada con exito"})
})



export default router