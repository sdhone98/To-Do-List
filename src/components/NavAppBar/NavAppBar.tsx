import * as React from 'react';
import {AppBar, Toolbar, Button, Box} from "@mui/material";
import {Typography} from "@mui/material";
import AddIcon from "@material-ui/icons/Add";
import {styled, alpha} from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const style = {
    // border: "1px solid white",
    marginLeft: "0",
    color: "white",

    // background: 'blue'
};


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

interface NavAppBarProps {
    onOpenDialog: () => void;
    onSearchChange: (searchString: string) => void;
}

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
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


const NavAppBar: React.FC<NavAppBarProps> = ({onOpenDialog, onSearchChange}) => {


    return (

        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: {xs: 'none', sm: 'block', fontWeight: "700"}
                        }}
                    >
                        To Do List
                    </Typography>

                    <Search sx={{
                        minWidth: "400px",
                        maxWidth: "750px"
                    }}>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                            onChange={(e) => {
                                onSearchChange(e.target.value)
                            }}
                        />
                    </Search>

                    <Button
                        sx={style}
                        // color="secondary"
                        startIcon={<AddIcon/>}
                        variant="contained"
                        size="medium"
                        onClick={onOpenDialog}
                    >
                        Add
                    </Button>

                </Toolbar>


            </AppBar>

        </Box>
    );
};

export default NavAppBar; // Make sure to use the 'default' export

  
