import { Router } from "express";
import { findOne, findAll, create, update, remove } from "./controllers.js";

const router = Router()

router.get('/', findAll)

router.get('/:id', findOne)

router.post('/', create)

router.put('/:id', update)

router.delete('/:id', remove)


export default router
