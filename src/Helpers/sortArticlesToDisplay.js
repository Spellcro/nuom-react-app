import createDate from "./createDate";

const sortArticlesToDisplay = (articles, sortBy) => {
  let sortedArticles = [...articles];
  if (sortBy === "title") {
    sortedArticles.sort((a, b) => {
      const articleA = a.title.toUpperCase();
      const articleB = b.title.toUpperCase();
      if (articleA < articleB) {
        return -1;
      }
      if (articleB > articleA) {
        return 1;
      }
      return 0;
    });
  } else if (sortBy === "date") {
    console.log("Clicked!");
    console.log(sortedArticles);
    sortedArticles.sort((a, b) => {
      const dateA = createDate(a.date);
      const dateB = createDate(b.date);
      return dateA - dateB;
    });
  } else {
    sortedArticles.sort((a, b) => {
      return a.id - b.id;
    });
  }

  return sortedArticles;
};
export default sortArticlesToDisplay;
