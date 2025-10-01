import "./App.css";
import {
  Menubar,
  //   MenubarCheckboxItem,
  // MenubarContent,
  // MenubarItem,
  MenubarMenu,
  //   MenubarRadioGroup,
  //   MenubarRadioItem,
  //   MenubarSeparator,
  //   MenubarShortcut,
  //   MenubarSub,
  //   MenubarSubContent,
  //   MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";

import lohacker from "./assets/lohacker.svg";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

function Menu() {
  return (
    <>
      <Menubar className="flex flex-row justify-between bg-[#ffdb33] h-1/12 p-2">
        <section className="flex flex-row justify-start gap-2">
          <MenubarMenu>
            <Link to={"/list"}>
              <Button className="text-[#1f1f1f] bg-[#ffab33]">
                <MenubarTrigger>Courses</MenubarTrigger>
              </Button>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <Link to={"/about-me"}>
              <Button className="text-[#1f1f1f] bg-[#ffab33]">
                <MenubarTrigger>About me</MenubarTrigger>
              </Button>
            </Link>
          </MenubarMenu>

          <MenubarMenu>
            <Link to={"/about"}>
              <Button className="text-[#1f1f1f] bg-[#ffab33]">
                <MenubarTrigger>What I'm?</MenubarTrigger>
              </Button>
            </Link>
          </MenubarMenu>
        </section>

        <section>
          <Link to={"/"}>
            <img
              src={lohacker}
              className="h-10 w-10 object-contain"
              alt="lohacker"
            />
          </Link>
        </section>
      </Menubar>
    </>
  );
}

export default Menu;
