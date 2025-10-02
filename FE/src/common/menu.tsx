import { Menubar } from "@/components/ui/menubar";

import lohacker from "../assets/lohacker.svg";
import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";

function Menu() {
  return (
    <>
      <Menubar className="flex flex-row justify-between bg-[#ffdb33] h-1/12 p-2">
        <section>
          <Link to={"/"}>
            <img
              src={lohacker}
              className="h-10 w-10 object-contain"
              alt="lohacker"
            />
          </Link>
        </section>
        <section>aNOinTEd</section>
      </Menubar>
    </>
  );
}

export default Menu;
