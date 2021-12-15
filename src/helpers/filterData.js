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
  // Preciso do renderData pra avaliar if (existe renderData) então a lógica é de usar ele ao invés do data
  // Uma segunda opção é colocar outro componente pra renderizar se houverem filtros ativos

  if (data.length && filters.length) {
    const newData = data.filter((planet) => {
      const isTruthy = filters.filter((f) => doFilter(f, planet));
      console.log('isTrut', isTruthy);
      return isTruthy.length === filters.length;
    });
    console.log('newData', newData);
    return newData;
  }
}

export default filterData;
