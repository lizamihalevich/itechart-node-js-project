const sort = (a, b) => {
  if (a === null) {
    return 1;
  }
  if (b === null) {
    return -1;
  }

  return a > b ? 1 : -1;
};

export default sort;
