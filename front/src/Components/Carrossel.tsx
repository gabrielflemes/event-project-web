import Cardes from "./Cards";
import { Grid } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '@fontsource/roboto/500.css';
import { border } from '@mui/system';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: 0,
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const useStyles = makeStyles({
    buttonevent: {
        color: "#F05537",
        height: "48px",
        padding: '0 30px',
    },
    img: {
        width: "300px",
        height: "290px",
    },
    font: {
        fontFamily: "Courier New"
    },
    toporight: {
        textAlign: "right"
    }
});


export default function Carroussel() : JSX.Element{
    const classes = useStyles();
    return (
        <div >
         <Grid container spacing={1}>
                <Grid item xs={4}>
                    <p>
                        Things to do in
                    </p>
                    <Search>
                        <KeyboardArrowDownIcon>
                            <SearchIcon />
                        </KeyboardArrowDownIcon>
                        <StyledInputBase
                            placeholder="Lisbon"
                            inputProps={{ 'aria-label': 'search' }}
                        />

                    </Search>
                    <p className={classes.font}>
                        Looking for something to do in Lisbon? Whether you're a local, new in town or just cruising through we've
                        got loads of great tips and events. You can explore by location, what's popular, our top picks, free stuff...
                        you got this. Ready?
                    </p>
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
        </div>
    )
}