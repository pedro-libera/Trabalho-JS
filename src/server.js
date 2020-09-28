const express = require("express");
const routes = require("./routes");
const app = express();

app.use(express.json())
app.use(routes);

app.listen(3001, ()=>{
    console.log("servidor está rodando na porta 3001");
})