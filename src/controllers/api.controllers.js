import { apiModel } from "../models/api.model.js";

//logica que muestra todos los registros
export const getTodos = async (_, res) => {
    try {
        const response = await apiModel.findAll()
        res.json(response)
    } catch (error) {
        console.log(error);
    }
}
//logica que crea un registro
const create = async(req, res) => {
    try {
        const {title} = req.body
        const response = await apiModel.create(title)
        res.json(response)

    } catch (error) {
        console.log(error);
    }
}

export const apiController = {
    getTodos, create
}

