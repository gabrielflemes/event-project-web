import { Search } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Cardes from "../Components/Cardes";

export default function Publicidade(): JSX.Element {

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <p>
                        Things to do in
                    </p>
                    <Search>
                        {/* <KeyboardArrowDownIcon>
                            <SearchIcon />
                        </KeyboardArrowDownIcon>
                        <StyledInputBase
                            placeholder="Lisbon"
                            inputProps={{ 'aria-label': 'search' }}
                        /> */}

                    </Search>
                    {/* <p className={classes.font}>
                        Looking for something to do in Lisbon? Whether you're a local, new in town or just cruising through we've
                        got loads of great tips and events. You can explore by location, what's popular, our top picks, free stuff...
                        you got this. Ready?
                    </p> */}
                </Grid>

                <Grid item xs={4}>
                    <figure>
                        {/* <img className={classes.img} src='lisbon.jpg'></img> */}
                    </figure>
                </Grid>

                <Grid item xs={4}>

                </Grid>
            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    {/* <Button className={classes.font} variant="text">Popular in Lisboa</Button> */}
                </Grid>
            </Grid>
        </>
    )
}