import { useState,useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { setReduxTrigger ,setLink} from "../utils/triggerSlice";
import Popup from "./Popup";
import { crossUrl,url } from "../constants";



const AddItems=()=>{
    const [searchTxt,SetSearchTxt]=useState("");
    

    //to trigger popup 
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

    //my helper functions


      //function to get back to home page
    const clickB=useRef(null);   
     function pkj(){
        clickB.current.click();   //clicking on cancel button to return back to home-page
     }

    function got_to_home(){       
       const root= document.getElementById("AddItem_cancel");
       root.addEventListener("click",pkj());
    }
    //////////////////////////////////////////////////

      //  function to post data to the server 
    function postData(dataa){        
    
        const data = { "link": dataa };
     
         fetch(url+"/links/", {
          method: 'POST', // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':'*',
            "x-auth-token":localStorage.getItem("synclink_x-auth-token"),
          },
          body: JSON.stringify(data),
          })
          .then((response) => {      
            if(response.status === 200){
            return response.json();     
            }
            else{     
            dispatch(setLink("An error has occurred."));     
            dispatch(setReduxTrigger(true));        //to trigger popup of something went wrong 
            return 0;
           }
          })
          .then((data) => {
            if(data!==0){
            got_to_home();
            dispatch(setLink("Link"));  
            dispatch(setReduxTrigger(true));
            }
          });
        }
    //////////////////////////////////////////////////
        

   
    return (
        <>

        {/* my header component  */}
        <>
        <div className="bg-[#2F353D] h-[2.65rem] flex justify-between">
        <Link ref={clickB} to="/home"  className="text-sm mx-4 pt-3 px-2 font-extralight	 text-[#FCFCFC] hover:bg-[#4C525F] hover:rounded-md hover:text-white hover:cursor-pointer"><span>Cancel</span></Link>
        <span className="text-sm mx-4 pt-3 px-2 font-extralight	 text-[#FCFCFC] hover:cursor-pointer">Add item</span>
        <span onClick={(e)=>{
                postData(searchTxt);
            }} id="AddItem_cancel" className="text-sm mx-4 pt-3 px-2 font-extralight text-[#FCFCFC] hover:bg-[#4C525F] hover:cursor-pointer hover:rounded-md hover:text-white">Save</span>
        </div>
    
        </>
        <>
         


         {/* my textarea  */}
         <div className="flex justify-center">
            
            <textarea rows="6" value={searchTxt} onChange={(e)=>SetSearchTxt(e.target.value)} className="bg-[#2F353D] mt-7 p-2 w-[97%] rounded-md hover:bg-[#4C525F] text-sm font-light text-white focus:outline-none focus:bg-[#4C525F]"/>
         </div>
         </>
         


           {/* my popup */}
        <div className="fixed inset-x-0 bottom-2 flex justify-center">
            <Popup trigger={trigger} link={"An error has occurred."} color={"bg-[#FF8D85]"} imgUrl={crossUrl}/>
        </div>

        </>
    );
}

export default AddItems;



