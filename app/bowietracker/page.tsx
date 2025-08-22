import BowieInfo from '@/components/BowieInfo';
import IntroOverlay from '@/components/IntroOverlay';
import Image from 'next/image';

export default function BowieTracker() {

  return (
<>
<IntroOverlay/>
 <div className="w-screen h-screen bg-[#382c0c] flex flex-col font-sans overflow-x-hidden">


    <div className="w-full h-full fixed">
      <Image src="/images/Vignette.png" layout="fill" alt="vignette" />
    </div>

    <div className="flex flex-col items-center relative">

      <div className="w-[120%] h-[120%] absolute">
        <Image src="/images/Spotlight2.png" layout="fill" alt="cat" />
      </div>

      {/* Title */ }
      <div className="w-[75%] max-w-2xl aspect-[7/1] mt-[10vh] relative">
        <Image src="/images/Title.png" layout="fill" alt="Title" />
      </div>

      {/* Bowie Image */}
      <div className="w-full max-w-5xl flex flex-row relative">
        <div className="flex-1 flex justify-center">
          <div className="aspect-square w-full relative">
            <Image src="/images/Spin3D.gif" layout="fill" alt="cat"/>
          </div>
        </div>

        <div className="h-full aspect-[3/4] relative flex justify-center items-center">
          <Image src="/latest.jpg" layout="fill" alt="cat" className="border-4 border-amber-50"/>
        </div>


        <div className="flex-1 flex justify-center">
          <div className="aspect-square w-full relative">
            <Image src="/images/Spin3D.gif" layout="fill" alt="cat"/>
          </div>
        </div>
      </div>

      {/* Bowie Info */}
      <BowieInfo/>

    </div>

    {/* Top and Bottom Borders */}
    <div className="fixed top-0 w-full h-[5vh] bg-[url('/images/Leaf.png')] bg-repeat bg-[length:auto_100%] rotate-180 z-2"></div>
    <div className="fixed bottom-0 w-full h-[5vh] bg-[url('/images/Leaf.png')] bg-repeat bg-[length:auto_100%] z-2"></div>

 </div>

 </>

  );
}
