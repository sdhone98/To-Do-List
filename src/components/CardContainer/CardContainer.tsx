import { FC, useState } from "react";
import styles from "./CardContainer.module.scss";
import DeleteIcon from "@mui/icons-material/Delete";

import {
  List,
  ListItem,
  ListItemText,
  CardActions,
  CardContent,
  Typography,
  Card,
  Checkbox,
  Fab,
  Box,
} from "@mui/material";

interface Task {
  task_id: string;
  task_name: string;
  task_list: string[];
}

interface CardContainerProps {
  items: Task[];
  searchString: string;

}

const CardContainer: FC<CardContainerProps> = ({ items, searchString }) => {
  const [checkItem, setCheckItem] = useState<string[]>([]);
  const [removeTask, setRemoveTask] = useState<string[]>([]);
  const searchList =  searchString ? items.filter(i => i.task_name.toUpperCase().includes(searchString.toUpperCase())): items

  console.log("SEARCH : ", searchString)

  return (
    <div className={styles.mainContainer}>
      {searchList.map(
        (task) =>
          !removeTask.includes(task.task_id) && (
            <Card
              sx={{
                minWidth: "275px",
                maxWidth: "350px",
                minHeight: "200px",
                maxHeight: "350px",
                display: "flex",
                flexDirection: "row",
                margin: 2,
                background: "linear-gradient(to right bottom, #1976d2, #056dd3)",
                boxShadow: "0 8px 8px -4px lightblue",
                position: "relative",
                overflowY: "auto",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" fontWeight={700}>
                  {task.task_name}
                </Typography>
                <Typography variant="body2">
                  <Box
                    sx={{
                      minWidth: "250px",
                      maxWidth: "300px",
                      minHeight: "100px",
                      maxHeight: "200px",
                      paddingTop: "10px",

                      overflowY: "auto",
                      "::-webkit-scrollbar": {
                        display: "none",
                      },
                    }}
                  >
                    <List>
                      <ListItem
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                          padding: "5px",
                        }}
                      >
                        {task.task_list.map((item) => (
                          <div className={styles.cardItemsDiv}>
                            <Checkbox
                              key={item}
                              disabled={checkItem.includes(item)}
                              onChange={() =>
                                setCheckItem([...checkItem, item])
                              }
                              sx={{
                                padding: "3px",
                              }}
                            />
                            <ListItemText
                              key={task.task_list.indexOf(item)}
                              primary={item}
                              sx={
                                checkItem.includes(item)
                                  ? {
                                      textDecoration: "line-through",
                                    }
                                  : {
                                  maxWidth: "-webkit-max-content"
                                    }
                              }
                            />
                          </div>
                        ))}
                      </ListItem>
                    </List>
                  </Box>
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                }}
              >
                <Fab
                  color="primary"
                  aria-label="add"
                  size="small"
                  sx={{
                    background: "transparent",
                    ":hover": {
                      background: "transparent",
                      color: "#d11a2a",
                    },
                  }}
                  onClick={() => setRemoveTask([...removeTask, task.task_id])}
                >
                  <DeleteIcon />
                </Fab>
              </CardActions>
            </Card>
          )
      )}
    </div>
  );
};

export default CardContainer;
