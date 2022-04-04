import * as React from 'react';
import { useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { makeStyles } from '@mui/styles';
import GetCards from '../Services/cards-service';
import ICards from '../Interfaces/card.interface';



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


    const [cards, setCards] = useState<ICards[]>();


    const renderCards = () => {

        let ret = cards?.map((card) => {
            return (
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader
                            title={card.title}
                            subheader={card.date}
                        />
                        <CardMedia
                            component="img"
                            height="150"
                            image={card.img}
                            alt={card.title}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                <p className={classes.bold}>{card.address}</p>
                                <p className={classes.bold}>{card.company}</p>
                                <p>Price: <span className={classes.price}>{card.amount}</span></p>
                                <p><span>Confirmed: </span>{card.confirmed}</p>
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

                    </Card>
                </Grid>
            )
        })

        return ret;
    }

    useEffect(() => {
        GetCards().then((res) => {
            setCards(res)
        });
    }, []);

    return (
        <Grid container spacing={2}>
            {renderCards()}
        </Grid>
    )
}