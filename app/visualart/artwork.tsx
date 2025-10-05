
export default function Artwork() {

    return (
        <div className="bg-white aspect-square hover:rotate-3 transition drop-shadow-2xl flex justify-center items-center">
            <button onClick={() => {console.log("test")}} className="bg-yellow-200 w-[93%] h-[93%]">

            </button>

            <div className="bg-white absolute w-1/2 h-1/2">

            </div>
        </div>
    )
}