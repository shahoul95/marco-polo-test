interface SquareProps {
  size: number;
  index: number;
  occupied: boolean;
  blocked: boolean;
}

function Square({ size, index, occupied, blocked }: SquareProps) {
  const color = blocked ? 'black' : occupied ? 'gray' : 'green';

  return (
    <div style={{ width: size, height: size, backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {index}
    </div>
  );
}

export default Square;
