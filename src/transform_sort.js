function transformSort(sortQuery) {
  return sortQuery.split(',').map((element) => {
    const sortBy = element.replace('-', '');

    return element[0] === '-' ? [sortBy, 'DESC'] : [sortBy, 'ASC'];
  });
}

module.exports = transformSort;
