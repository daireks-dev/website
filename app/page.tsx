import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-[#ffedae]">
      
      <div className="w-full h-[50%] relative flex justify-center">

        <div className="w-full aspect-[1/1] bottom-0 absolute flex justify-center">

          <Image src="/images/RainbowBanner.png" layout="fill" alt="pixel art" className="bottom-0 aspect-square blur-xs bg-amber-50 opacity-80"/>

          <div className="h-[75%] w-[95%] absolute bg-[#ffedae] bottom-0">
            <Image src="/images/RainbowBanner.png" layout="fill" alt="pixel art" className="bottom-0 aspect-[1/1]"/>
          </div>  

        </div>

        <div className="relative flex flex-col items-center justify-center bg-[#fff9e4] w-[80%] max-w-2xl max-h-[350] aspect-[4/3] rounded-4xl shadow-2xl">
          <div className="bg-[#d6f3ff] w-full h-2/3 absolute top-0"/>

          <div className="h-[70%] aspect-[1/1] z-1 relative">
            <Image src="/images/Pfp.jpg" layout="fill" alt="pug" className="rounded-full shadow-2xl"/>
          </div>

          <h1 className="text-black font-bold mt-3"> daireks </h1>
          <h1 className="text-black font-light"> creations/experiments </h1>
        </div>
 
      </div>

      <div className="flex justify-center items-center gap-5 bg-white w-full h-25 shadow-2xl"> 

        <a href="https://www.youtube.com/@daireks" className="bg-white h-[90%] aspect-[1/1] rounded-full relative overflow-hidden shadow-2xl hover:brightness-60 transition">
          <Image src="/images/Youtube.png" fill alt="Logo" className="p-3"/>
        </a>

        <a href="https://open.spotify.com/artist/68AvtuFhGhL2nziBhd988A" className="bg-white h-[90%] aspect-[1/1] rounded-full relative overflow-hidden shadow-2xl hover:brightness-60 transition">
          <Image src="/images/Spotify.png" fill alt="Logo" className="p-3"/>
        </a>

        <a href="https://www.instagram.com/daireks" className="bg-white h-[90%] aspect-[1/1] rounded-full relative overflow-hidden shadow-2xl hover:brightness-60 transition">
          <Image src="/images/Instagram.jpg" fill alt="Logo" className="p-3"/>
        </a>

      </div>

      <div className="flex justify-center w-full h-auto mt-5">

        <div className="flex justify-center items-center max-w-2xl w-full aspect-square p-1 bg-[url(/images/Corkboard.png)] rounded-2xl shadow-2xl">

          <div className="grid grid-cols-3 place-items-center gap-y-7 w-full h-full"> 

            <a href="/tech" className="flex justify-center h-[90%] aspect-[1/1] relative">

              <h1 className="absolute text-white z-2 bottom-1 bg-black opacity-[0.6] ">Technical Projects</h1>
              <h1 className="absolute text-white z-2 bottom-1">Technical Projects</h1>
              
              <Image src="/images/Programming.png" fill alt="Logo" className="border-5 border-white hover:brightness-60 transition transform hover:scale-110 hover:-rotate-6"/>
              
              <div className="w-[50%] aspect-square absolute top-[-45]">
                <Image src="/images/Tape.png" fill alt="Logo"/>
              </div>
            </a>

            <a href="/desmos" className="flex justify-center h-[90%] aspect-[1/1] relative">

              <h1 className="absolute text-white z-2 bottom-1 bg-black opacity-[0.6] ">Desmos Experiments</h1>
              <h1 className="absolute text-white z-2 bottom-1">Desmos Experiments</h1>

              <Image src="/images/Desmos.png" fill alt="Logo" className="border-5 border-white hover:brightness-60 transition transform hover:scale-110 hover:rotate-6"/>

              <div className="w-[40%] aspect-square absolute top-[-15]">
                <Image src="/images/YellowTack.png" fill alt="Logo"/>
              </div>

            </a>

            <a href="/bowietracker" className="flex justify-center h-[90%] aspect-[1/1] relative">
              
              <h1 className="absolute text-white z-2 bottom-1 bg-black opacity-[0.6]">Bowie Tracker</h1>
              <h1 className="absolute text-white z-2 bottom-1">Bowie Tracker</h1>

              <Image src="/images/Piano.webp" fill alt="Logo" className="border-5 border-white hover:brightness-60 transition transform hover:scale-110 hover:-rotate-6"/>

              <div className="w-[40%] aspect-square absolute top-[-15]">
                <Image src="/images/RedTack.png" fill alt="Logo"/>
              </div>
            </a>

            <a href="/music" className="flex justify-center h-[90%] aspect-[1/1] relative">
              
              <h1 className="absolute text-white z-2 bottom-1 bg-black opacity-[0.6] ">Music</h1>
              <h1 className="absolute text-white z-2 bottom-1">Music</h1>
              
              <Image src="/images/UnfinishedSongs.png" fill alt="Logo" className="border-5 border-white hover:brightness-60 transition transform hover:scale-110 hover:rotate-6"/>

              <div className="w-[40%] aspect-square absolute top-[-15]">
                <Image src="/images/BlueTack.png" fill alt="Logo"/>
              </div>
            </a>

            <a className="flex justify-center h-[90%] aspect-[1/1] relative">
              
              <h1 className="absolute text-white z-2 bottom-1 bg-black opacity-[0.6] ">Visual Art</h1>
              <h1 className="absolute text-white z-2 bottom-1">Visual Art</h1>
              
              <Image src="/images/Art.webp" fill alt="Logo" className="border-5 border-white hover:brightness-60 transition transform hover:scale-110 hover:-rotate-6"/>

              <div className="w-[40%] aspect-square absolute top-[-15]">
                <Image src="/images/GreenTack.png" fill alt="Logo"/>
              </div>
        
            </a>

            <a className="flex justify-center h-[90%] aspect-[1/1] relative">
              
              <h1 className="absolute text-white z-2 bottom-1 bg-black opacity-[0.6]">Personal</h1>
              <h1 className="absolute text-white z-2 bottom-1">Personal</h1>

              <Image src="/images/Nature.jpeg" fill alt="Logo" className="border-5 border-white hover:brightness-60 transition transform hover:scale-110 hover:rotate-6"/>

              <div className="w-[50%] aspect-square absolute top-[-45]">
                <Image src="/images/Tape.png" fill alt="Logo"/>
              </div>

            </a>
            
            <div className="h-[90%] aspect-[1/1] relative overflow-hidden"></div>
            <div className="h-[90%] aspect-[1/1] relative overflow-hidden"></div>
            <div className="h-[90%] aspect-[1/1] relative overflow-hidden"></div>
          
          </div>

        </div>

      </div>

    </div>
  );
}
