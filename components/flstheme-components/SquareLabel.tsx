'use client';
interface LabelProps {
  text: string    // optional prop
}

export default function SquareLabel({text}: LabelProps) {
    return (
        <div className="h-[75%] aspect-square drop-shadow-2xl border-[#626262] border-1 border-dashed flex justify-center items-center overflow-hidden">
            <h1 className="font-bold text-[#EEEEEE] text-[min(1.3vh,1.3vw,1rem)]">{text}</h1>
        </div>
    )
}