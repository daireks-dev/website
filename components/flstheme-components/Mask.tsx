interface MaskProps {
  src: string;
  color: string;
  className?: string;
}

export default function Mask({ src, color, className }: MaskProps) {
  return (
    <div
      className={`absolute inset-0 ${className ?? ""}`}
      style={{
        backgroundColor: color,
        maskImage: `url(${src})`,
        WebkitMaskImage: `url(${src})`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}