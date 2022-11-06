import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Banner() {
  return (
    <Box sx={{ background: "#5CB85C", padding: "2rem", color: "#fff" }}>
      <Typography
        sx={{ fontFamily: "Titillium Web, sans-serif", fontWeight: 700 }}
        variant="h3"
        component="h3"
      >
        conduit
      </Typography>
      <Typography variant="h5" component="h3">
        A place to share your knowledge.
      </Typography>
    </Box>
  );
}
