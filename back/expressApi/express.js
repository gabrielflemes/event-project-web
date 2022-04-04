


const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

app.get("/cards", (req, res) =>{
    res.send([
        {
            "id": 1,
            "title": "O bicho vai pegar",
            "company": "XYZ Pub",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 2,
            "title": "O bicho vai pegar",
            "company": "XYZ Pub",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 3,
            "title": "O bicho vai pegar",
            "company": "XYZ Pub",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 4,
            "title": "O bicho vai pegar",
            "company": "XYZ Pub",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 5,
            "title": "O bicho vai pegar",
            "company": "XYZ Pub",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 6,
            "title": "O bicho vai pegar",
            "company": "XYZ Pub",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 7,
            "title": "O bicho vai pegar",
            "company": "XYZ Pub",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        },
        {
            "id": 8,
            "title": "O bicho vai pegar",
            "company": "XYZ Pub",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://wow.olympus.eu/webfile/img/1632/oly_testwow_stage.jpg?x=1024"
        }
        ,
        {
            "id": 9,
            "title": "O bicho vai pegar",
            "company": "XYZ Pub",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
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