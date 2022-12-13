const sorter2 = (sortBy, sort) => (a, b) => {
    if (sort === "asc") {
      if (sortBy === "age") {
        return a[sortBy] > b[sortBy] ? 1 : -1;
      }
      return a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1;
    } else {
      if (sort === "desc") {
        // console.log('desc');
        if (sortBy === "age") {
          return a[sortBy] < b[sortBy] ? 1 : -1;
        }
        return a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? 1 : -1;
      }
    }
  };

export {sorter2}