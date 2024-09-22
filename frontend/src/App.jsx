import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Inbox from "./components/Inbox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-[#F6F8FC]">
      <Navbar />

      <div className="flex">
        <Sidebar />
        <Inbox />
      </div>
    </div>
  );
}

export default App;
