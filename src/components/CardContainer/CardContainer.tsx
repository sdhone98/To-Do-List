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
}

const CardContainer: FC<CardContainerProps> = ({ items }) => {
  const [checkItem, setCheckItem] = useState<string[]>([]);
  const [removeTask, setRemoveTask] = useState<string[]>([]);
  return (
    <div className={styles.mainContainer}>
      {items.map(
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
                background: "#eee",
                boxShadow: "0 8px 8px -4px lightblue",
                position: "relative",
                overflowY: "auto",
              }}
            >
              <CardContent>
                <Typography variant="h5" component="div" fontWeight={500}>
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
                            />
                            <ListItemText
                              key={task.task_list.indexOf(item)}
                              primary={item}
                              sx={
                                checkItem.includes(item)
                                  ? {
                                      textDecoration: "line-through",
                                    }
                                  : {}
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
