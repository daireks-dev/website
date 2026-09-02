interface ToggleButtonProps {
    text: string
    toggled: boolean
    color: string
    onValueChange?: (toggled: boolean) => void
}

export default function ToggleButton({
    text,
    toggled,
    color,
    onValueChange,
}: ToggleButtonProps) {
    const handleClick = () => {
        onValueChange?.(!toggled)
    }

    return (
        <button
            onClick={handleClick}
            className={`h-full w-full border ${
                toggled
                    ? "border-transparent"
                    : "border-[#555555] text-slate-300"
            }`}
            style={toggled ? { borderColor: color, color: color } : undefined}
        >
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="font-bold text-[min(1.3vh,1.3vw,1rem)]">
                    {text}
                </h1>
            </div>
        </button>
    )
}