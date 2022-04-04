import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({

    
    font: {
        fontFamily: "Courier New"
    },
});

export default function Publicidade(): JSX.Element {

    const classes = useStyles();


    return (
        <div>
            <Grid  container spacing={1}>
                <Grid item xs={12}>
                    <p>
                        PUBLICIDADE AQUI
                    </p>

                </Grid>

                
            </Grid>

        </div>
    )
}