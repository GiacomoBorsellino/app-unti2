import { Button } from "@/components/ui/button";
import lohacker from "../assets/lohacker.svg";
import { Link } from "react-router-dom";
import Sidebar from "@/Sidebar";

function Header() {
  return (
    <>
      <header className="flex flex-row justify-between items-center bg-[#ffdb33] border-b-2 border-black p-2">
        <section className="flex flex-row justify-start gap-2 items-center">
          <Link to={"/"}>
            <img
              src={lohacker}
              className="h-10 w-10 object-contain"
              alt="lohacker"
            />
          </Link>
          <h1 className="text-2xl font-bold"> | aNOinTEd</h1>
        </section>

        <section>
          <Sidebar></Sidebar>
        </section>
      </header>
    </>
  );
}

export default Header;
