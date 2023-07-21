import "./App.css";
import * as React from 'react';
import { CardContainer, NavAppBar, DialogBox} from "./components"




function App() {

  const [dialogOpen, setDialogOpen] = React.useState(false);


  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };



  return (
    <>
      <NavAppBar onOpenDialog={handleOpenDialog} />
      <CardContainer/>
      <DialogBox isOpen={dialogOpen} onClose={handleCloseDialog} />
    </>
  );
}

export default App;
