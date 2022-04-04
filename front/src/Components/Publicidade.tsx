import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    container: {
        backgroundColor: "blue",   
        marginBottom: "1em !important"      
    }
});

export default function Publicidade(): JSX.Element {

    const classes = useStyles();


    return (
        <Grid item xs={12} sm={12} md={12} className={classes.container}>
            publicidade
        </Grid>
    )
}