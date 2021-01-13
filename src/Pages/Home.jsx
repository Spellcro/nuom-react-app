import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Filter from "../Components/Filter/Filter";
import ArticleCard from "../Components/ArticleCard/ArticleCard";
import Header from "../Components/Header/Header";
import { getAllTags } from "../../mockAPI/allTags";
import { getAllArticles } from "../../mockAPI/allArticles";
import SortButton from "../Components/SortButton/SortButton";
import sortArticlesToDisplay from "../Helpers/sortArticlesToDisplay";

const Home = () => {
  const [tagList, setTagList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [articleList, setArticleList] = useState([]);
  const [articlesToDisplay, setArticlesToDisplay] = useState([]);
  const [sortArticles, setSortArticles] = useState("default");
  // I use this windowWidth to work out how long the article summary should be
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // This is the react hooks equivalent of componentDidMount
  useEffect(() => {
    getAllTags().then(tags => {
      setTagList([...tags]);
    });

    getAllArticles().then(articles => {
      articles.forEach((article, index) => {
        // After getting the articles we add an id property to each one.
        article.id = index + 1;
      });
      setArticleList([...articles]);
    });

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // update the article list when the selected tags change.
  useEffect(() => {
    const filteredArticles =
      selectedTags.length === 0
        ? articleList
        : articleList.filter(article => {
            // For each article, check if any of its tags are present in the current tag filters.
            for (let index in article.tags) {
              if (selectedTags.indexOf(article.tags[index]) >= 0) {
                return true;
              }
            }
            return false;
          });
    setArticlesToDisplay(filteredArticles);
  }, [selectedTags]);

  // Sort the article list when the sort type changes.
  useEffect(() => {
    setArticlesToDisplay(
      sortArticlesToDisplay(articlesToDisplay, sortArticles)
    );
  }, [sortArticles]);

  // articleList should only update once during the initial useEffect on load, so this
  // will only trigger once but is in place to avoid the page rendering with no articles initally.
  useEffect(() => {
    setArticlesToDisplay(articleList);
  }, [articleList]);

  const handleResize = event => {
    setWindowWidth(window.innerWidth);
  };

  const handleUpdateFilters = filters => {
    const newTags = [];
    for (let filter in filters) {
      newTags.push(filters[filter].value);
    }
    setSelectedTags(newTags);
  };

  const handleUpdateSort = event => {
    setSortArticles(event.currentTarget.value);
  };

  /*
    Update the list of Articles to display when filtered
    I create a new variable called articlesToDisplay which will contain either
    the filtered articles (if filters are present) or the full article list.
  */

  return (
    <div className="container">
      <Header />
      <section className="section">
        <h2 className="subtitle">Filter by tag:</h2>
        <Filter onChange={handleUpdateFilters} tagList={tagList} />
      </section>
      <section className="section">
        <h2 className="subtitle">Sort articles by:</h2>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SortButton value="default" handleClick={handleUpdateSort} />
          <SortButton value="title" handleClick={handleUpdateSort} />
          <SortButton value="date" handleClick={handleUpdateSort} />
        </div>
      </section>
      <section className="section">
        <div className="columns is-variable is-multiline">
          {articlesToDisplay.map(article => {
            const { id, date, image, tags, text, title } = article;

            // Create an array of the tags (since we receive it as an object and <ArticleCard/> expects a string array).
            let listOfTags = [];
            for (let i in tags) {
              listOfTags.push(tags[i]);
            }

            return (
              <div
                className="column is-12-mobile is-6-tablet is-6-laptop is-4-widescreen"
                key={`article-${id}-container`}
              >
                <ArticleCard
                  windowWidth={windowWidth}
                  id={id.toString()}
                  date={date}
                  image={image}
                  tags={listOfTags}
                  summary={text}
                  title={title}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

Home.propTypes = {};

export default Home;
