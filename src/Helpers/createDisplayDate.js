const createDisplayDate = date => {
  if (typeof date === "string") {
    return date;
  } else {
    const articleDate = new Date(date.seconds * 1000);
    // Trim the date to show in the format MMM DD YYYY.
    return articleDate.toISOString().slice(0, 10);
  }
};

export default createDisplayDate;
