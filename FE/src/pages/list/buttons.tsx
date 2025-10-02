import { Menubar, MenubarMenu } from "@/components/ui/menubar";

import { Link } from "react-router-dom";

import "./List.css";
import { Button } from "@/components/ui/button";

function Buttons() {
  return (
    <>
      <section className="flex flex-row justify-start gap-2">
        <Menubar className="flex flex-row justify-between bg-transparent border-none p-0 m-0">
          <MenubarMenu>
            <Button className="text-[#1f1f1f] text-semibold bg-[#ffab33] cursor-pointer hover:bg-violet-600">
              All
            </Button>
          </MenubarMenu>

          <MenubarMenu>
            <Button className="text-[#1f1f1f] text-semibold bg-[#ffab33] cursor-pointer hover:bg-violet-600">
              Front-End
            </Button>
          </MenubarMenu>

          <MenubarMenu>
            <Button className="text-[#1f1f1f] text-semibold bg-[#ffab33] cursor-pointer hover:bg-violet-600">
              Back-End
            </Button>
          </MenubarMenu>

          <MenubarMenu>
            <Button className="text-[#1f1f1f] text-semibold bg-[#ffab33] cursor-pointer hover:bg-violet-600">
              Database
            </Button>
          </MenubarMenu>
        </Menubar>
      </section>
    </>
  );
}

export default Buttons;
