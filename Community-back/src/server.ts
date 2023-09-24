import express from "express"
import cors from "cors"

import { peoples } from './data'

require('dotenv').config()

const app = express();

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]//o local varia de acordo de qual link está vindo a requisição
}))

//adicionando uma rota
app.get("/api/people", (req, res)=>{
    res.send(peoples)
})

app.get('api/people/:id', (req, res)=>{
    const id =  parseInt(req.params.id)
    const found = peoples.find(item => item.id == id)
    res.send(found)
})

//create
app.post('api/people', (req, res)=>{
    const newItem = req.body
    peoples.push(newItem)
    res.send("Adicionado com sucesso")
})

app.get('api/people/:id', (req, res)=>{
    const id =  parseInt(req.params.id)//2
    const found = peoples.find(item => item.id == id)

    if(found){
        res.send(found)
    }else{
        res.status(404).send("Não encontrado")
    }
})


const port = process.env.PORT
app.listen(port, ()=>{
    console.log("Server iniciado na porta http//:localhost:" + port)
})