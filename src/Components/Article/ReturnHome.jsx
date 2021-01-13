import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ReturnHome = () => {
  return (
    <div
      className="content is-medium"
      style={{
        marginBottom: "10px"
      }}
    >
      <Link to="/">Return Home</Link>
    </div>
  );
};

ReturnHome.propTypes = {};

export default ReturnHome;
