

export default function VisualArt() {

  return (

 <div className="w-screen min-h-screen bg-amber-100 flex flex-col font-sans">
    <div className="flex flex-col items-center bg-amber-300 w-full h-[60vh]">

      <div className="w-full h-1/3 bg-slate-500 flex justify-center items-center">
        <h1>Header</h1>
      </div>

      <div className="w-full h-2/3 bg-amber-50 flex justify-center">
        <div className="h-full grid grid-cols-3 grid-rows-3 bg-amber-400 aspect-square place-content-center place-items-center">
          <div className="bg-amber-300 flex-1"></div>
          <div className="bg-amber-300 flex-1"></div>
          <div className="bg-amber-300 flex-1"></div>
          <div className="bg-amber-300 flex-1"></div>
          <div className="bg-amber-300 flex-1"></div>
          <div className="bg-amber-300 flex-1"></div>
          <div className="bg-amber-300 flex-1"></div>
          <div className="bg-amber-300 flex-1"></div>
          <div className="bg-amber-300 flex-1"></div>
        </div>
      </div>

    </div>

 </div>

  );
}
