import "./App.css";
import Footer from "./common/footer";
import Header from "./common/header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center gap-5">
        <header className="header">
          <Header></Header>
        </header>

        <main className="main">
          <Outlet />
        </main>

        <footer className="footer">
          <Footer></Footer>
        </footer>
      </div>
    </>
  );
}

export default App;
