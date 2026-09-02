export default function Videos() {
  const videos = [
    {
      title: "Song 127: Summer Shores",
      url: "https://www.youtube.com/embed/P-jCyYJqJbM",
    },
    {
      title: "Song 125: Return",
      url: "https://www.youtube.com/embed/rWxl5JWIIok",
    },
    {
      title: "Song 118: PROPHECY",
      url: "https://www.youtube.com/embed/Rv4lLR3ZW78",
    },
    {
      title: "Song 109: Setting Sail",
      url: "https://www.youtube.com/embed/9waQ1uZLv7Y",
    },
    {
      title: "Song 94: Can't Quite Grasp",
      url: "https://www.youtube.com/embed/C00j1_HCA5s",
    },
    {
      title: "Song 90: Ghost Bossa",
      url: "https://www.youtube.com/embed/bP9F7UpiFv4",
    },
    {
      title: "Song 85: Through The City",
      url: "https://www.youtube.com/embed/GmxO3mWgIKY",
    },
    {
      title: "Song 73: Haiku II",
      url: "https://www.youtube.com/embed/LboaOZMG9FI",
    },
    {
      title: "Song 72: Nightfall",
      url: "https://www.youtube.com/embed/9_C1t6vPMC8",
    },
    {
      title: "Song 71: Pico de Gallo",
      url: "https://www.youtube.com/embed/QdW0XdrU91A",
    },
    {
      title: "Song 70: Roll with It",
      url: "https://www.youtube.com/embed/bt_r-Jmrono",
    },
    {
      title: "Song 68: 7_3_2023 (2)",
      url: "https://www.youtube.com/embed/OAMloiUQzUI",
    },
    {
      title: "Song 67: Meadow in the Sky",
      url: "https://www.youtube.com/embed/cRJX8Pvjln4",
    },
    {
      title: "Song 66: factory.mp3",
      url: "https://www.youtube.com/embed/wMSKuZlMPqk",
    },
    {
      title: "Song 64: Haiku I",
      url: "https://www.youtube.com/embed/EbN_hsOpGMA",
    },
    {
      title: "Song 63: Lost in a Forest",
      url: "https://www.youtube.com/embed/EaaBNY26v4A",
    },
    {
      title: "Song 58: Only for a Moment",
      url: "https://www.youtube.com/embed/U7ne0d7BSxw",
    }
    ,
    {
      title: "Song 56: Forward Motion",
      url: "https://www.youtube.com/embed/zP-ySysZ5Vg",
    }
  ];

  return (
<div className="w-screen min-h-screen flex flex-col items-center font-sans bg-amber-100">
  {/* Page header */}
  <div className="bg-gray-100 w-full flex flex-row justify-center items-center py-4 shadow-xl z-10 relative">
    <h1 className="text-4xl font-bold mb-0 text-gray-600">Musical Creations</h1>
  </div>

  {/* Background + rest of content */}
  <div
    className="w-full flex flex-col items-center px-4 pt-8 brightness"
    style={{
      backgroundImage: "url('/images/DawScreen.png')",
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
      backgroundPosition: "left",
    }}
  >
    {/* Page description */}
    <p className="text-blue-400 mb-4 text-center max-w-2xl bg-blue-200 px-1 shadow-xl">
      FL Studio is my usual DAW, and I post my finished songs to my Youtube Channel.
    </p>
    <p className="text-orange-400 mb-8 text-center max-w-2xl bg-amber-200 px-1 shadow-xl">
      Here are some songs I am proud of!
    </p>

    {/* Video grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {videos.map((video, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center"
        >
          <h2 className="text-xl font-semibold mb-4 text-center text-gray-600">
            {video.title}
          </h2>
          <iframe
            className="w-full h-64 md:h-48 lg:h-56 rounded-md mb-2"
            src={video.url}
            title={video.title}
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  </div>
</div>

  );
}
