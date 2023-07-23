import React, { FC, Children  } from "react";
import styles from "./CardContainer.module.scss";

import { List, ListItem, ListItemText, CardActions, CardContent, Typography, Card, Button } from "@mui/material";

interface Task {
  task_name: string;
  task_list: string[];
}

interface CardContainerProps {
  items: Task[];
}

const CardContainer: FC<CardContainerProps> = ({ items }) => {
  return (
    <div className={styles.mainContainer}>
      {
        items.map((task) => <Card sx={{ minWidth: 275, maxWidth: 350, minHeight: 200, maxHeight:300, margin: 2}}>
        <CardContent>
          <Typography variant="h5" component="div" fontWeight={500}>
            {task.task_name}
          </Typography>
          <Typography variant="body2">
            <List>
              <ListItem
                sx={{
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                {task.task_list.map((item) => (
                  <ListItemText key={item} primary={item} />
                ))}
                {/* <ListItemText primary="Single-line item" /> */}
              </ListItem>
            </List>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Delete</Button>
        </CardActions>
      </Card>)
      }
    </div>
  );
};

export default CardContainer;
