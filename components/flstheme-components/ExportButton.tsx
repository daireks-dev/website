interface ButtonProps {
    onClick?: () => void
}

export default function ExportButton({ onClick }: ButtonProps) {
    return (
        <button onClick={onClick} className="font-bold text-[#353535] text-[min(2vh,2vw,1rem)] aspect-[16/4] h-full bg-[#999999] overflow-hidden transition-colors hover:bg-gray-300/50 active:bg-gray-300/40">
            {"export"}
        </button>
    )
}