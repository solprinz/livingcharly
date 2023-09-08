import { Button } from "@mui/material";

export const Boton = ({ button }) => {
  return (
    <>
      <Button
        sx={{
          padding: "12px 16px",
          justifyContent: "center",
          alignItems: "center",
          gap: "4px",
          borderRadius: "12px",
          opacity: "0.3",
          backgroundColor: "#F6973F",
          color: "white",
        }}
      >
        {button}
      </Button>
    </>
  );
};
