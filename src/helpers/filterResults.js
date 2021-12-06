function filterResults(query, data) {
  const filteredResults = data.filter(({ name }) => name.includes(query));
  return filteredResults;
}

export default filterResults;
