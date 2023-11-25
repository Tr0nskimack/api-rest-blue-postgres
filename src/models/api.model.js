import {pool} from "../database/connection.js"

const findAll = async() => {
    const {rows} = await pool.query("SELECT * FROM todos")
    return rows 
}

//de esta forma el create es mas seguro de realizar, para evitar el SQL inyection
const create = async(title) => {
    const query = 'INSERT INTO todos (title) VALUES ($1) RETURNING *'
    const {rows} = await pool.query(query, [title])
    return rows[0]
}


export const apiModel = {findAll, create}