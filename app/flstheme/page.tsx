"use client"

import Image from "next/image";
import Mask from "@/components/flstheme-components/Mask";
import Color from "@/components/flstheme-components/Color";
import { colorModels } from "../../lib/colors";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import SquareLabel from "@/components/flstheme-components/SquareLabel";
import ColorButton from "@/components/flstheme-components/ColorButton";
import ToggleButton from "@/components/flstheme-components/ToggleButton";
import ExportButton from "@/components/flstheme-components/ExportButton";
import SquareSpacer from "@/components/flstheme-components/SquareSpacer";


export default function Home() {

  const [hue, setHue] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [brightness, setBrightness] = useState(0)

    //Calculated
  const bgColorLightest = `hsl(
    ${198 + hue},
    ${colorModels.bgcolorLightest.saturation(saturation, brightness)}%,
    ${colorModels.bgcolorLightest.brightness(brightness)}%
  )`;
  const bgColorLight = `hsl(
    ${198 + hue},
    ${colorModels.bgcolorLight.saturation(saturation, brightness)}%,
    ${colorModels.bgcolorLight.brightness(brightness)}%
  )`;
  const bgColor = `hsl(
    ${198 + hue},
    ${colorModels.bgColor.saturation(saturation, brightness)}%,
    ${colorModels.bgColor.brightness(brightness)}%
  )`;
  const bgColorDark = `hsl(
    ${198 + hue},
    ${colorModels.bgcolorDark.saturation(saturation, brightness)}%,
    ${colorModels.bgcolorDark.brightness(brightness)}%
  )`;
  const bgColorDarkest = `hsl(
    ${198 + hue},
    ${colorModels.bgcolorDarkest.saturation(saturation, brightness)}%,
    ${colorModels.bgcolorDarkest.brightness(brightness)}%
  )`;

  const measureColor1 = `hsl(
    ${198 + hue},
    ${colorModels.measureColor1.saturation(saturation, brightness)}%,
    ${colorModels.measureColor1.brightness(brightness)}%
  )`;
  const measureColor2 = `hsl(
    ${198 + hue},
    ${colorModels.measureColor2.saturation(saturation, brightness)}%,
    ${colorModels.measureColor2.brightness(brightness)}%
  )`;
  const measureCountColor = `hsl(
    ${198 + hue},
    ${colorModels.bgcolorDarkest.saturation(saturation, brightness)}%,
    ${colorModels.bgcolorDarkest.brightness(brightness)}%
  )`;

  const patternListColor = `hsl(
    ${198 + hue},
    ${colorModels.patternListColor.saturation(saturation, brightness)}%,
    ${colorModels.patternListColor.brightness(brightness)}%
  )`;
  const trackListColor = `hsl(
    ${198 + hue},
    ${colorModels.trackListColor.saturation(saturation, brightness)}%,
    ${colorModels.trackListColor.brightness(brightness)}%
  )`;

  //Not Calculated
  const patternHeadColor = "#434F55";
  const patternBodyColor = measureCountColor;

  const [accent1, setAccent1] = useState("#7DDB00");
  const [accent2, setAccent2] = useState("#FF9F41");

  const tempoColor = "#BBBBBB";

  const [note1, setNote1] = useState("#555555");
  const [note2, setNote2] = useState("#555555");
  const [note3, setNote3] = useState("#555555");
  const [note4, setNote4] = useState("#555555");
  const [note5, setNote5] = useState("#555555");
  const [note6, setNote6] = useState("#555555");
  const [note7, setNote7] = useState("#555555");
  const [note8, setNote8] = useState("#555555");

  //View Toggle
  const [selectedMode, setSelectedMode] = useState("playlist")

  // Export File
  function hexToBgr(hex: string): number {
    const cleanHex = hex.replace("#", "")

    const r = cleanHex.slice(0, 2) 
    const g = cleanHex.slice(2, 4) 
    const b = cleanHex.slice(4, 6) 

    return parseInt(`${b}${g}${r}`, 16) 
  }

  function hexToRgb(hex: string): number {
    const cleanHex = hex.replace("#", "")

    const r = cleanHex.slice(0, 2)
    const g = cleanHex.slice(2, 4)
    const b = cleanHex.slice(4, 6)

    return parseInt(`${r}${g}${b}`, 16)
  }
  
  const saveTheme = () => {
      const content = `Hue=${-hue}\nSaturation=${saturation}\nLightness=${brightness}\nSelected=${hexToRgb(accent1)}\nHighlight=${hexToBgr(accent2)}\nMute=${hexToBgr(accent1)}\nNoteColor0=${hexToBgr(note1)}\nNoteColor1=${hexToBgr(note2)}\nNoteColor2=${hexToBgr(note3)}\nNoteColor3=${hexToBgr(note4)}\nNoteColor4=${hexToBgr(note5)}\nNoteColor5=${hexToBgr(note6)}\nNoteColor6=${hexToBgr(note7)}\nNoteColor7=${hexToBgr(note8)}`

      const blob = new Blob([content], { type: "text/plain" })
      const url = URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.download = "theme.txt"
      link.click()

      URL.revokeObjectURL(url)
  }

  return (
    <div className="bg-[#2C2C2C] w-screen min-h-dvh flex flex-col justify-center items-center gap-[1vh] p-[1vh]" style={{ "--accent-color": accent1} as React.CSSProperties}>
      <div className="bg-[#353535] w-[min(95vh,calc(100vw-2vh))] h-[min(6vh,6vw)] flex items-center gap-[3vh]">
        <h1 className="text-[#EEEEEE] font-bold ml-[1.2vh] text-[min(2.5vh,2.5vw,1.5rem)]">[FL Theme Maker]</h1>
        <div className="flex flex-1 h-[50%] w-[25%] items-center gap-[1vh]">
          <ToggleButton text="playlist_view" toggled={selectedMode === "playlist"} color={accent2} onValueChange={() => setSelectedMode("playlist")}/>
          <ToggleButton text="pianoroll_view" toggled={selectedMode === "pianoRoll"} color={accent2} onValueChange={() => setSelectedMode("pianoRoll")}/>
        </div>
        <div className="h-[50%] w-[30%] flex-1"/>
        <div className="h-[50%] w-[10%] flex flex-1 justify-center items-center">
          <ExportButton text="hi" onClick={saveTheme}/>
        </div>
      </div>

      <div className="bg-slate-600 w-[min(95vh,calc(100vw-2vh))] aspect-video flex-row">
        <div className="bg-slate-600 w-full h-[15%] flex-row">
          <div className="w-full h-[50%] flex" style={{ backgroundColor: bgColor }}>
            <div className="m-[0.25%] flex-1 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/Window Buttons.png" alt="" fill className="object-contain scale-80"/>
            </div>
            <div className="m-[0.25%] flex-4 relative" style={{ backgroundColor: bgColorLightest }}>
              <Image src="/images/playlist_ui/FileEditAdd.png" alt="" fill className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-3 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/PlayButtons.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/PlayButtonMask1.png" color={accent2} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/PlayButtonMask2.png" color={bgColorDarkest} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/PlayButtonMask3.png" color={tempoColor} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-4 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/Time.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/TimeButtonMask1.png" color={accent2} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/TimeButtonMask2.png" color={bgColorDark} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/TimeButtonMask3.png" color={bgColorLightest} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-2 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/Visualizers.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/VisualizerMask.png" color={bgColorDark} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-2 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/Metrics.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/MetricMask.png" color={bgColorDarkest} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-4 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/TopRightButtons.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/TRButtonMask.png" color={bgColorDark} className="object-contain scale-95"/>
            </div>
          </div>
          <div className="w-full h-[50%] flex" style={{ backgroundColor: bgColor }}>
            <div className="m-[0.25%] flex-7 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/ContextPanel.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/ContentPanelMask.png" color={bgColorDark} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-1 aspect-square relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/MasterVolume.png" alt="" fill className="object-contain scale-80 my-[1.5] z-1"/>
              <Mask src="/images/ui_masks/VolumeKnobMask.png" color={bgColorDark} className="object-contain scale-80 my-[1.5]"/>
            </div>
            <div className="m-[0.25%] flex-1 aspect-square relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/PitchKnob.png" alt="" fill className="object-contain scale-90 z-1"/>
              <Mask src="/images/ui_masks/PitchKnobMask.png" color={bgColorDark} className="object-contain scale-90"/>
            </div>
            <div className="m-[0.25%] flex-4 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/TimeSlider.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/SliderMask.png" color={accent1} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-7 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/InputOptions.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/InputButtonMask1.png" color={accent2} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/InputButtonMask2.png" color={bgColorDark} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/InputButtonMask3.png" color={bgColorDarkest} className="object-contain scale-95"/>
              <Mask src="/images/ui_masks/InputButtonMask4.png" color={tempoColor} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-7 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/BottomRightOptions.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/BRButtonMask.png" color={bgColorDark} className="object-contain scale-95"/>
            </div>
            <div className="m-[0.25%] flex-3 relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/News.png" alt="" fill className="object-contain scale-95 z-1"/>
              <Mask src="/images/ui_masks/NewsMask.png" color={bgColorLightest} className="object-contain scale-95"/>
            </div>
          </div>
        </div>
        <div className="w-full h-[3%] flex p-[0.1%] space-x-[0.5%]" style={{ backgroundColor: bgColor }}>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/AdditionalOptions.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/QuantizeOptions.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative"/>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/PencilTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/BrushTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/DeleteTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/MuteTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/TwoArrows.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/Cut.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/SelectTool.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/Magnify.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/Vol1.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="aspect-square relative"/>
          <div className="aspect-square relative">
              <Image src="/images/playlist_ui/Vol2.png" alt="" fill className="object-contain scale-80"/>
          </div>
        </div>
        <div className="bg-slate-600 w-full h-[7%] flex">
          <div className="w-[12%] flex relative" style={{ backgroundColor: bgColor }}>
              <Image src="/images/playlist_ui/ClipButtons.png" alt="" fill className="object-contain scale-80"/>
          </div>
          <div className="w-[10%] flex relative" style={{ backgroundColor: bgColorLight }}>
              <Image src="/images/playlist_ui/ViewButtons.png" alt="" fill className="object-contain scale-85"/>
          </div>
          <div className="bg-slate-800 w-[78%] flex-row">
            <div className="h-[50%] relative" style={{ backgroundColor: bgColorLightest }}>
              <Image src="/images/playlist_ui/ScrollArrowPair.png" alt="" fill className="object-contain scale-98"/>
            </div>
            <div className="h-[50%] relative" style={{ backgroundColor: measureCountColor }}>
              <Image src="/images/playlist_ui/Measures.png" alt="" fill className="object-contain scale-35 mx-[-32.5%]"/>
            </div>
          </div>
        </div>
        <div className="bg-slate-600 w-full h-[75%] flex relative">
          <div className="w-[1%] h-full ml-[75%] flex z-10 absolute">
            <Image src="/images/playlist_ui/ScrollBar.png" alt="" fill className="object-contain scale-125 my-[-50%] z-1"/>
            <Mask src="/images/ui_masks/SeekerMask.png" color={accent1} className="object-contain scale-125 translate-y-[-1.25%]"/>
          </div>
          <div className="bg-slate-500 w-[11%] flex relative">
            <Image src="/images/playlist_ui/PatternList.png" alt="" fill className="object-contain scale-y-[1.005] scale-x-[1.05] z-1"/>
            <Color color={patternListColor} className="object-contain w-full h-full"/>
          </div>
          <div className="w-[1%] flex" style={{ backgroundColor: bgColor }}/>
          <div className="w-[88%] h-full flex" style={{ backgroundColor: bgColorDarkest }}>
            {selectedMode === "pianoRoll" &&
              <div className="relative w-full h-full">
                <Mask src="/images/playlist_ui/RollOutline_1.png" color={bgColorDarkest} className="object-contain scale-x-[1.012] z-3"/>
                <Mask src="/images/ui_masks/BlackKeyMask_1.png" color="#4C4D4F" className="object-contain scale-x-[1.012] z-2"/>
                <Mask src="/images/ui_masks/WhiteKeyMask_1.png" color="#EBEFF7" className="object-contain scale-x-[1.012] z-2"/>
                <Mask src="/images/ui_masks/CKeyMask_1.png" color="#CDD1D9" className="object-contain scale-x-[1.012] z-2"/>
                <Mask src="/images/ui_masks/DarkBGMask_1.png" color={measureColor2} className="object-contain scale-x-[1.012] z-0"/>
                <Mask src="/images/ui_masks/LightBGMask_1.png" color={measureColor1} className="object-contain scale-x-[1.012] z-0"/>
                {note1 !== "#555555" && <Mask src="/images/ui_masks/Note1_1.png" color={note1} className="object-contain scale-x-[1.012] z-5"/>}
                {note2 !== "#555555" && <Mask src="/images/ui_masks/Note2_1.png" color={note2} className="object-contain scale-x-[1.012] z-5"/>}
                {note3 !== "#555555" && <Mask src="/images/ui_masks/Note3_1.png" color={note3} className="object-contain scale-x-[1.012] z-5"/>}
                {note4 !== "#555555" && <Mask src="/images/ui_masks/Note4_1.png" color={note4} className="object-contain scale-x-[1.012] z-5"/>}
                {note5 !== "#555555" && <Mask src="/images/ui_masks/Note5_1.png" color={note5} className="object-contain scale-x-[1.012] z-5"/>}
                {note6 !== "#555555" && <Mask src="/images/ui_masks/Note6_1.png" color={note6} className="object-contain scale-x-[1.012] z-5"/>}
                {note7 !== "#555555" && <Mask src="/images/ui_masks/Note7_1.png" color={note7} className="object-contain scale-x-[1.012] z-5"/>}
                {note8 !== "#555555" && <Mask src="/images/ui_masks/Note8_1.png" color={note8} className="object-contain scale-x-[1.012] z-5"/>}
              </div>
            }
            {selectedMode === "playlist" && 
            <div className="bg-slate-400 w-[11.37%] h-full flex relative">
                <div className="w-full h-full">
                  <Image src="/images/playlist_ui/Tracks.png" alt="" fill className="object-contain scale-y-101 z-1"/>
                  <Color color={trackListColor} className="object-contain w-full h-full"/>
                  <Mask src="/images/ui_masks/TrackButtons.png" color={accent1} className="object-contain scale-y-[1.017] translate-x-[0.5%]"/>
                </div>
            </div>
            }
            {selectedMode === "playlist" && 
            <div className="bg-slate-600 w-[88.63%] flex relative">
                <div className="w-full h-full">
                  <Image src="/images/playlist_ui/Arrangement.png" alt="" fill className="object-contain scale-100 scale-x-[1.015] z-1"/>
                  <Mask src="/images/ui_masks/PlaylistMeasure1.png" color={measureColor1} className="object-contain scale-100 scale-x-[1.015]"/>
                  <Mask src="/images/ui_masks/PlaylistMeasure2.png" color={measureColor2} className="object-contain scale-100 scale-x-[1.015]"/>
                  <Mask src="/images/ui_masks/PatternContentMasks.png" color={patternBodyColor} className="object-contain scale-100 scale-x-[1.015]"/>
                  <Mask src="/images/ui_masks/PatternHeaderMask.png" color={patternHeadColor} className="object-contain scale-100 scale-x-[1.015]"/>
                </div>
            </div>
            }
          </div>
          <div/>
        </div>
      </div>

      <div className="bg-[#353535] w-[min(95vh,calc(100vw-2vh))] h-[min(25vh,26vw)] flex flex-col justify-around items-center p-0.5 z-1">
        <div className="flex items-center flex-1 w-full justify-around">
          <SquareLabel text="bg_color"/>
          <div className="w-[42.8%] h-[80%] flex flex-col justify-around">
            <Slider min={-180} max={180} value={hue} onValueChange={(value) => {if (typeof value === "number") {setHue(value)}}} color={`hsl(${hue + 198}, 100%, 50%)`}/>
            <Slider min={-256} max={256} value={saturation} onValueChange={(value) => {if (typeof value === "number") {setSaturation(value)}}} color={`hsl(${hue + 198}, ${((saturation+256)/512)*100}%, 50%)`}/>
            <Slider min={-256} max={256} value={brightness} onValueChange={(value) => {if (typeof value === "number") {setBrightness(value)}}} color={`hsl(0, 0%, ${((brightness+256)/512)*100}%)`}/>
          </div>
          <SquareLabel text="accents"/>
          <ColorButton initialColor={accent1} onValueChange={(value) => setAccent1(value)}/>
          <ColorButton initialColor={accent2} onValueChange={(value) => setAccent2(value)}/>
          <SquareSpacer isVisible={false}/>
        </div>
        <div className="flex items-center flex-1 w-full justify-around">
          <SquareLabel text="note_colors"/>
          <ColorButton initialColor={note1} onValueChange={(value) => setNote1(value)}/>
          <ColorButton initialColor={note2} onValueChange={(value) => setNote2(value)}/>
          <ColorButton initialColor={note3} onValueChange={(value) => setNote3(value)}/>
          <ColorButton initialColor={note4} onValueChange={(value) => setNote4(value)}/>
          <ColorButton initialColor={note5} onValueChange={(value) => setNote5(value)}/>
          <ColorButton initialColor={note6} onValueChange={(value) => setNote6(value)}/>
          <ColorButton initialColor={note7} onValueChange={(value) => setNote7(value)}/>
          <ColorButton initialColor={note8} onValueChange={(value) => setNote8(value)}/>
        </div>
      </div>

      <div className="w-[min(95vh,calc(100vw-2vh))] h-50"/>

      <div className="bg-gradient-to-t from-[#222222] to-transparent w-[min(95vh,calc(100vw-2vh))] h-[min(5vh,10vw)] flex justify-around items-end z-1 pointer-events-none mt-auto p-[0.5vh]">
          <h1 className="font-bold text-[#555555] text-[1.5vh] z-1">created by: daireks</h1>
          <a href="https://github.com/daireks-dev/fl-theme-maker" target="_blank" rel="noopener noreferrer" className="font-bold text-[#555555] text-[1.5vh] z-1 pointer-events-auto hover:text-[var(--accent-color)] transition-colors">[github link]</a>
          <a href="https://www.youtube.com/@daireks" target="_blank" rel="noopener noreferrer" className="font-bold text-[#555555] text-[1.5vh] z-1 pointer-events-auto hover:text-[var(--accent-color)] transition-colors">[youtube channel]</a>
      </div>
      
      <div className="bg-gradient-to-t from-[#111111] to-transparent fixed bottom-0 left-0 w-full h-[min(50vh,50vw)] pointer-events-none z-0"/>
    </div>
  );
}
