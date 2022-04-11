import IEvent from "../Interfaces/event.interface";
import api from "./api";

export function GetEvents(): Promise<IEvent[] | void> {

    return api.get("/events").then((res: any) => {
        if (res) {
            return res.data;
        }

    })
}

export function GetEventById(id: string): Promise<IEvent | void> {

    return api.get(`/event/${id}`).then((res: any) => {
        
        if (res) {
            return res.data;
        }

    })
}

export function GetEventByFilter(filter: string): Promise<IEvent[] | void> {

    return api.get(`/events/${filter}`).then((res: any) => {
        
        if (res) {
            return res.data;
        }

    })
}
