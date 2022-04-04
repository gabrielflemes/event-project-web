
import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';



const useStyles = makeStyles({
    container: {
        backgroundColor: 'green',
        height: '120px',
        marginTop: "3em !important",
        alignItems: "center"
    },
    rodape: {
        textAlign: "center"
    }
});


export default function Rodape(): JSX.Element {

    const classes = useStyles();


    return (
        <Grid className={classes.container} container spacing={1}>
            <Grid item xs={12} className={classes.rodape}>
                rodape
            </Grid>
        </Grid>
    )
}