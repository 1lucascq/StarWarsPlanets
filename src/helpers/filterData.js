function doFilter(filter, planet) {
  const { column, comparison, value } = filter;
  if (comparison === 'bigger than') {
    return Number(planet[column]) > Number(value);
  }
  if (comparison === 'smaller than') {
    return Number(planet[column]) < Number(value);
  }
  if (comparison === 'equals to') {
    return Number(planet[column]) === Number(value);
  }
}

function filterData(filters, data) {
  if (data.length && filters.length) {
    const newData = data.filter((planet) => {
      const isTruthy = filters.filter((f) => doFilter(f, planet));
      return isTruthy.length === filters.length;
    });
    return newData;
  }
}

export default filterData;
