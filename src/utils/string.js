const except = (string, length = 80) => {
  if (string.length > length) {
    return string.slice(0, length) + '...';
  }
  return string;
};

export { except };
