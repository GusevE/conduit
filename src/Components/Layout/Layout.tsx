import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link, NavLink, Outlet } from "react-router-dom";


export default function Layout() {
  const bottom = ["Home", "Sign in", "Sign up"];

  return (
    <>
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
          <Link className="sing" to={"/"}>
            {" "}
            conduit
          </Link>
        </Typography>
        <Box sx={{ display: "flex" }}>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink style={{ padding: "0 10px 0 10px" }} to={"/SignIn"}>
            Sign in
          </NavLink>
          <NavLink to={"/SignUp"}>Sign up</NavLink>
        </Box>
      </Box>
      <Outlet />
    </>
  );
}
