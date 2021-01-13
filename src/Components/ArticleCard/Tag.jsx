import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "lodash";
import "../../Styles/article-tag.css";

const Tag = props => {
  const { tag } = props;
  return (
    <div className="article-tag" value={tag}>
      {capitalize(tag)}
    </div>
  );
};

Tag.propTypes = {
  tag: PropTypes.string
};

export default Tag;
