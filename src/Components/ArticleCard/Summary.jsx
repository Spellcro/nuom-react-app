import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import createSummary from "../../Helpers/createSummary";

const Summary = props => {
  const { text, maxLength } = props;

  // Create a text summary to display on the card
  const summary = createSummary(text, maxLength);

  return <p className={cx("is-family-monospace	")}>{summary}</p>;
};

Summary.propTypes = {
  text: PropTypes.string,
  maxLength: PropTypes.number
};

export default Summary;
