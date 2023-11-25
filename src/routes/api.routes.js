import {Router} from "express"
import { apiController } from "../controllers/api.controllers.js";




const router = Router()
router.get("/", apiController.getTodos)
router.post("/", apiController.create)


export default router;