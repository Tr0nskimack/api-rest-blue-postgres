import dotenv from "dotenv/config";
//el que arranca la aplicacion
import app from './app.js'

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
  console.log(`Server running on port ${PORT}`);
})
