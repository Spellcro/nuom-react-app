import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import ArticleImage from "./ArticleImage";
import ArticleTitle from "./ArticleTitle";
import ArticleText from "./ArticleText";

const ArticleBody = props => {
  const { imageUrl, title, text, date } = props;
  return (
    <>
      <ArticleTitle title={title} date={date} />
      <ArticleImage imageUrl={imageUrl} />

      <ArticleText text={text} />
    </>
  );
};

ArticleBody.propTypes = {
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string
};

export default ArticleBody;
