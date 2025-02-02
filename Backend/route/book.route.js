import { Router } from 'express'
import { getBook } from '../controller/book.controller.js'


const bookRouter = Router()

bookRouter.get("/",getBook)

export default bookRouter