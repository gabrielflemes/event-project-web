import * as React from 'react';
import { useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { makeStyles } from '@mui/styles';
import { GetEvents } from '../Services/events-service';
import IEvent from '../Interfaces/event.interface';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    font: {
        fontFamily: "Courier New"
    },
    bold: {
        fontWeight: "bold"
    },
    price: {
        color: "green"
    }
});


export default function Cards() {

    const classes = useStyles();
    let navigate = useNavigate();

    //TODO sent this variable to into contextAPI
    //see documentation, videos how contextAPI works
    //
    //const [events, setEvents] = useState<IEvent[]>();


    const irparapage = (id: string) => {

        //go to event selected
        navigate(`/event/${id}`)

    }

    //render cards
    const renderCards = () => {

        let ret = contextEvent.events?.map((event) => {
            return (
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardHeader
                                onClick={() => {
                                    irparapage(event.id);
                                }}
                                title={event.title}
                                subheader={event.date}
                            />
                            <CardMedia
                                component="img"
                                height="150"
                                image={event.img}
                                alt={event.title}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    <p className={classes.bold}>{event.address}</p>
                                    <p className={classes.bold}>{event.company}</p>
                                    <p>Price: <span className={classes.price}>{event.amount}</span></p>
                                    <p><span>Confirmed: </span>{event.confirmed}</p>
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>

                            </CardActions>
                        </CardActionArea>
                    </Card>
                </Grid>
            )
        })

        return ret;
    }

    //get all events
    useEffect(() => {
        GetEvents().then((res: IEvent[] | void) => {
            if (res) {
                contextEvents.setEvents(res)
            }

        });
    }, []);

    return (
        <Grid container spacing={2}>
            {renderCards()}
        </Grid>
    )
}