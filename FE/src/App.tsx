import "./App.css";
import Footer from "./common/footer";
import Menu from "./common/menu";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Menu></Menu>
      </nav>

      <main
        className="bg-main my-6 rounded-md border-2 border-black p-2"
        style={{
          backgroundSize: "40px 40px",
          backgroundColor: "#e3e3e3",
          backgroundImage:
            "radial-gradient(circle, #282a36 1px, rgba(0, 0, 0, 0) 1px)",
          height: "80vh",
          overflowY: "scroll",
        }}
      >
        <Outlet />
      </main>

      <footer className="bottom text-center">
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
