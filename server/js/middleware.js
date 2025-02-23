import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

const middleware = express.Router()

middleware.use(cors())
middleware.options('*', cors())
middleware.use(bodyParser.urlencoded({ extended: false }))
middleware.use(bodyParser.json())

export default middleware