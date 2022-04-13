import React, { createContext, ReactNode, useState } from "react";
import IEvent from '../Interfaces/event.interface';

type EventsContextProps = {
    children: ReactNode
}

export const EventsContext = createContext<any>(null);

export function EventsProvider({ children }: EventsContextProps) {

    const [events, setEvents] = useState<IEvent>();

    return (
        <EventsContext.Provider value={[ events, setEvents ]}>
            {children}
        </EventsContext.Provider>
    )
}
