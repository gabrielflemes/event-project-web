import * as React from 'react';
import { useEffect, useState } from 'react';
import { Grid } from "@mui/material";
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from '@mui/styles';
import GetCards from '../Services/cards-service';
import ICards from '../Interfaces/card.interface';



const useStyles = makeStyles({
    font: {
        fontFamily: "Courier New"
    },
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
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">

                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={card.img}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {card.title}
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