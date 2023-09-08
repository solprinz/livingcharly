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
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 1200,
        color: "#1e1e1e",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ color: " #f6973f", fontSize: "20px", padding: 0 }}
        >
          {category}
        </ListSubheader>
      }
    >
      <ListItemText
        sx={{
          height: "20px",
        }}
      >
        <ListItemButton
          onClick={handleClick}
          sx={{
            pl: 0,
            borderTop: " 2px solid #f4f0ec",
            fontSize: "18px",
            width: "auto",
          }}
        >
          {question}
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItemText>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding sx={{ pl: 2, fontSize: "16px" }}>
          <ListItemText sx={{ pt: 4 }}>
            {answer} <ListItemButton />
          </ListItemText>
        </List>
      </Collapse>
    </List>
  );
};

export default FaqContainer;
