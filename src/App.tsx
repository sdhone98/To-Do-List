import "./App.css";
import React, { useState } from "react";
import { CardContainer, NavAppBar, DialogBox } from "./components";

interface Task {
  task_id: string;
  task_name: string;
  task_list: string[];
}

// const payload:Task[] = [];

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [payload, setPayload] = useState<Task[]>([]);


  // const handleListOfItemsReceived = (items: Task) => {
  //   console.log("DAT : ", items);
  //   payload.push(items)
  //   console.log(payload)

  // };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSaveTask = (task: Task) => {
    setPayload((prevPayload) => [...prevPayload, task]);
    console.log('MAIN APP : ',task)
  };

  return (
    <>
      <NavAppBar onOpenDialog={handleOpenDialog} />
      <div style={{paddingTop:'60px'}}>

      <CardContainer items={payload}/>
      </div>
      <DialogBox
        isOpen={dialogOpen}
        onClose={handleCloseDialog}
        sendTaskToParent={handleSaveTask}
      />
    </>
  );
}

export default App;
