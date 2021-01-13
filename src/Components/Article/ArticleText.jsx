import React from "react";
import PropTypes from "prop-types";

const ArticleText = props => {
  const { text } = props;
  const paragraph = text?.split("\n");
  console.log(paragraph);
  return (
    <div className="container">
      {paragraph?.map((line, index) => {
        return (
          <div className="content mt-5 mx-2 is-medium" key={`line-${index}`}>
            {line}
          </div>
        );
      })}
    </div>
  );
};

ArticleText.propTypes = {
  text: PropTypes.string
};

export default ArticleText;
