import React, { useEffect, useState } from "react";
import "./App.css";
import ContainerPage from "./Components/ContainerPage/ContainerPage";

import { useAppDispatch, useAppSelector } from "./store/hooks";
import {
  countChange,
  updateCount,
} from "./store/layoutTemplate/LayoutTemplateSlice";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import SignIn from "./pages/SignIn";
import SinglePage from "./pages/SinglePage";
import SignUp from "./pages/SignUp";
import { Articles } from "./types";

function App() {
  const [data, setData] = useState<Articles[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const { count, selectTag, getCount } = useAppSelector(
    (state) => state.LayoutTemplateState
  );
  const dispatch = useAppDispatch();

  const tagsUrl = selectTag ? `&tag=${selectTag}` : "";

  const urlCount = (selectTag: string) => {
    let countUrl = 1;
    if (selectTag && data.length >= 10) {
      if (!count) {
        countUrl = count;
      } else {
        countUrl = count * 10 - 10;
      }
    }
    if (count) {
      countUrl = count * 10 - 10;
    }
    return countUrl;
  };

  useEffect(() => {
    fetch(
      `https://conduit.productionready.io/api/articles?limit=10&offset=${urlCount(
        selectTag
      )}${tagsUrl}`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles), dispatch(updateCount(json.articlesCount));
      });
  }, [count, selectTag]);

  useEffect(() => {
    fetch("https://conduit.productionready.io/api/tags")
      .then((response) => response.json())
      .then((json) => setTags(json.tags));
  }, []);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ContainerPage data={data} tags={tags} />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/:id" element={<SinglePage />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
