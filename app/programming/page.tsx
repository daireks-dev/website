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
    };

    const projects: Project[] = [
    {
        title: "Roblox Game",
        description: "Working on a 2D Papa's Pizzeria inspired Roblox game! Learning a lot about server-client network security, modularizing code with OOP and Composition, and creating GUI with front-end development-like tools.",
        tags: ["Lua", "Rojo", "Git", "Asperite"]
    },
    {
        title: "This Website",
        description: "Developed and deployed a minimalist, responsive Website to showcase personal projects and work. Built using Tailwind CSS for rapid, maintainable styling and VSCode for development.",
        tags: ["HTML", "Tailwind", "Next.js", "JS", "Git"]
    },
    {
        title: "Desmos",
        description: "Created an interactive Desmos Graph that simulates additive synthesis using layered tone() functions and simulated ADSR envelopes. Used Python to generate timestamped frequency tables for synchronized audio playback. Designed pixel visuals synced with instruments for a complete audiovisual experience.",
        tags: ["Desmos", "Python", "FL Studio", "Asperite"]
    },
    {
        title: "Chord Progression Maker",
        description: "Built a system in Roblox Studio to play arbitrary chords despite engine limitations by generating compressed audio with all note combinations and mapping chord names (e.g.,“CEGB”) to playback timestamps. Designed an intuitive piano UI and chord progression editor allowing users to add/remove chords, change chord qualities, and view scale degree (Roman numeral) notation relative to the tonic. View the project here",
        tags: ["Lua", "Python", "FL Studio"]
    }
    ];

  return (
    <div className="w-screen min-h-screen flex flex-col items-center font-sans bg-amber-100">
    {/* Page header */}
    <div className="bg-gray-100 w-full flex flex-row justify-center items-center py-15 shadow-xl z-10 relative">
        <h1 className="text-4xl font-bold mb-0 text-gray-600">Technical Projects</h1>
    </div>

    <div className="bg-blue-300 w-full lg:w-[75%] h-auto flex flex-row">

        {/* Timeline */}
        <div className="bg-white h-auto w-[10%] flex-[1]">

        </div>

        {/* Projects */}
        <div className="bg-blue-300 h-auto w-[90%] flex-[8]">
            {projects.map((project, index) => (
                <div key={index} className="bg-amber-200 w-full aspect-[16/9] flex flex-col items-center outline-1 overflow-hidden">
                    <h2 className="text-white text-[20px] sm:text-4xl flex-1 sm:py-2 font-bold">{project.title}</h2>

                    <div className="w-[65%] flex flex-col flex-9 overflow-hidden">
                        {/* Image */}
                        <div className="bg-white flex-[11] flex items-center justify-center">

                        </div>

                        {/* Tags */}
                        <div className="flex-[1] h-full flex -space-x-2 sm:-space-x-4">
                            {project.tags.map((name, index) => (
                                <div key={index} style={{ backgroundColor: colors[name] }} className="h-full w-[17%] rounded-2xl flex justify-center items-center scale-75 hover:scale-85 transition-transform">
                                    <p className="text-[10px] sm:text-[15px] lg:text-[17px]">{name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <h2 className="text-white text-[10px] sm:text-xl flex-[2.5] pt-1">{project.description}</h2>
                </div>
            ))}

        </div>



    </div>

    </div>

  );
}
