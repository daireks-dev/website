import Image from 'next/image';
export default function CalendarDay() {

  return (
        
        <div className="bg-white outline relative">
            <Image className="absolute z-0 p-[2]" src="/latest.jpg" alt="cat" layout="fill"/>
            <h1 className="mx-1 z-1 relative text-outline">#</h1>-
        </div>

  );
}