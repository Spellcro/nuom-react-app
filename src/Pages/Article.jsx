import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Article = () => {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h3>Showing the article: {id}</h3>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Article;
