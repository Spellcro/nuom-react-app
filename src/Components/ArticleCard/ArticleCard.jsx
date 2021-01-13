import React from "react";
import PropTypes from "prop-types";
import Summary from "./Summary";
import TitleSection from "./TitleSection";
import { useHistory } from "react-router-dom";
import calculateMaxLength from "../../Helpers/calculateMaxSummaryLength";

const ArticleCard = props => {
  const { id, title, tags, summary, image, windowWidth } = props;

  // Manage the routing with react-router to redirect to the article page.
  const history = useHistory();
  const handleArticleClick = () => {
    history.push(`/article/${id}`);
  };

  return (
    <div className="card" style={{ height: "100%" }}>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-128x128">
              <img src={image} alt={title} />
            </figure>
          </div>
          <div className="media-content">
            <TitleSection
              title={title}
              tags={tags}
              handleArticleClick={handleArticleClick}
            />
          </div>
        </div>
        <div className="content">
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
  image: PropTypes.string,
  windowWidth: PropTypes.number
};

export default ArticleCard;
