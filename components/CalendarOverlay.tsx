import CalendarDay from "./CalendarDay";

export default function CalendarOverlay() {

  return (
    <div className="aspect-[4/3] w-[75vw] h-max-[10vh] bg-slate-300 rounded-2xl shadow-2xl overflow-hidden">
      <div className="flex justify-around items-center w-full h-10">
        <div>
          <h1 className="font-bold">Month</h1>
        </div>
        <div>
          <h1 className="font-bold">Year</h1>
        </div>
      </div>
      <div className="w-full h-full">
        <div className="grid grid-cols-7 grid-rows-5 w-full h-full p-3">
          <CalendarDay/>
          <CalendarDay/>
          <CalendarDay/>
          <CalendarDay/>
          <CalendarDay/>
          <CalendarDay/>
          <CalendarDay/>
          <CalendarDay/>
          <CalendarDay/>
          <CalendarDay/>
          <CalendarDay/>
        </div>
      </div>
    </div>
  );
}