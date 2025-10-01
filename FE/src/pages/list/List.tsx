import { useState } from "react";

import Docs from "./docs";
import Selectors from "./Selectors";
import TableData from "./table";

import "./List.css";

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
      <Selectors
        setCategory={setCategory}
        setVisualization={setVisualization}
      ></Selectors>
      {visu ? (
        <TableData category={data}></TableData>
      ) : (
        <Docs category={data}></Docs>
      )}
    </>
  );
}

export default List;
