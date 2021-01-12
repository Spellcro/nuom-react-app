const calculateMaxSummaryLength = windowWidth => {
  if (windowWidth <= 768) {
    return 410;
  } else if (windowWidth <= 1215) {
    return 240;
  } else {
    return 180;
  }
};

export default calculateMaxSummaryLength;
