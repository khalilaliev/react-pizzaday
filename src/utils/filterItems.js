export const sortByAvailable = (data, setSortedData) => {
  const sortedByAvailable = [...data].sort((a, b) => a.soldOut - b.soldOut);
  setSortedData(sortedByAvailable);
};

export const sortByCheapToExpensive = (data, setSortedData) => {
  const sortedByCheapToExpensive = [...data].sort(
    (a, b) => (a.unitPrice - b.unitPrice) | (a.soldOut - b.soldOut)
  );
  setSortedData(sortedByCheapToExpensive);
};

export const sortByExpensiveToCheap = (data, setSortedData) => {
  const sortedByExpensiveToCheap = [...data].sort((a, b) => {
    if (a.soldOut && !b.soldOut) {
      return 1;
    }
    if (!a.soldOut && b.soldOut) {
      return -1;
    }
    return b.unitPrice - a.unitPrice;
  });
  setSortedData(sortedByExpensiveToCheap);
};
