


const express = require("express")
const cors = require("cors")
const app = express()
app.use(cors())

app.get("/cards", (req, res) =>{
    res.send([
        {
            "id": 1,
            "title": "ExpoFranchise",
            "company": "Foxtrop",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 5:00 PM",
            "amount":"FREE",
            "confirmed":"29",
            "img": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F110313875%2F179983116951%2F1%2Foriginal.20200903-010709?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=46%2C107%2C648%2C324&s=2d511d1887f7cb0a3301f759542ad14a"
        },
        {
            "id": 2,
            "title": "Rock in Rio Lisbon",
            "company": "Startup Lisboa",
            "address":"Av. Mar. Gomes • Lisboa",
            "date":"Thu, Jun 7 at 9:00 AM",
            "amount":"€80.00",
            "confirmed":"250",
            "img": "https://cdn.rockinrio.com/wp-content/themes/rir2/assets/images/shared-fb.png"
        },
        {
            "id": 3,
            "title": "Web3 Europe - Lisbon",
            "company": "SITTO",
            "address":"Centro Cultural de Belém • Lisboa",
            "date":"Thu, May 19 at 3:00 PM",
            "amount":"FREE",
            "confirmed":"62",
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5HFIiGmqHNzbEhdIAHvQSkLZConJIfS7hyw&usqp=CAU"
        },
        {
            "id": 4,
            "title": "Culture in Lisbon",
            "company": "Fab Lab",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Sat, April 12 at 10:00 AM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://offloadmedia.feverup.com/lisboasecreta.co/wp-content/uploads/2021/04/17043701/Lisboa-esta%CC%81-OK-para-desconfinar-cultura-eventos-ao-ar-livre-restaurantes-e-centros-comerciais-reabrem-dia-19-de-abril-Foto-por-Paulo-Evangelista.jpg"
        },
        {
            "id": 5,
            "title": "Global Conference",
            "company": "BOCAE",
            "address":"Camões square • Lisboa",
            "date":"Today at 6:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://aguiamweddingphotography.com/wp-content/uploads/2020/05/aguiam-wedding-photography_events-06-1.jpg"
        },
        {
            "id": 6,
            "title": "MC Poze",
            "company": "XYZ Funk",
            "address":"Altice Arena • Lisboa",
            "date":"Friday, Apr 15 at 12:00 PM",
            "amount":"€30.00",
            "confirmed":"32",
            "img": "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/1/c/b/6/1cb6b038ad909da30403a996fa0089c7.jpg"
        },
        {
            "id": 7,
            "title": "Baile Funk",
            "company": "RCA Club",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Friday, Apr 22 at 12:00 PM",
            "amount":"€10.00",
            "confirmed":"32",
            "img": "https://offloadmedia.feverup.com/lisboasecreta.co/wp-content/uploads/2019/08/16103141/15732642_1192255840852787_4013284277907738028_o-1024x682.jpg"
        },
        {
            "id": 8,
            "title": "Gloria Groove",
            "company": "Kodizilla",
            "address":"Carlos Lopes Pavillion • Lisboa",
            "date":"Sat, Apr 9 at 11:00 PM",
            "amount":"€40",
            "confirmed":"32",
            "img": "https://yt3.ggpht.com/bB-BjsfmyCs27_PW0RmtI6O6Ox7_TPekQHLGgyOQDYt5nBOkvAv_rNd0xI0cIqaEAbimaqjo=s900-c-k-c0x00ffffff-no-rj"
        }
        ,
        {
            "id": 9,
            "title": "O bicho vai pegar",
            "company": "Okah",
            "address":"Av. 24 de Julho 68E • Lisboa",
            "date":"Today at 7:00 PM",
            "amount":"FREE",
            "confirmed":"32",
            "img": "https://www.maximehotellisbon.com/wp-content/uploads/sites/222/2020/11/maxime-hotel-lisbon-bar_gallery04.jpg"
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