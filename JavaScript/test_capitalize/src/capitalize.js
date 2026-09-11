function capitalize(str) {
  const firstLetter = str.charAt(0);

  return `${firstLetter.toUpperCase()}${str.slice(1)}`;
}

export { capitalize };
