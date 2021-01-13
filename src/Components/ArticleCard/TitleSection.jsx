import React from "react";
import PropTypes from "prop-types";
import Tag from "./Tag";

// Import styles
import "../../Styles/underline-hover.css";
import "../../Styles/is-clickable.css";
import "../../Styles/tag-container.css";

const TitleSection = props => {
  const { title, tags, handleArticleClick } = props;

  return (
    <>
      <a
        className="title is-4 underline-hover is-clickable"
        onClick={handleArticleClick}
      >
        {title}
      </a>
      <div className="tag-container">
        {tags.map(tag => {
          return <Tag tag={tag} key={`${tag}-tag`} />;
        })}
      </div>
    </>
  );
};

TitleSection.propTypes = {
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  handleArticleClick: PropTypes.func
};

export default TitleSection;
