import express from 'express'
import {getRepository} from 'typeorm'

import './database/connection'
import Orphanage from './models/orphanage'

const app = express()

app.use(express.json())

app.post('/orphanages', async (request, response)=>{
    console.log(request.body);
    
    const {
        id,
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = request.body

    const orphanagesRepository = getRepository(Orphanage)
    const orphanage = orphanagesRepository.create({
        id,
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    })

    await orphanagesRepository.save(orphanage)

    return response.json({ message: 'Hello Word' })
    
})

app.listen(3333, ()=>{console.log('SERVER IS RUNNING')})