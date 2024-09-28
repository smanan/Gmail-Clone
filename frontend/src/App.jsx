import { useState } from "react";
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";
import Body from "./components/Body";
import Mail from "./components/Mail";
import SendEmail from "./components/SendEmail";
import Login from "./components/Login";
import Signup from "./components/Signup";

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
  },
  {
    path:"/Login",
    element:<Login/>
  },
  {
    path:"/Signup",
    element:<Signup/>
  }
])

function App() {


  return (
    <div className="h-screen bg-[#F6F8FC]">
      <Navbar />
      <RouterProvider router={appRouter}/>
      <div className="absolute w-[30%] bottom-0 right-20 z-10">
        <SendEmail/>
      </div>
    </div>
  );
}

export default App;
