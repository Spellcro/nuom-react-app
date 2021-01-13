const createDate = date => {
  if (typeof date !== "string" && typeof date !== "undefined") {
    return new Date(date.seconds * 1000);
  }
  if (typeof date === "undefined") {
    return new Date();
  }
  const year = Number(date.slice(0, 4));
  const month = Number(date.slice(5, 7));
  const day = Number(date.slice(8, 10));
  // If any of these return NaN then check for this:
  if (year === NaN || month === NaN || day === NaN) {
    console.log(`Error converting date with argument ${date}`);
    return new Date();
  }
  return new Date(year, month - 1, day);
};

export default createDate;
