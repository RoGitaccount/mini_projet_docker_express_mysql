const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
const port = 8002;

const connection = mysql.createConnection
({
  host: process.env.MYSQL_SERVER,
  user:  process.env.MYSQL_LOGIN,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect((err)=>{
  if(err){
    console.error("erreur de connexion à SQL :",err);
  }else{
    console.log("connecté à MYSQL");
  }
});

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des utilisateurs : ", err);
      res.status(500).send("Erreur de serveur");
    } else {
      res.json(results);
    }
  });
});

app.get("/", (req, res) => res.send("Affichage express mysql sur docker"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});