import dotenv from "dotenv/config";
import pkg from 'pg'
const {Pool} = pkg 


export const pool = new Pool({
    allowExitOnIdle: true //para indicarle que cierre las conexiones lo mas rapido posible
})

try { //con esta sentencia probamos en consola que se haya establecido una conexion con la base de datos, el comando seria node  node src/database/(nombre de la base de datos)
    await pool.query("select now()")
    console.log("Database connected");
    
} catch (error) {
    console.log(error);
}



