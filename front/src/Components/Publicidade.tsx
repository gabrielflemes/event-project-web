import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    container: {
        marginBottom: "1em !important",
    },
    img:{
        width: '100%',
        height: '10em'
    }
});

export default function Publicidade(): JSX.Element {

    const classes = useStyles();


    return (
        <Grid item xs={12} sm={12} md={12} className={classes.container}>
            <img src="download.jpg" className={classes.img} />
        </Grid>

    )
}