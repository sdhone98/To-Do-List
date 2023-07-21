import * as React from 'react';  
import { AppBar, Toolbar, Button } from "@mui/material";
import { Typography } from "@mui/material";
import AddIcon from "@material-ui/icons/Add";


const style = {
    // border: "1px solid white",
    marginLeft: "auto",
    color: "white",
    // background: 'blue'
  };

interface NavAppBarProps {
    onOpenDialog: () => void;
  }


  const NavAppBar: React.FC<NavAppBarProps> = ({ onOpenDialog }) => {
    return (
      <AppBar component="nav">
        <Toolbar>
          <Typography>To Do List</Typography>
          <Button
            sx={style}
            // color="secondary"
            startIcon={<AddIcon />}
            variant="contained"
            size="medium"
            onClick={onOpenDialog}
          >
            Add
          </Button>
        </Toolbar>
      </AppBar>
    );
  };

  export default NavAppBar; // Make sure to use the 'default' export

  
