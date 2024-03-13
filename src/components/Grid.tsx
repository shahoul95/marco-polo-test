import Square from './Square';

interface Coordinate {
  index: number;
  occupied: boolean;
  blocked: boolean;
}

interface GridProps {
  size: number;
  coordinates: Coordinate[];
}

function Grid({ size, coordinates }: GridProps) {
  const squareSize = 40;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${size}, ${squareSize}px)` }}>
      {coordinates.map(square => (
        <Square key={square.index} {...square} size={squareSize} />
      ))}
    </div>
  );
}

export default Grid;
