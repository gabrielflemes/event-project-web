


const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

app.get("/cards", (req, res) =>{
    res.send([
        {
            "id": 1,
            "title": "Qualquer coisa",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 1,
            "title": "Qualquer coisa",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 1,
            "title": "Qualquer coisa",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 1,
            "title": "Qualquer coisa",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 1,
            "title": "Qualquer coisa",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 1,
            "title": "Qualquer coisa",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 1,
            "title": "Qualquer coisa",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        }
    ])
})

app.get("/distritos", (req, res) =>{

    res.send([
        {
            "id": 1,
            "title": "Lisboa"
        },
        {
            "id": 1,
            "title": "Porto"
        }
        
    ])

})


app.listen(3001, ()=>{
    console.log("Rodando")
})