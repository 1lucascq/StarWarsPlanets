function doFilter({ column, comparison, value }, planet) {
  // console.log('chegou no doFilter', column, comparison, value, planet);
  if (comparison === 'maior que') {
    // console.log('------------------>CONTAGEM');
    // console.log(planet[column] > value);
    // console.log(Number(planet[column]) > Number(value));
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
  // console.log('data', data[0]);
  // if (filters.length) console.log('filters', filters[0].column);

  if (data.length && filters.length) {
    // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa', data[0]);
    // console.log('bbbbbbbbbbbbbbbbbbbbbbbbbbb', filters[0]);
    // const newData = data.filter((planet) => filters.filter(({ col, comp, value }) => doFilter(planet, col, comp, value)));
    // const newData = data.filter((planet) => filters.filter((f) => doFilter(f, planet)));
    const newData = data.filter((planet) => {
      const isTruthy = filters.filter((f) => doFilter(f, planet));
      // console.log('isTruthy', isTruthy);
      // console.log('return é:', isTruthy.length > 0);
      return isTruthy.length > 0;
    });

    // console.log('newdata é: ', newData);
    return newData;
  }
}

export default filterData;
