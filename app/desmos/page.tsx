import Image from "next/image";

export default function Desmos() {

  const projects = [
    {
      title: "Mushroom Caves",
      url: "https://www.desmos.com/calculator/glofedvu2q",
      description: "2025: I made this song over winter break originally because there was a little trend on youtube of people making music on desmos. A month later, I made the visuals in a spontaneous decision to join the Desmos Art Expo and actually got in!"
    },
    {
      title: "Journal Presentation",
      url: "https://www.desmos.com/calculator/rvybv1fvfr",
      description: "2024: I made this for my career presentation for english my senior year in high school. Made use of the isometric coordinate system handler I made previously! Used piecewise functions + actions + ticker to simulate animation!"
    },
    {
      title: "3D Isometric Abstract Art",
      url: "https://www.desmos.com/calculator/poaf1ioesb",
      description: "2024: Something made for AP 2D Art (whether its 2d or not is debatable). Took the isometric coordinate functions I made a few projects ago and tried to recreate a drawing I made (which you can see the the right)"
    },
    {
      title: "Simulating 1st Person Movement",
      url: "https://www.desmos.com/calculator/wiklowzk7v",
      description: "2023: Modeling some goofy 1st person hand movement for a roblox game concept I was working on at the time! (yes those are my hands)"
    },
    {
      title: "Complex Numbers Experiment",
      url: "https://www.desmos.com/calculator/ngdo4fsusj",
      description: "2022: A little experiment with complex numbers I did back in 2022 (I think). This was actually before Desmos added complex number support so I represented them with points haha"
    }
  ];

  return (
    <div className="w-screen min-h-screen bg-blue-100 flex flex-col items-center font-sans pb-10">

        <div className="bg-[#2A2A2A] w-full flex flex-row justify-center items-center px-8 py-4">
        <Image
            src="/images/desmoslogo.png"
            alt="Desmos Logo"
            width={100}
            height={100}
            className="rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold text-gray-200 ml-6">
            Desmos Projects
        </h1>
        </div>

        {projects.map((project, index) => (
            <div key={index} className="mt-3 mb-12 w-11/12 md:w-3/4 lg:w-1/2 flex flex-col items-center">
            <h2 className="text-2xl font-semibold mb-4 text-[#2F72DC]">{project.title}</h2>
            <iframe
                src={project.url}
                width="100%"
                height="500"
                className="border-2 border-gray-400 rounded-lg mb-4"
                allowFullScreen
            ></iframe>
            <p className="text-center text-gray-700">{project.description}</p>
            </div>
        ))}
    </div>
  );

}