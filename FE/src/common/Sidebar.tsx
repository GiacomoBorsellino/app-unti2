import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

export default function Sidebar() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="cursor-pointer">
            <span className="material-symbols text-2xl font-bold">menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-[#ffdb33] border-l-2 border-black p-2">
          <SheetHeader className="mt-8">
            <SheetTitle>Hi! 🖖</SheetTitle>
            <SheetDescription>Make a journey inside me</SheetDescription>
          </SheetHeader>

          <ul className="flex flex-col justify-start gap-2">
            <Link to={"/list"}>
              <li className="text-xl font-semibold border-2 border-black rounded-md bg-white p-2 hover:bg-amber-400 cursor-pointer">
                - Notes
              </li>
            </Link>
            <Link to={"/wtf"}>
              <li className="text-xl font-semibold border-2 border-black rounded-md bg-white p-2 hover:bg-amber-400 cursor-pointer">
                - What I'm?
              </li>
            </Link>
            <Link to={"/about-me"}>
              <li className="text-xl font-semibold border-2 border-black rounded-md bg-white p-2 hover:bg-amber-400 cursor-pointer">
                - About me
              </li>
            </Link>
          </ul>

          <div className="flex flex-row justify-center items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/GiacomoBorsellino"
                    target="_blank"
                  >
                    <Button className="bg-green-400 w-10 h-10">
                      <span className="material-symbols text-2xl font-bold cursor-pointer">
                        web
                      </span>
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com/GiacomoBorsellino/app-unti2"
                    target="_blank"
                  >
                    <Button className="bg-blue-400 w-10 h-10">
                      <span className="material-symbols text-2xl font-bold cursor-pointer">
                        change_history
                      </span>
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://giacomoborsellino.netlify.app/"
                    target="_blank"
                  >
                    <Button className="bg-purple-400 w-10 h-10">
                      <span className="material-symbols text-2xl font-bold cursor-pointer">
                        person
                      </span>
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>My website</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button className="cursor-pointer" variant="neutral">
                Logout
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
