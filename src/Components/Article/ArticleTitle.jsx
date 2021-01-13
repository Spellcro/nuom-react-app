import React from "react";
import PropTypes from "prop-types";

const ArticleTitle = props => {
  const { title, date } = props;

  return (
    <div>
      <p className="title is-2 my-3">{title}</p>
      <p>{date}</p>
    </div>
  );
};

ArticleTitle.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string
};

export default ArticleTitle;
