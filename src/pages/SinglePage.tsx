import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Avatar, Button, Divider, Drawer, List } from "@mui/material";
import moment from "moment";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Articles, Comment } from "../types";

export default function SinglePage() {
  const { id } = useParams();
  const [data, setData] = useState<Articles>();
  const [comment, setComment] = useState<Comment[]>([]);
  useEffect(() => {
    fetch(`https://conduit.productionready.io/api/articles/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json.article))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    fetch(`https://api.realworld.io/api/articles/${id}/comments`)
      .then((response) => response.json())
      .then((json) => setComment(json.comments))
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <Box>
      {data && (
        <>
          <Box sx={{ background: "#333" }}>
            <>
              <Box
                sx={{
                  padding: "2rem 0 2rem 0",
                  margin: "0 auto",
                  maxWidth: "1140px",
                }}
              >
                <Typography
                  variant="h3"
                  component="h2"
                  sx={{ color: "#fff", textAlign: "left" }}
                >
                  {data.title}
                </Typography>
                <Box sx={{ display: "flex", margin: "2rem 0 0 0" }}>
                  <Box>
                    <Avatar alt="Remy Sharp" src={data.author.image} />
                  </Box>
                  <Box
                    sx={{
                      margin: "0 1.5rem 0 0.3rem",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography sx={{ color: "#5CB85C" }}>
                        {data.author.username}
                      </Typography>
                      <Typography sx={{ color: "#bbb", fontSize: " 0.8rem" }}>
                        {moment(data.createdAt).format("LL")}
                      </Typography>
                    </Box>
                    <Box sx={{ paddingLeft: "30px" }}>
                      <Button
                        sx={{
                          fontSize: "12px",
                          textTransform: "none",
                          padding: "0.25rem 0.5rem",
                          background: "none",
                          color: "#ccc",
                          border: "1px solid #ccc",
                          "&:hover": {
                            background: "#ccc",
                            color: "#fff",
                          },
                        }}
                        variant="contained"
                        startIcon={<AddIcon />}
                      >
                        {`Follow ${data.author.username}`}
                      </Button>
                      <Button
                        sx={{
                          fontSize: "12px",
                          textTransform: "none",
                          padding: "0.25rem 0.5rem",
                          marginLeft: "10px",
                          background: "none",
                          color: "#5CB85C",
                          border: "1px solid #5CB85C",
                          "&:hover": {
                            background: "#5CB85C",
                            color: "#fff",
                          },
                        }}
                        variant="contained"
                        startIcon={<FavoriteIcon />}
                      >
                        {`Favorite Article ${data.favoritesCount}`}
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </>
          </Box>
          <Box
            sx={{
              padding: "2rem 0 2rem 0",
              margin: "0 auto",
              maxWidth: "1140px",
            }}
          >
            <Typography
              sx={{
                color: "#373a3c",
                fontSize: "1.2rem",
                lineHeight: "1.8rem",
                marginBottom: "2rem",
                textAlign: "left",
              }}
            >
              {data.body}
            </Typography>
            <List sx={{ padding: 0 }} className="list">
              {data.tagList.map((e: any, i: number) => (
                <li key={i} className="listItems">
                  {e}
                </li>
              ))}
            </List>
            <Divider sx={{ marginTop: "2rem", marginBottom: "2rem" }} />
            <Box
              sx={{
                display: "flex",
                margin: "2rem 0 0 0",
                justifyContent: "center",
              }}
            >
              <Box>
                <Avatar alt="Remy Sharp" src={data.author.image} />
              </Box>
              <Box
                sx={{
                  margin: "0 1.5rem 0 0.3rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography sx={{ color: "#5CB85C" }}>
                    {data.author.username}
                  </Typography>
                  <Typography sx={{ color: "#bbb", fontSize: " 0.8rem" }}>
                    {moment(data.createdAt).format("LL")}
                  </Typography>
                </Box>
                <Box sx={{ paddingLeft: "30px" }}>
                  <Button
                    sx={{
                      fontSize: "12px",
                      textTransform: "none",
                      padding: "0.25rem 0.5rem",
                      background: "none",
                      color: "#ccc",
                      border: "1px solid #ccc",
                      "&:hover": {
                        background: "#ccc",
                        color: "#fff",
                      },
                    }}
                    variant="contained"
                    startIcon={<AddIcon />}
                  >
                    {`Fallow ${data.author.username}`}
                  </Button>
                  <Button
                    sx={{
                      fontSize: "12px",
                      textTransform: "none",
                      padding: "0.25rem 0.5rem",
                      marginLeft: "10px",
                      background: "none",
                      color: "#5CB85C",
                      border: "1px solid #5CB85C",
                      "&:hover": {
                        background: "#5CB85C",
                        color: "#fff",
                      },
                    }}
                    variant="contained"
                    startIcon={<FavoriteIcon />}
                  >
                    {`Favorite Article ${data.favoritesCount}`}
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{ maxWidth: "760px", paddingTop: "30px", margin: "0 auto" }}
            >
              <Typography sx={{ textAlign: "left", paddingBottom: "10px" }}>
                <Link
                  style={{ textDecoration: "none", color: "#5CB85C" }}
                  to={"/SignIn"}
                >
                  Sign in
                </Link>{" "}
                or{" "}
                <Link
                  style={{ textDecoration: "none", color: "#5CB85C" }}
                  to={"/SignUp"}
                >
                  sign up
                </Link>{" "}
                to add comments on this article.
              </Typography>
              {comment &&
                comment.map(({ body, author, createdAt }) => (
                  <Box
                    sx={{
                      border: "1px solid #e5e5e5",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <Box sx={{ padding: "1.25rem", textAlign: "left" }}>
                      <Typography>{body}</Typography>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        borderTop: "1px solid #e5e5e5",
                        backgroundColor: "#f5f5f5",
                        padding: "0.75rem 1.25rem",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={author.image}
                        sx={{ width: 20, height: 20 }}
                      />
                      <Typography
                        sx={{
                          color: "#5CB85C",
                          padding: "0px 10px 0 10px",
                          fontSize: 12,
                        }}
                      >
                        {author.username}
                      </Typography>
                      <Typography sx={{ color: "#bbb", fontSize: 12 }}>
                        {moment(createdAt).format("LL")}
                      </Typography>
                    </Box>
                  </Box>
                ))}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
