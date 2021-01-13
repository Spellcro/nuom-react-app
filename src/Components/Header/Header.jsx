import React from "react";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <section className="hero" style={{ marginBottom: "-40px" }}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">The Great Article Database</h1>
        </div>
      </div>
    </section>
  );
};

Header.propTypes = {};

export default Header;
