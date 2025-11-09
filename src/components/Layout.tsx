import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";
import PulloutMenu from "./PulloutMenu";
import Footer from "./Footer";

function Layout() {
  return (
    // <div id="header"className="flex flex-row min-h-screen min-w-[680px] max-w-[1000px] bg-[#181818ff]">
    <div className="flex flex-row max-w-[1440px]">
        <PulloutMenu></PulloutMenu>
        
        <main className="flex flex-col">
            <Outlet/>
            <Footer/>
        </main>
        <Menubar></Menubar>
    </div>
  );
}

export default Layout;