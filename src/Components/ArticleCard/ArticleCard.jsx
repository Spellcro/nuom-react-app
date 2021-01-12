import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Summary from "./Summary";
import TitleSection from "./TitleSection";
import { useHistory } from "react-router-dom";
import calculateMaxLength from "../../Helpers/calculateMaxSummaryLength";

const ArticleCard = props => {
  const {
    id,
    title,
    tags,
    summary,
    image,
    handleTagClick,
    windowWidth
  } = props;

  // Manage the routing with react-router to redirect to the article page.
  const history = useHistory();
  const handleArticleClick = () => {
    history.push(`/article/${id}`);
  };

  return (
    <div className={cx("card")} style={{ height: "100%" }}>
      <div className={cx("card-content")}>
        <div className={cx("media")}>
          <div className={cx("media-left")}>
            <figure className={cx("image", "is-128x128")}>
              <img src={image} alt={title} />
            </figure>
          </div>
          <div className={cx("media-content")}>
            <TitleSection
              title={title}
              tags={tags}
              handleArticleClick={handleArticleClick}
              handleTagClick={handleTagClick}
            />
          </div>
        </div>
        <div className={cx("content")}>
          <Summary text={summary} maxLength={calculateMaxLength(windowWidth)} />
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  summary: PropTypes.string,
  image: PropTypes.string
};

export default ArticleCard;
