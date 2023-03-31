import { useSelector } from "react-redux";

const Popup = ({trigger,color,imgUrl}) => {
  const link=useSelector(store=>store.cart.link);

  return (trigger)?(
    
    <div id="NotesCard" className="h-[3.7rem] w-[97%] mx-1 p-1 rounded-md">   
    <div className={color}>         
        <span className="text-sm font-normal tracking-wide">
            <div className="flex">
            <div className="mx-2"><img src={imgUrl}/></div>    
            <div className="m-3 mx-1 mt-4 font-normal	">{link}</div>
            </div>
            
        </span>
    </div>
    </div>
  ):(""); 
}

export default Popup;




// #53E07D  green 
