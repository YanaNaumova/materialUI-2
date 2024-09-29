import { Box, Button } from "@mui/material";

function ButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5px",
        padding: "10px",
        borderRadius: "5px",
        maxWidth: "300px",
        border: "1px solid black",
        gap: "5px",
      }}
    >
      <Button
        sx={{
          backgroundColor: "red",
          color: "white",
          padding: "12px 24px",
          borderRadius: "5px",
          minWidth: "150px",
          "&:hover": {
            backgroundColor: "#8B0000",
          },
        }}
      >
        Red Button
      </Button>
      <Button
        sx={{
          backgroundColor: "green",
          color: "white",
          padding: "12px 24px",
          borderRadius: "5px",
          minWidth: "150px",
          "&:hover": {
            backgroundColor: "#006400",
          },
        }}
      >
        Green Button
      </Button>
      <Button
        sx={{
          backgroundColor: "blue",
          color: "white",
          padding: "12px 24px",
          borderRadius: "5px",
          minWidth: "150px",
          "&:hover": {
            backgroundColor: "#00008B",
          },
        }}
      >
        Blue Button
      </Button>
    </Box>
  );
}
export default ButtonGroup;
