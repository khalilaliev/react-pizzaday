import { AVAILABLE, CHEAP, EXPENSIVE } from "../constants/value-text";

const sortByAvailable = (data, setSortedData) => {
  const sortedByAvailable = [...data].sort((a, b) => a.soldOut - b.soldOut);
  setSortedData(sortedByAvailable);
};

const sortByCheapToExpensive = (data, setSortedData) => {
  const sortedByCheapToExpensive = [...data].sort(
    (a, b) => (a.unitPrice - b.unitPrice) | (a.soldOut - b.soldOut)
  );
  setSortedData(sortedByCheapToExpensive);
};

const sortByExpensiveToCheap = (data, setSortedData) => {
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

export const handleSortChange = (event, data, setSortedData) => {
  const value = event.target.value;

  switch (value) {
    case AVAILABLE:
      return sortByAvailable(data, setSortedData);
    case CHEAP:
      return sortByCheapToExpensive(data, setSortedData);
    case EXPENSIVE:
      return sortByExpensiveToCheap(data, setSortedData);
    default:
      return data;
  }
};
