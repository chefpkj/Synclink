import React from "react";
import ReactDom from "react-dom/client";
import { createBrowserRouter,Outlet,RouterProvider} from "react-router-dom";
import Body from "./components/Body";
import AddItems from "./components/AddItem";
import { Provider } from "react-redux";
import store from "./utils/store";
import UpdateItem from "./components/UpdateItem";
import Login from "./components/Login";



const Applayout=()=>{
    return (
        <Provider store={store}>
          <Outlet/>
        </Provider>  
    )
}

const appRouter=createBrowserRouter([
   
   { path:"/",
   element:<Applayout/>,
   children:[
      {
         path:"/",
         element:<Login/>
      },
     {
        path:"/home",
        element:<Body/>
     },
     {
        path:"/addItems",
        element:<AddItems/>
     },
     {
      path:"/link/:id",
      element:<UpdateItem/>
   }
    ]
   
}
]);



const root=ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
