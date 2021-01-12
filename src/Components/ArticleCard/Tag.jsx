import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { capitalize } from "lodash";

const Tag = props => {
  const { tag, handleTagClick } = props;
  return (
    <div
      className={cx("button is-light is-small")}
      style={{ marginRight: "8px", padding: "1px 4px 1px 4px" }}
      onClick={() => {} /*handleTagClick*/}
      value={tag}
    >
      {capitalize(tag)}
    </div>
  );
};

Tag.propTypes = {
  tag: PropTypes.string
};

export default Tag;
