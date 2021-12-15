export default function orderData(order, data) {
  const NEGATIVE_NUMBER = -1;
  const { column, sort } = order;

  if (sort === 'ASC') {
    return data.sort((a, b) => {
      if (a[column] > b[column]) return 1;
      if (a[column] < b[column]) return NEGATIVE_NUMBER;
      return 0;
    });
  }

  if (sort === 'DESC') {
    return data.sort((a, b) => {
      if (a[column] > b[column]) return NEGATIVE_NUMBER;
      if (a[column] < b[column]) return 1;
      return 0;
    });
  }
}

export function orderDataByNumbers(order, data) {
  const NEGATIVE_NUMBER = -1;
  const { column, sort } = order;
  if (sort === 'ASC') {
    return data.sort((a, b) => {
      if (Number(a[column]) > Number(b[column])) return 1;
      if (Number(a[column]) < Number(b[column])) return NEGATIVE_NUMBER;
      return 0;
    });
  }

  if (sort === 'DESC') {
    return data.sort((a, b) => {
      if (Number(a[column]) > Number(b[column])) return NEGATIVE_NUMBER;
      if (Number(a[column]) < Number(b[column])) return 1;
      return 0;
    });
  }
}
