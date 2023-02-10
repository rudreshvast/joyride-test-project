import { JoyrideComponent } from "./JoyrideComponent"
export default function Main(){
    return(
        <div className="flex items-center justify-center h-screen w-screen bg-gray-400">
        <div
          id="box"
          className="flex items-center justify-center w-96 h-96 bg-red-100 rounded-md"
        >
          <button
            id="button"
            className="Capitalize px-8 py-4 bg-green-200 rounded-md"
          >
            {" "}
            button{" "}
          </button>
        </div>
        <JoyrideComponent />
      </div>
    )
}