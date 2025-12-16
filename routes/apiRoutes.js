import express from 'express'
import { getAllData } from '../controllers/getAllData.js'
import { getDataByPathParams } from '../controllers/getDataByPathParams.js'
import { createStartup } from '../controllers/createStartup.js'
import { deleteStartup } from '../controllers/deleteStartup.js'
import { updateStartup } from '../controllers/updateStartup.js'

export const apiRouter = express.Router()

apiRouter.get('/', getAllData)

apiRouter.get('/:field/:term', getDataByPathParams)

apiRouter.post('/newStartup', createStartup)

apiRouter.delete('/deleteStartup/:id', deleteStartup)

apiRouter.put('/updateStartup/:id', updateStartup)

