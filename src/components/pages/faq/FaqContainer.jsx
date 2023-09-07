
import * as React from "react";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";

import { ExpandLess, ExpandMore } from "@mui/icons-material";

const FaqContainer = ({ category, question, answer }) => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 1200,
        bgcolor: "background.paper",
        alignItems: "flex-start",
        color: "#1e1e1e",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ color: " #f6973f", fontSize: "18px" }}
        >
          {category}
        </ListSubheader>
      }
    >
      <ListItemText
        sx={{
          height: "auto",
          borderTop: " 2px solid #f4f0ec",
          paddingTop: "5px",
        }}
      >
        <ListItemButton
          onClick={handleClick}
          style={{ alignItems: "flex-end" }}
        >
          {question}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItemText>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 4 }}>
          <ListItemText>
            {answer} <ListItemButton />
          </ListItemText>
        </List>
      </Collapse>
    </List>
  );
};

export default FaqContainer;
