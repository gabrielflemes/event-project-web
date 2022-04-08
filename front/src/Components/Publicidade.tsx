import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    container: {
        backgroundColor: "#DCDCDC",
        marginBottom: "1em !important",
        display: "flex"
    },
    
});

export default function Publicidade(): JSX.Element {

    const classes = useStyles();


    return (
        <Grid item xs={12} sm={12} md={12} className={classes.container}>
            {/* <Grid item xs={4}>
                <figure>
                    <a href="https://www.netflix.com/pt/" target="_blank">
                        <img height="120" src="download.jpg" />
                    </a>
                </figure>
            </Grid>

            <Grid item xs={4}>
                <figure>
                    <a href="https://www.ubereats.com/pt" target="_blank">
                        <img height="120" src="download (1).png" />
                    </a> 
                </figure>
            </Grid> */}

            <Grid item xs={12}>
                <figure>
                    <a href="https://www.nos.pt/" target="_blank">
                        <img height="100" width="1000" src="download (2)_Easy-Resize.com (2).jpg" />
                    </a>
                </figure>
            </Grid>
        </Grid>

    )
}