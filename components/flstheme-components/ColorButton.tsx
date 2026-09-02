import { useEffect, useRef, useState } from "react"
import { HexColorPicker } from "react-colorful"

interface ButtonProps {
    initialColor: string,
    onValueChange?: (color: string) => void
}

export default function ColorButton({initialColor, onValueChange}: ButtonProps) {
    const [currentColor, setColor] = useState(initialColor)
    const [showPicker, setShowPicker] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const pickerRef = useRef<HTMLDivElement>(null)

    const handleColorChange = (newColor: string) => {
        setColor(newColor)
        onValueChange?.(newColor)
    }

    useEffect(() => {
        function activateColorPicker(event: MouseEvent) {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node) && 
                pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setShowPicker(false)
            }
        }

        document.addEventListener("mousedown", activateColorPicker)
        return () => document.removeEventListener("mousedown", activateColorPicker)
    }, [])

    return (
        <div className="relative h-[75%] aspect-square">
            <div className="w-full h-full flex justify-center">
                <button ref={buttonRef} onClick={() => setShowPicker((prev) => !prev)} style={{ backgroundColor: currentColor }} className="relative w-full h-full">
                    <div className="bg-black w-full h-full opacity-0 hover:opacity-30 transition flex justify-center items-center">
                        <h1 className="font-bold text-slate-300 text-[min(1.5vh,1.5vw,1rem)]">{currentColor}</h1>
                    </div>
                </button>
            </div>

            {showPicker &&
            <div ref={pickerRef} className="absolute left-1/2 mt-2 -translate-x-1/2 z-50">
                <HexColorPicker className="max-h-[21vh] max-w-[21vh] aspect-square z-50" onChange={(newColor) => {
                    handleColorChange(newColor)
                }}/>
            </div>}   
        </div>
    )
}