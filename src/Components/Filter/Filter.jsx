import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Select from "react-select";
import { capitalize } from "lodash";

const Filter = props => {
  const { tagList, onChange } = props;

  const options = tagList.map(tag => ({
    value: tag,
    label: capitalize(tag)
  }));

  return (
    <Select
      name="tagFilter"
      options={options}
      onChange={onChange}
      isMulti
      autoBlur
    />
  );
};

Filter.propTypes = {
  tagList: PropTypes.arrayOf(PropTypes.string),
  selectedTags: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func
};

export default Filter;
