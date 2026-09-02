interface ColorProps {
  color: string;
  className?: string;
}

export default function Color({ color, className }: ColorProps) {
  return (
    <div
      className={className}
      style={{ backgroundColor: color }}
    />
  );
}