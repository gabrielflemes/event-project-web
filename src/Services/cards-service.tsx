import ICards from "../Interfaces/card.interface";
import api from "./api";

export default function GetCards(): any{

    api.get("/cards").then((res)=>{
        debugger
        console.log(res)
    })

  

}
