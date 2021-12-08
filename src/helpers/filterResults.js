function filterResults(query, data, filters) {
  console.log(filters);
  if (!filters || filters.length < 1) {
    const filteredResults = data.filter(({ name }) => name.includes(query));
    return filteredResults;
  }
}

export default filterResults;

// import filterData from './filterData';

// function filterResults(query, data, filters) {
//   console.log(filters);
//   const filteredData = filterData(filters, data);
//   console.log(filteredData)
//   if (!filters || filters.length < 1) {
//     const filteredResults = filteredData.filter(({ name }) => name.includes(query));
//     return filteredResults;
//   }
// }

// export default filterResults;
