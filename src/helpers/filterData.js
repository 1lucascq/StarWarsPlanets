function doFilter({ column, comparison, value }, planet) {
  if (comparison === 'maior que') {
    return Number(planet[column]) > Number(value);
  }
  if (comparison === 'menor que') {
    return Number(planet[column]) < Number(value);
  }
  if (comparison === 'igual a') {
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
