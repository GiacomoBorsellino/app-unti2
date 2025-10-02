import "./App.css";
import Footer from "./common/footer";
import Header from "./common/header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center gap-5">
        <header
          style={{
            height: "5vh",
          }}
        >
          <Header></Header>
        </header>

        <main
          style={{
            height: "85vh",
            width: "95vw",
            margin: "auto",
          }}
        >
          <Outlet />
        </main>

        <footer
          className="text-center"
          style={{
            height: "5vh",
          }}
        >
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}

export default App;
