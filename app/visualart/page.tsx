import Artwork from "./artwork";

export default function VisualArt() {

  return (

    <div className="w-screen h-screen bg-gray-500 flex items-center justify-center font-sans">

      <div className="bg-gray-400 w-[min(50rem,90vw)] h-[80vh]">
        <div className="grid grid-cols-3 gap-2">
          <Artwork/>
          <Artwork/>
          <Artwork/>
          <Artwork/>
          <Artwork/>
          <Artwork/>
          <Artwork/>
        </div>
      </div>

    </div>

  );
}
