import React, { FC, Children, useState } from "react";
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
                minWidth: 275,
                maxWidth: 350,
                minHeight: 200,
                maxHeight: 350,
                margin: 2,
                background: "#c7c8c9",
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
                      minWidth: 250,
                      maxWidth: 300,
                      minHeight: 100,
                      maxHeight: 200,

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
                  onClick={(e) => setRemoveTask([...removeTask, task.task_id])}
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
