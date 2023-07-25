import React, { FC, useState } from "react";
import styles from "./DialogBox.module.scss";
import { uuidv4 } from "./../../../src/utils/utils";

import {
  Dialog,
  DialogActions,
  IconButton,
  TextField,
  Button,
  Paper,
  styled,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

interface DialogBoxProps {
  isOpen: boolean;
  onClose: () => void;
  sendTaskToParent: (task: Task) => void;
}

interface Task {
  task_id: string;
  task_name: string;
  task_list: string[];
}

const CustomeDialogActions = styled(DialogActions)({
  justifyContent: "center",
  flexDirection: "column",
});

const DialogBox: FC<DialogBoxProps> = ({
  isOpen,
  onClose,
  sendTaskToParent,
}) => {
  const [taskName, setTaskName] = useState<string>("");
  const [mainTaskName, setMainTaskName] = useState<string>("");
  const [ListOfItems, setListOfItems] = useState<string[]>([]);



  const handleTaskNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
  };

  const handleMainTaskNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMainTaskName(event.target.value);
  };

  const handleNewTaskClick = () => {
    taskName.length > 0 &&
      setListOfItems((prevList) => [...prevList, taskName]);
    setTaskName("");
  };

  const saveTaskInfo = () => {
    const task: Task = {
      task_id: uuidv4(),
      task_name: mainTaskName,
      task_list: ListOfItems,
    };
    // console.log('DIALOG DATA : ', task)
    sendTaskToParent(task);

    onClose();
    setMainTaskName("")
    setTaskName("")
    setListOfItems([])
  };

  if (!isOpen) return null;

  return (
    // <div className={styles.dialogOverlay}>
    //   <div className={styles.dialogContent}>
    //     <h2>Dialog Box</h2>
    //     <p>This is a simple dialog box.</p>
    //     <button onClick={onClose}>Close</button>
    //   </div>
    // </div>

    <Dialog onClose={onClose} open={isOpen}>
      <CustomeDialogActions>
        <Paper
          sx={{
            minWidth: "500px",
            maxWidth: "700px",
            minHeight: "400px",
            maxHeight: "600px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            id="standard-basic"
            label="Task"
            defaultValue="Enter Task Name"
            variant="filled"
            value={mainTaskName}
            onChange={handleMainTaskNameChange}
            sx={{
              width: "95%",
              padding: "5px",
            }}
          />

          <Box
            sx={{
              width: "95%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "5px",
            }}
          >
            <TextField
              id="standard-basic"
              label="check list item name"
              variant="filled"
              value={taskName}
              onChange={handleTaskNameChange}
              sx={{
                width: "90%",
              }}
            />

            <IconButton aria-label="add" onClick={handleNewTaskClick}>
              <AddIcon color="primary" />
            </IconButton>
          </Box>

          <Box
            sx={{
              width: "95%",
              minHeight: "250px",
              maxHeight: "400px",
              overflowY: "auto",
              "::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <List sx={{ padding: "20px"}}>
              {ListOfItems.map((item) => (
                <ListItem button>

                  <ListItemText primary={item} />
                </ListItem>
              ))}
              <Divider />
            </List>
          </Box>

          <Box
            sx={{
              width: "50%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button variant="contained" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={()=>mainTaskName.length && ListOfItems.length && saveTaskInfo()} autoFocus>
              Add
            </Button>
          </Box>
        </Paper>
      </CustomeDialogActions>
    </Dialog>
  );
};

export default DialogBox;
