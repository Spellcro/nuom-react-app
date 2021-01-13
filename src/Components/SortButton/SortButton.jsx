import React from "react";
import PropTypes from "prop-types";
import { capitalize } from "lodash";

const SortButton = props => {
  const { value, handleClick } = props;

  return (
    <button className="button mr-2" value={value} onClick={handleClick}>
      {capitalize(value)}
    </button>
  );
};

SortButton.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func
};

export default SortButton;
