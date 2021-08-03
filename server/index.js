const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:'johnny',
    host:'192.168.1.2',
    password:'3321',
    database:'sistemaFuncionarios'
})

app.get('/recebe',(req,res)=>{db.query("SELECT * FROM funcionarios",(err,resultado)=>{if(err){console.log(err)}else{res.send(resultado)}})})
app.post('/criar',(req,res)=>{
    const nome = req.body.nome
    const idade = req.body.idade
    const pais = req.body.pais
    const cargo = req.body.cargo
    const salario = req.body.salario

    db.query("INSERT INTO funcionarios (nome,idade,pais,cargo,salario) VALUES (?,?,?,?,?)",[nome,idade,pais,cargo,salario],
    (err,resultado)=>{if(err){
    console.log(err);
    }else{res.send('valores inseridos com sucesso');console.log('sucesso no envio!')}} )


})

app.listen('5000',()=>{console.log('servidor online!!')});