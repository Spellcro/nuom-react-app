import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

const ArticleText = props => {
  const { text } = props;
  return (
    <div className="container" style={{ marginRight: "20%" }}>
      <div className="content mt-5 mx-2">{text}</div>
    </div>
  );
};

ArticleText.propTypes = {
  text: PropTypes.string
};

export default ArticleText;
