import {FC, useState} from "react";
import {uuidv4} from "./../../../src/utils/utils";

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


    const addNewTaskToList = () => {
        ListOfItems.map(i => console.log(">>> ", i))

        taskName && ListOfItems.map(i => i != taskName) && setListOfItems((prevList) => [...prevList, taskName]);
        setTaskName("");
    }
    const closePop = () => {
        onClose()
        setTaskName("")
        setListOfItems([])

    }


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
                        label="Enter Task Name"
                        variant="filled"
                        onChange={(event) => setMainTaskName(event.target.value)}
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
                            onChange={(event) => setTaskName(event.target.value)}
                            sx={{
                                width: "90%",
                            }}
                        />

                        <IconButton aria-label="add" onClick={addNewTaskToList}>
                            <AddIcon color="primary"/>
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
                        <List sx={{padding: "20px"}}>
                            {ListOfItems.map((item) => (
                                <ListItem button>

                                    <ListItemText primary={item}/>
                                </ListItem>
                            ))}
                            <Divider/>
                        </List>
                    </Box>

                    <Box
                        sx={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    >
                        <Button variant="contained" onClick={closePop}>
                            Cancel
                        </Button>
                        <Button variant="contained"
                                onClick={() => mainTaskName.length && ListOfItems.length && saveTaskInfo()} autoFocus>
                            Add
                        </Button>
                    </Box>
                </Paper>
            </CustomeDialogActions>
        </Dialog>
    );
};

export default DialogBox;
