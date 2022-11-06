import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <Box
      sx={{
        width: "540px",
        margin: " 0 auto",
        display: "flex",
        flexDirection: "column",
        "& .MuiTextField-root": { paddingBottom: "10px" },
      }}
    >
      <Typography sx={{ fontSize: "40px" }}>Sign in</Typography>
      <Typography sx={{ fontSize: "16px" }}>
        <Link
         className="sing"
          to={"/SignUp"}
        >
          Need an account?
        </Link>
      </Typography>
      <TextField placeholder="Email" multiline />
      <TextField placeholder="Password" multiline />
      <Button
        sx={{
          width: "106px",
          height: "51px",
          background: "#5CB85C",
          alignSelf: "flex-end",
        }}
        variant="contained"
      >
        Sign in
      </Button>
    </Box>
  );
}
