export const calculateCoordinates = (gridSize: number, blockedSquares: number, occupiedRatio: number) => {
  const totalSquares = gridSize ** 2;
  const occupiedSquares = Math.floor((totalSquares - blockedSquares) * occupiedRatio);

  return Array.from({ length: totalSquares }, (_, index) => ({
    index: index + 1,
    occupied: index < occupiedSquares,
    blocked: index < blockedSquares,
  }));
};

export const distance = (index1: number, index2: number, size: number): number => {
  const [x1, y1] = getCoordinates(index1, size);
  const [x2, y2] = getCoordinates(index2, size);
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
};

export const getCoordinates = (index: number, size: number): [number, number] => {
  const x = 1 + (index - 1 - ((index - 1) % size)) / size;
  const y = 1 + ((index - 1) % size);
  return [x, y];
};
