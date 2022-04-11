import { makeStyles } from '@mui/styles';
import { Grid } from "@mui/material";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetEventById } from '../Services/events-service';
import IEvent from '../Interfaces/event.interface';
import { Description } from '@mui/icons-material';

const useStyles = makeStyles({
    font: {
        textAlign: "justify"
    },

});

export default function EventDetail() {

    //use styles
    const classes = useStyles();

    //use param id
    const { id } = useParams();

    //event
    const [event, setEvent] = useState<IEvent>();

    //
    useEffect(() => {

        //get event by id
        if (id) {
            GetEventById(id).then((res: IEvent | void) => {            
                if (res) {
                    setEvent(res);
                }
            })
        }

    }, [])

    //
    return (
        <>
            <Grid item xs={3} sm={6} md={12}>
                <h1>{event?.title}</h1>

                <p className={classes.font}>
                    {event?.description}
                </p>
                <p>Promotor: BETTER WORLD</p>
            </Grid>

        </>
    )
}