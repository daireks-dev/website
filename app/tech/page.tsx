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
    };

    const projects: Project[] = [
    {
        title: "Roblox Game",
        description: "Working on a 2D Papa's Pizzeria inspired Roblox game! Learning a lot about server-client network security, modularizing code with OOP and Composition, and creating GUI with front-end development-like tools.",
        tags: ["Lua", "Rojo", "Git", "Asperite"],
        color: "#9ccdea",
        image: "/images/CookingDemo.gif"
    },
    {
        title: "Website/Portfolio",
        description: "Developed and deployed a minimalist, responsive Website to showcase personal projects and work. Built using Tailwind CSS for rapid, maintainable styling and VSCode for development.",
        tags: ["HTML", "Tailwind", "Next.js", "JS", "Git"],
        color: "#F1CEA2",
        image: "/images/WebsiteDemo.gif"
    },
    {
        title: "Graphing Calculator Music",
        description: "Built an interactive Desmos graph simulating additive synthesis with layered tones and ADSR envelopes. Generated timestamped frequencies in Python for synced audio and added pixel visuals for a full audiovisual experience.",
        tags: ["Desmos", "Python", "FL Studio", "Asperite"],
        color: "#656d74",
        image: "/images/DesmosDemo.gif"
    },
    {
        title: "Chord Progression Maker",
        description: "Created a custom chord system in Roblox Studio by pre-rendering all note combinations into audio and mapping them to chord names. Designed an intuitive piano UI and progression editor with chord editing, quality changes, and Roman numeral notation.",
        tags: ["Lua", "Python", "FL Studio"],
        color: "#95d5ad",
        image: "/images/MusicDemo.gif"
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
        <div className="bg-gray-300 w-full flex justify-center shadow-xl relative">
            <div className="w-full lg:w-[75%] max-w-[50rem] h-auto flex flex-row">
                <div className="bg-white h-auto flex-[1] opacity-0"/>

                <div className="bg-gray-300 w-full flex-[8] flex flex-row justify-center items-center py-5 z-2">
                    <h1 className="text-[min(7vw,2.5rem)] font-bold mb-0 text-gray-700">Technical Projects</h1>
                </div>
            </div>
        </div>


        <div className="bg-blue-300 w-full lg:w-[75%] max-w-[50rem] h-auto flex flex-row">

            {/* Timeline */}
            <div className="bg-white h-auto flex-[1] shadow-2xl relative" 
            style={{
                backgroundImage: "url('/images/Corkboard.png')",
                backgroundRepeat: "repeat",
                backgroundPosition: "left",
            }}>
 
            </div>

            {/* Projects */}
            <div className="bg-blue-300 h-auto flex-[8]">
                {projects.map((project, index) => (
                    <div key={index} style={{ backgroundColor: project.color }}  className="w-full aspect-[16/11] flex flex-col items-center overflow-hidden">
                        {/* Title */}
                        <div className="overflow-hidden w-full h-[12%] flex items-center justify-center">
                            <h2 className="text-white text-outline text-[min(4vw,2.5rem)] font-bold">{project.title}</h2>
                        </div>

                        <div className="w-[80%] h-[70%] flex flex-col overflow-hidden">
                            {/* Image */}
                            <div className="bg-white rounded-2xl h-[90%] flex items-center justify-center relative">
                                <Image src={project.image} className="border-4 rounded-2xl shadow-2xs scale-100 hover:scale-95 transition-transform" alt="Project Image" layout="fill"/>
                            </div>

                            {/* Tags */}
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
                ))}

            </div>



        </div>

        <GitHubButton/>

    </div>

  );
}
