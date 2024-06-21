import express from 'express'
import API from './routes/index.api.js';
import { generateResponse } from './utils/helper.js';
import cors from 'cors'

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
  }));
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res) => generateResponse(null,`DBMS Project Running`,res)); 

new API(app).registerGroups();

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})