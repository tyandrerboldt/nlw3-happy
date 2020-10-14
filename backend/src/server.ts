import express from 'express';

import './database/connection';
import { getRepository } from 'typeorm';
import Orphanage from './models/Orphanage';

const app = express();

app.use(express.json());

/* ROUTES */
app.post('/orphanages', async (request, response) => {
  const {
    name,
    longitude,
    latitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends
  } = request.body;

  const orphanagesRepository = getRepository(Orphanage);

  const orphanage = orphanagesRepository.create({
    name,
    longitude,
    latitude,
    about,
    instructions,
    opening_hours,
    open_on_weekends  
  });

  await orphanagesRepository.save(orphanage);

  return response.status(201).json(orphanage);
})
/* END ROUTES */

app.listen(3333);