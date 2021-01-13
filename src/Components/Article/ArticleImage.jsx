import React from "react";
import PropTypes from "prop-types";

const ArticleImage = props => {
  const { imageUrl } = props;
  return (
    <figure className="image image is-3by1">
      <img src={imageUrl} />
    </figure>
  );
};

ArticleImage.propTypes = {
  imageUrl: PropTypes.string
};

export default ArticleImage;
