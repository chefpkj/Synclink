import { createSlice } from "@reduxjs/toolkit";



const triggerSlice=createSlice({
    name:"cart",
    initialState:{
        triggerButton:false,
        link:"Action approved."
    
    },
    reducers:{
       
        setReduxTrigger:(state,action)=>{
            state.triggerButton=action.payload;
        },
        setLink:(state,action)=>{
            state.link=action.payload;
        }
    }

})


export const {setReduxTrigger,setLink}=triggerSlice.actions;
export default triggerSlice.reducer;
