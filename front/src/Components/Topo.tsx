import * as React from 'react';
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
    buttonevent: {
        color: "#F05537",
        height: "48px",
        padding: '0 30px',
    },
    topo: {
        width: "1899px",
        height: "81px",
        left: "4px",
        top: "2px",
        right: "1903px",
        bottom: "71px",
        backgroundColor: 'green',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        marginTop: 10,
        marginLeft: 90,
        marginRight: 10,
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

export default function Topo(): JSX.Element {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid className={classes.topo} container spacing={1}>
            <Grid item xs={3}>
                <Button className={classes.buttonevent} color="secondary" variant="text">eventbrite</Button>
            </Grid>
            <Grid item xs={5}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search events"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
            </Grid>
            <Grid className={classes.toporight} item xs={4}>
                <Button
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

                <Button variant="text">Sign In</Button>
            </Grid>
        </Grid>
    )

}