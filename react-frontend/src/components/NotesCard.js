import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setReduxTrigger,setLink } from "../utils/triggerSlice";

const EditButton=({linkId})=>{
    return (
        <Link to={"/link/"+linkId} className="bg-[#2F353D] w-10 h-5 rounded-3xl ml-auto mr-5 pb-2 flex flex-row  justify-center items-center hover:cursor-pointer hover:bg-[#3C434E] "><button><h1>...</h1></button></Link>
    );
}

const NotesCard=({link,linkId })=>{    
    const dispatch=useDispatch();

    const [showButton,setShowButton]=useState(false);

    return (

        <div id="NotesCard" onMouseOver={()=>setShowButton(true)}
         onMouseLeave={()=>setShowButton(false)} onDoubleClick={()=>{navigator.clipboard.writeText(link).then(() => {
            // invoked if the data is copied
            dispatch(setLink("Copied."));     
            dispatch(setReduxTrigger(true));        //to trigger popup of something went wrong 
            },
            () => {
            // handle data copy error
            alert("Copying failed")
            }
           )}}
          className="bg-[#2F353D] h-[2.9rem] mt-2 mx-1 p-2 rounded-md hover:bg-[#4C525F] hover:text-white hover:cursor-pointer flex flex-row items-center">            
        <span className="text-sm font-normal tracking-wide">{(link?.length>50)?(link.slice(0,50)+"..."):(link)}</span>
        {(showButton?(<EditButton linkId={linkId}/>):(""))}
        </div>
    );
}
export default NotesCard;






