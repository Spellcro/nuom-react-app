const createSummary = (fullText, maxLength) => {
  if (fullText.length > maxLength) {
    return fullText.slice(0, maxLength).concat("...");
  }
  return fullText;
};

export default createSummary;
