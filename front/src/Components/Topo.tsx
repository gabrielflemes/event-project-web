import { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
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
import { Hidden, IconButton } from '@mui/material';
import IEvent from '../Interfaces/event.interface';
import { GetEventByFilter } from '../Services/events-service';
import { EventsContext } from '../Contexts/Events';

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

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));


const useStyles = makeStyles({
    container: {
        backgroundColor: '#014201',
        marginBottom: "2em",
        color: "#FFF"
    },
    gridLogo: {
        textAlign: "center",
        padding: "0.2em"
    },
    img: {
        height: "70px"
    },
    gridSearch: {
        textAlign: "center",
    },
    search: {
        marginTop: '1.1em'
    },
    gridMenu: {
        textAlign: "center"
    },
    menu: {
        marginTop: '1.4em !important',
        color: "#FFF !important"
    },

});

export default function Topo(): JSX.Element {

    const classes = useStyles();

    const [events, setEvents] = useContext(EventsContext);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    //variable that will keep my filter value
    const [inputSearch, setInputSearch] = useState<string>("");


    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };



    const handleClose = () => {
        setAnchorEl(null);
    };

    const searchEvent = (e: any) => {

        //find events by filter
        GetEventByFilter(inputSearch).then((res: IEvent[] | void) => {
            if (res) {
                setEvents(res);
            }
        })

    }

    return (
        <Grid className={classes.container} container spacing={1}>

            <Grid item xs={3} sm={2} md={4} className={classes.gridLogo}>
                <img src='./logo192.png' className={classes.img}></img>
            </Grid>

            <Grid item xs={9} sm={10} md={4} className={classes.gridSearch}>
                <Search className={classes.search} onKeyUp={(e: any) => {
                    //when we can do sth when the ENTER is pressed, we can use keyCode equals 13
                    //13 is enter from ascii table
                    if (e.keyCode == 13) {
                        searchEvent(e);
                    }
                }}>
                    <IconButton onClick={searchEvent}>
                        <SearchIcon />
                    </IconButton >
                    <StyledInputBase
                        value={inputSearch}
                        onChange={(e: any) => {
                            setInputSearch(e.target.value);
                        }}
                        placeholder="Search events"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Grid>


            <Grid className={classes.gridMenu} item xs={12} sm={12} md={4} >

                <Button
                    className={classes.menu}
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="text"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    Organize
                </Button>

                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} disableRipple>

                        Why Eventbrite?
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>

                        Pricing
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>

                        Resources
                    </MenuItem>
                </StyledMenu>

                <Button
                    className={classes.menu}
                    id="demo-customized-button"
                    aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    variant="text"
                    disableElevation
                    onClick={handleClick}
                    endIcon={<KeyboardArrowDownIcon />}
                >
                    Help
                </Button>

                <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                        'aria-labelledby': 'demo-customized-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose} disableRipple>

                        Find your tickets
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>

                        Contact an event organizer
                    </MenuItem>
                    <MenuItem onClick={handleClose} disableRipple>

                        Visit the help center
                    </MenuItem>
                </StyledMenu>

                <Button variant="text" className={classes.menu}>Sign In</Button>

            </Grid>

        </Grid>
    )

}