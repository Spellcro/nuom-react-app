import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Filter from "../Components/Filter/Filter";
import ArticleCard from "../Components/ArticleCard/ArticleCard";

import { getAllTags } from "../../mockAPI/allTags";
import { getAllArticles } from "../../mockAPI/allArticles";

const Home = () => {
  const [tagList, setTagList] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [articleList, setArticleList] = useState([]);
  // We use windowWidth to work out how long the article summary should be
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const handleResize = e => {
    setWindowWidth(window.innerWidth);
  };

  const handleUpdateFilters = filters => {
    const newTags = [];
    for (let filter in filters) {
      newTags.push(filters[filter].value);
    }
    setSelectedTags(newTags);
  };

  // Create a function to apply just one filter when clicking on a tag:
  const handleTagClick = event => {
    const newTags = [{ value: event.currentTarget.value }];
    handleUpdateFilters(newTags);
  };

  /*
    Update the list of Articles to display when filtered
    I create a new variable called articlesToDisplay which will contain either
    the filtered articles (if filters are present) or the full article list.
  */
  const articlesToDisplay =
    selectedTags.length === 0
      ? articleList
      : articleList.filter(article => {
          // For each article, check if any of it's tags are present in the current tag filters.
          for (let index in article.tags) {
            if (selectedTags.indexOf(article.tags[index]) >= 0) {
              return true;
            }
          }
          return false;
        });

  return (
    <div className={cx("container")}>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">The Great Article Database</h1>
          </div>
        </div>
      </section>
      <section className={cx("section")}>
        <h2 className={cx("subtitle")}>Filter by tag:</h2>
        <Filter onChange={handleUpdateFilters} tagList={tagList} />
      </section>
      <section className={cx("section")}>
        {/*TODO: Create a list of the cards, the list has to be reactive */}
        <div className={cx("columns is-variable is-multiline")}>
          {articlesToDisplay.map(article => {
            const { id, date, image, tags, text, title } = article;

            // Create an array of the tags (since we receive it as an object and <ArticleCard/> expects a string array.
            let listOfTags = [];
            for (let i in tags) {
              listOfTags.push(tags[i]);
            }

            return (
              <div
                className={cx(
                  "column is-12-mobile is-6-tablet is-6-laptop is-4-widescreen"
                )}
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
                  handleTagClick={handleTagClick}
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
