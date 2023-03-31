import NotesCard from "./NotesCard"
import { trashUrl } from "../constants"


export const MainShimmer=()=>{
  
    return (
        <div className="">
        {/* {Array(15).fill(<div className="animate-pulse"  key={new Date().getTime()}><NotesCard/></div>)} */}

        <div className="animate-pulse"  key={1}><NotesCard/></div>
        <div className="animate-pulse"  key={2}><NotesCard/></div>
        <div className="animate-pulse"  key={3}><NotesCard/></div>
        <div className="animate-pulse"  key={4}><NotesCard/></div>
        <div className="animate-pulse"  key={5}><NotesCard/></div>
        <div className="animate-pulse"  key={6}><NotesCard/></div>
        <div className="animate-pulse"  key={7}><NotesCard/></div>
        <div className="animate-pulse"  key={8}><NotesCard/></div>
        <div className="animate-pulse"  key={9}><NotesCard/></div>
        <div className="animate-pulse"  key={10}><NotesCard/></div>
        <div className="animate-pulse"  key={11}><NotesCard/></div>
        <div className="animate-pulse"  key={12}><NotesCard/></div>
        <div className="animate-pulse"  key={13}><NotesCard/></div>
        <div className="animate-pulse"  key={14}><NotesCard/></div>
        <div className="animate-pulse"  key={15}><NotesCard/></div>
        
          
        </div>
    )
}

export const InfoPageShimmer=()=>{
    return (
        <>
        {/* my body component */}
        <>
        <div className="flex justify-center">
            <textarea rows={6} disabled={true} className="bg-[#2F353D] animate-pulse mt-7 p-2 w-[97%] rounded-md hover:bg-[#4C525F] text-sm font-light text-white focus:outline-none focus:bg-[#4C525F] hover:cursor-text "/>
        </div>
        </>


      {/* my delete button */}
      <>
         <div className="bg-[#2F353D] animate-pulse text-[#FD8C85] w-[97%] h-[2.9rem] mt-[5%] p-2 rounded-md hover:bg-[#4C525F] hover:text-[#fa7c73] hover:cursor-pointer flex ml-auto mr-auto text-sm font-normal tracking-wide ">
            <img src={trashUrl}/><span className="pt-1.5 pl-2">Delete item</span>
         </div>
      </>

      </>  
    )
}

