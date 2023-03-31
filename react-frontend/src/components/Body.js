import { useEffect, useState } from "react";
import NotesCard from "./NotesCard";
import { Link } from "react-router-dom";
import {MainShimmer} from "./Shimmer";
import Popup from "./Popup";
import { useSelector,useDispatch } from "react-redux";
import { setReduxTrigger } from "../utils/triggerSlice";
import { tickUrl, url } from "../constants";




function doFilter(searchTxt,allLinks){
    return allLinks.filter((link) =>
    link?.toLowerCase()?.includes(searchTxt?.toLowerCase()));
}

const Body=()=>{

// all state variables    
    const [searchTxt,SetSearchTxt]=useState("");
    const [allData,setAllData]=useState([]);
    const [filterData,setFilterData]=useState([]);
    const [isLoaded,setIsLoaded]=useState(false);


// my api call
    useEffect(() => {
        getLinks();
      }, []);
      async function getLinks() {
        const data = await fetch(
          url+"/links/",{
            method:'GET',
            headers:{
                "x-auth-token":localStorage.getItem("synclink_x-auth-token"),
            }
          }
        );
        
        const json = await data.json();
        
        setFilterData(json);
        setAllData(json);
        setIsLoaded(true);
      };
//////////////////////////////////////////////////



//all my helping functions (operates on local state variables)
    const trigger=useSelector(store=>store.cart.triggerButton);
    const dispatch=useDispatch();
    function toggle(){
        dispatch(setReduxTrigger(false));
    }
    if(trigger==true){
        setTimeout(() => {
            toggle();
        }, 1000);
    }
 //////////////////////////////////////////////////

    

// returning jsx to render in root  
    return (
        <>
        {/* my Header component */}
        <>
        <div className="bg-[#2F353D] h-[2.65rem] flex justify-between">
        <span className="text-xl mx-3 mt-2 font-extralight	 text-[#FCFCFC]"><a href="/">Synclink.</a></span>
        {/* my search component */}
        <>
        <input type="text" value={searchTxt} onChange={(e)=>{SetSearchTxt(e.target.value)}} onKeyDown={(e) => {
              if(e.key == "Enter"){
                setFilterData(doFilter(e.target.value,allData));
              }   
              }} placeholder="Search type" className="grow m-2 bg-[#3C434E] p-2 text-sm font-light text-white rounded-md focus:outline-none focus:bg-[#4C525F]" />
        </>      
        <Link to="/addItems" className="text-4xl mx-3 px-2 font-thin text-[#FCFCFC] hover:bg-[#4C525F] hover:cursor-pointer hover:rounded-md"><span>+</span></Link>
        </div>
        </>
        
        {/* my body component  */}
        <>
        {isLoaded?
        (< div className="text-white">{filterData?.map((rest) =>  <NotesCard key={filterData.indexOf(rest)} link={rest} linkId={filterData.indexOf(rest)}/>)}</div> ):
        (
            <MainShimmer/>
        )}
        </>

        {/* my popup */}
        <div className="fixed inset-x-0 bottom-2 flex justify-center">
            <Popup trigger={trigger} color={"bg-[#53E07D]"} imgUrl={tickUrl}/>
        </div>

        </>
    )
}
 
export default Body;

