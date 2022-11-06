import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export default function Navbar() {
  const bottom = ["Home", "Sign in", "Sign up"];


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem 1rem",
        margin: "0 auto",
        maxWidth: "1140px",
      }}
    >
      <Typography
        sx={{
          color: "#5CB85C ",
          fontSize: "1.5rem",
          fontFamily: "Titillium Web, sans-serif",
        }}
      >
        conduit
      </Typography>
      <Box sx={{ display: "flex" }}>
        {bottom.map((elem, index) => (
          <Box sx={{ padding: "10px" }} key={index}>
            {elem}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
