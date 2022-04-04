import ICards from "../Interfaces/card.interface";
import api from "./api";

export default function GetCards() {

    return api.get("/cards").then((res) => {
        if (res) {
            return res.data;
        }

    })
}
