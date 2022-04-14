function filterResults(query, data, filters) {
  if (!filters || filters.length < 1) {
    if (!query) return data;
    const filteredResults = data.filter(({ name }) => name.toLowerCase()
      .includes(query.toLowerCase()));
    return filteredResults;
  }
  const filteredResults = data.filter(({ name }) => name.toLowerCase()
    .includes(query.toLowerCase()));
  return filteredResults;
}

export default filterResults;
