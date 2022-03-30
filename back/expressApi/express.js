


const express = require("express")
const app = express()

app.get("/cards", (req, res) =>{
    res.send(cards)
})

app.listen(3000)