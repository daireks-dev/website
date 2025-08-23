import Image from 'next/image';
import GitHubButton from "@/components/GitHubButton";

export default function Videos() {

    type Tag =
    | "Lua"
    | "Git"
    | "HTML"
    | "Tailwind"
    | "Python"
    | "Java"
    | "Desmos"
    | "FL Studio"
    | "JS"
    | "Rojo"
    | "Asperite"
    | "Next.js"


    const colors: Record<Tag, string> = {
    Lua: "#9b5bf0",
    Git: "#60a5fa",
    HTML: "#e34f26",
    Tailwind: "#38bdf8",
    Python: "#306998",
    Java: "#b07219",
    Desmos: "#34c759",
    "FL Studio": "#f68b1e",
    JS: "#f7df1e",
    Rojo: "#eb4d4d",
    Asperite: "#ed98cd",
    "Next.js": "#817c91"
    };

    // Use Tag[] for the tags array
    type Project = {
        title: string;
        description: string;
        tags: Tag[];
        color: string;
        image: string;
        year: string;
        link: string;
        extraimage: string;
    };

    const projects: Project[] = [
    {
        title: "Roblox Game",
        description: "Working on a 2D Papa's Pizzeria inspired Roblox game! Learning a lot about server-client network security, modularizing code with OOP and Composition, and creating GUI with front-end development-like tools.",
        tags: ["Lua", "Rojo", "Git", "Asperite"],
        color: "#9ccdea",
        image: "/images/CookingDemo.gif",
        year: "2025",
        link: "https://github.com/daireks-dev/GuiTools",
        extraimage: "/images/Tomato.png"
    },
    {
        title: "Website/Portfolio",
        description: "Developed and deployed a minimalist, responsive Website to showcase personal projects and work. Built using Tailwind CSS for rapid, maintainable styling and VSCode for development.",
        tags: ["HTML", "Tailwind", "Next.js", "JS", "Git"],
        color: "#F1CEA2",
        image: "/images/WebsiteDemo.gif",
        year: "2025",
        link: "https://github.com/daireks-dev/website",
        extraimage: "/images/PixelCabin.jpeg"
    },
    {
        title: "Graphing Calculator Music",
        description: "Built an interactive Desmos graph simulating additive synthesis with layered tones and ADSR envelopes. Generated timestamped frequencies in Python for synced audio and added pixel visuals for a full audiovisual experience.",
        tags: ["Desmos", "Python", "FL Studio", "Asperite"],
        color: "#656d74",
        image: "/images/DesmosDemo.gif",
        year: "2024",
        link: "https://www.desmos.com/art#19;glofedvu2q",
        extraimage: "/images/ArtExpo.png"
    },
    {
        title: "Chord Progression Maker",
        description: "Created a custom chord system in Roblox Studio by pre-rendering all note combinations into audio and mapping them to chord names. Designed an intuitive piano UI and progression editor with chord editing, quality changes, and Roman numeral notation.",
        tags: ["Lua", "Python", "FL Studio"],
        color: "#95d5ad",
        image: "/images/MusicDemo.gif",
        year: "2023",
        link: "https://www.roblox.com/games/14148512369/Chord-Progression-Planner",
        extraimage: "/images/PianoThumbnail.png"
    }
    ];

  return (
    <div className="w-screen min-h-screen flex flex-col items-center font-sans bg-gray-800"     
    style={{
      backgroundImage: "url('/images/TechBackground1.png')",
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
      backgroundPosition: "left",
    }}>

        {/* Page header */}
        <div className="bg-gray-300 w-full shadow-xl relative">
            <h1 className="text-[min(7vw,1.25rem)] font-bold pl-2 text-gray-700">Technical Projects</h1>
        </div>

        {/* Projects */}
        <div className="bg-blue-300 w-full lg:w-[75%] max-w-[50rem] h-auto flex-col">

                {projects.map((project, index) => (
                    <div key={index} style={{ backgroundColor: project.color }}  className="w-full h-full flex">

                        {/* Timeline */}
                        <div className="bg-white h-auto w-[15%] shadow-2xl relative" 
                        style={{
                            backgroundImage: "url('/images/Corkboard.png')",
                            backgroundRepeat: "repeat",
                            backgroundPosition: "left",
                        }}>

                            <div className="h-[70%] w-full shadow-2xl relative flex flex-col justify-around items-center">

                                <div className="bg-pink-100 aspect-square w-full scale-93 m-1 shadow-2xl rotate-2 flex justify-center items-center transition transform hover:scale-105 hover:rotate-6">
                                    <h2 className="text-red-900 text-[min(4vw,3rem)]">{project.year}</h2>
                                    <div className="w-[40%] aspect-square absolute top-[-15]">
                                        <Image src="/images/RedTack.png" fill alt="Logo"/>
                                    </div>
                                </div>

                                <a href={project.link} className="bg-yellow-100 aspect-square w-full scale-93 m-1 shadow-2xl -rotate-2 flex justify-center items-center transition transform hover:scale-105 hover:rotate-6 hover:bg-blue-100">
                                    <h2 className="text-yellow-900 text-[min(4vw,3rem)] w-full h-full transition hover:text-blue-900 flex justify-center items-center">Link</h2>
                                    <div className="w-[40%] aspect-square absolute top-[-15]">
                                        <Image src="/images/GreenTack.png" fill alt="Logo"/>
                                    </div>
                                </a>

                                <div className="bg-green-100 aspect-square w-full scale-93 m-1 shadow-2xl rotate-3 flex justify-center items-center transition transform hover:scale-105 hover:rotate-6">
                                    <Image src={project.extraimage} fill alt="Logo" className="aspect-square scale-90"/>
                                    <div className="w-[40%] aspect-square absolute top-[-15]">
                                        <Image src="/images/BlueTack.png" fill alt="Logo" className="-rotate-70"/>
                                    </div>
                                </div>

                            </div>
            
                        </div>
                        
                        {/* Project */}
                        <div className="w-[83%] flex flex-col items-center justify-center overflow-hidden aspect-[16/12]">
                           
                            {/* Title */}
                            <div className="overflow-hidden w-full h-[12%] flex items-center justify-center">
                                <h2 className="text-white text-outline text-[min(4vw,2.5rem)] font-bold">{project.title}</h2>
                            </div>

                            {/* Image + Tags */}
                            <div className="w-[85%] h-[70%] flex flex-col overflow-hidden">
                                
                                <div className="bg-white rounded-2xl h-[90%] flex items-center justify-center relative">
                                    <Image src={project.image} className="border-4 rounded-2xl shadow-2xs scale-100 hover:scale-95 transition-transform" alt="Project Image" layout="fill"/>
                                </div>

                                <div className="w-[70%] h-[10%] flex -space-x-2 sm:-space-x-4">
                                    {project.tags.map((name, index) => (
                                        <div key={index} style={{ backgroundColor: colors[name] }} className="h-full w-[20%] rounded-4xl border-gray-700 border-[2] shadow-2xs flex justify-center items-center scale-75 hover:scale-85 transition-transform">
                                            <p className="text-white text-[min(2vw,1.1rem)] text-nowrap">{name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="h-[18%]">
                                <h2 className="text-white font-bold text-center text-[min(1.8vw,0.92rem)] pt-1 pl-10 pr-10">{project.description}</h2>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        {/* Socials */}
        <GitHubButton/>

    </div>

  );
}
