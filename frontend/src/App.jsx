import { useState } from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Body from "./components/Body";
import Mail from "./components/Mail";

const appRouter = createBrowserRouter([
  {
    path:"/",
    elements:<Body/>,
    children:[
      {
        path:"/",
        element:<Inbox/>
      },
      {
        path:"/mail/:id",
        element:<Mail/>
      }
    ]
  }
])

function App() {


  return (
    <div className="h-screen bg-[#F6F8FC]">
      <Navbar />
      <RouterProvider router={appRouter}/>
      
    </div>
  );
}

export default App;
