import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import cx from "classnames";
import Header from "../Components/Header/Header";
import { getAllArticles } from "../../mockAPI/allArticles";
import ArticleContent from "../Components/Article/ArticleContent";
import ReturnHome from "../Components/Article/ReturnHome";
import createDisplayDate from "../Helpers/createDisplayDate";

const Article = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  /* 
    We get the articles from the database as before,
    then use the id to pick out the article we are displaying.
    There is likely a better way to pass data here from the Home
    component on a redirect.
   */
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    getAllArticles().then(articles => {
      articles.forEach((article, index) => {
        // After getting the articles we add an id property to each one.
        article.id = index + 1;
      });
      setArticleList([...articles]);
    });
  }, []);

  const articleToDisplay = articleList[id - 1];

  // This if statement aims to avoid problems assigning these variables when
  // react does it's initial render before the useEffect hook.
  let date, title, image, text;
  let dateToDisplay;
  if (articleToDisplay !== undefined) {
    date = articleToDisplay.date;
    title = articleToDisplay.title;
    image = articleToDisplay.image;
    text = articleToDisplay.text;

    // Some of the dates are in different formats so this function handles
    // creating the display for the different formats I have seen in the database.
    dateToDisplay = createDisplayDate(date);
  }
  return (
    <div className="container px-5">
      <Header />

      <div className="container is-max-desktop">
        <ReturnHome />
        <ArticleContent
          title={title}
          imageUrl={image}
          text={text}
          date={dateToDisplay}
        />
        <ReturnHome />
        <div className="pb-6" />
      </div>
    </div>
  );
};

export default Article;
