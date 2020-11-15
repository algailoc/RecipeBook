export const sortByNew = (a, b) => {
  return b.id - a.id;
};

export const sortByOld = (a, b) => {
  return a.id - b.id;
};

export const sortByName = (a, b) => {
  const nameA = a.title.toLowerCase(),
    nameB = b.title.toLowerCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
};
