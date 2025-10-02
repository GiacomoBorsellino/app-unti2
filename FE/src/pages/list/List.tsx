import { useState } from "react";

import Docs from "./docs";
import Selectors from "./Selectors";
import TableData from "./table";

import "./List.css";
import Buttons from "./buttons";

function List() {
  const [data, setData] = useState("");

  function setCategory(category: string): void {
    setData(category);
  }

  const [visu, setVis] = useState(Boolean);

  function setVisualization(visu: boolean): void {
    setVis(visu);
  }

  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-start w-full">
        <section>
          <Buttons></Buttons>
        </section>

        <section
          className="bg-main rounded-md border-2 border-black p-2 w-full"
          style={{
            backgroundSize: "40px 40px",
            backgroundColor: "#e3e3e3",
            backgroundImage:
              "radial-gradient(circle, #282a36 1px, rgba(0, 0, 0, 0) 1px)",
          }}
        >
          <Selectors
            setCategory={setCategory}
            setVisualization={setVisualization}
          ></Selectors>
          {visu ? (
            <section
              style={{
                backgroundSize: "40px 40px",
                backgroundColor: "#e3e3e3",
                backgroundImage:
                  "radial-gradient(circle, #282a36 1px, rgba(0, 0, 0, 0) 1px)",
                overflowY: "scroll",
                height: "70vh",
              }}
            >
              <TableData category={data}></TableData>
            </section>
          ) : (
            <section
              style={{
                backgroundSize: "40px 40px",
                backgroundColor: "#e3e3e3",
                backgroundImage:
                  "radial-gradient(circle, #282a36 1px, rgba(0, 0, 0, 0) 1px)",
                overflowY: "scroll",
                height: "70vh",
              }}
            >
              <Docs category={data}></Docs>
            </section>
          )}
        </section>
      </div>
    </>
  );
}

export default List;
