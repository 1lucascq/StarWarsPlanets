import filterData from './filterData';

function filterResults(query, data, filters) {
  if (!filters || filters.length < 1) {
    const filteredResults = data.filter(({ name }) => name.includes(query));
    return filteredResults;
  }
  const filteredData = filterData(filters, data);
  console.log('filteredData in filterData', filteredData);
  const filteredResults = data.filter(({ name }) => name.includes(query));
  return filteredResults;
}

export default filterResults;
