import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import "./ContainerPage.css";

import Typography from "@mui/material/Typography";
import moment from "moment";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import PaginationRounded from "../PaginationRounded/PaginationRounded";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { changeTag } from "../../store/layoutTemplate/LayoutTemplateSlice";
import { Link } from "react-router-dom";
import Banner from "../Banner/Title";
import { Articles } from "../../types";

interface Props {
  data: Articles[];
  tags: string[];
}

export default function ContainerPage(props: Props) {
  const { data, tags } = props;
  const [value, setValue] = useState(0);
  const { selectTag } = useAppSelector((state) => state.LayoutTemplateState);

  const dispatch = useAppDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(changeTag(""));

    setValue(newValue);
  };
  return (
    <>
      <Banner />
      <Box sx={{ marginTop: "1.5rem", margin: "0 auto", maxWidth: "1140px" }}>
        <Box sx={{ display: "flex", paddingTop: "30px" }}>
          <Box sx={{ flex: 3 }}>
            <Box>
              <Tabs
                TabIndicatorProps={{
                  style: { background: "#5CB85C" },
                }}
                value={value}
                onChange={handleChange}
                sx={{
                  "& .MuiTab-root.Mui-selected": { color: "#5CB85C" },
                }}
              >
                <Tab
                  sx={{ textTransform: "none", color: "#aaa" }}
                  label="Global Feed"
                />
                {selectTag && (
                  <Tab
                    sx={{
                      textTransform: "none",
                      color: "#5CB85C",
                    }}
                    label={`#${selectTag}`}
                  />
                )}
              </Tabs>
            </Box>
            {data.map(
              (
                {
                  author,
                  createdAt,
                  favoritesCount,
                  title,
                  description,
                  tagList,
                  slug,
                },
                i
              ) => (
                <Box
                  key={i}
                  sx={{
                    padding: "1.5rem 0",
                    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex", margin: "0 0 1rem 0" }}>
                      <Box>
                        <Avatar alt="Remy Sharp" src={author.image} />
                      </Box>
                      <Box sx={{ margin: "0 1.5rem 0 0.3rem" }}>
                        <Typography sx={{ color: "#5CB85C" }}>
                          {author.username}
                        </Typography>
                        <Typography sx={{ color: "#bbb", fontSize: " 0.8rem" }}>
                          {moment(createdAt).format("LL")}
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Button
                        sx={{
                          padding: 0,
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
                        {favoritesCount}
                      </Button>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "left",
                      fontWeight: 600,
                      fontSize: "1.5rem",
                      marginBottom: "3px",
                      lineHeight: 1.1,
                    }}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "#373A3C" }}
                      to={`/${slug}`}
                    >
                      {title}
                    </Link>
                  </Typography>
                  <Typography
                    sx={{
                      width: "650px",
                      textAlign: "left",
                      fontWeight: 300,
                      color: "#999",
                      fontSize: "1rem",
                      lineHeight: "1.3rem",
                      marginBottom: "15px",
                    }}
                  >
                    {description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Link to={`/${slug}`}>
                      <Typography sx={{ fontSize: "0.8rem", color: "#bbb" }}>
                        Read more...
                      </Typography>
                    </Link>
                    <ul className="list">
                      {tagList.map((e, i) => (
                        <li key={i} className="listItems">
                          {e}
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Box>
              )
            )}
          </Box>
          <Box sx={{ paddingLeft: "15px", borderRadius: "4px", flex: 1 }}>
            <div className="list sidebar">
              <Typography sx={{ marginBottom: "0.2rem" }}>
                Popular Tags
              </Typography>
              {tags.map((e, i) => (
                <a
                  key={i}
                  onClick={(e: any) => {
                    setValue(1);
                    dispatch(changeTag(e.target.text));
                  }}
                  className=" tagsItem"
                >
                  {e}
                </a>
              ))}
            </div>
          </Box>
        </Box>

        <PaginationRounded />
      </Box>
    </>
  );
}
