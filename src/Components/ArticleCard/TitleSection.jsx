import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Tag from "./Tag";

// Import styles
import "../../Styles/underline-hover.css";
import "../../Styles/is-clickable.css";
import "../../Styles/tag-container.css";

const TitleSection = props => {
  const { title, tags, handleTagClick, handleArticleClick } = props;

  return (
    <div className={cx()}>
      <a
        className={cx("title is-4 underline-hover is-clickable")}
        onClick={handleArticleClick}
      >
        {title}
      </a>
      <div className={cx("tag-container")}>
        {tags.map(tag => {
          return (
            <Tag tag={tag} key={`${tag}-tag`} handleTagClick={handleTagClick} />
          );
        })}
      </div>
    </div>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  handleTagClick: PropTypes.func,
  handleArticleClick: PropTypes.func
};

export default TitleSection;
