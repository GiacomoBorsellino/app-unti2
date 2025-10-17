import { useEffect, useState } from "react";

import Docs from "./docs";
import Selectors from "./Selectors";
import TableData from "./table";
import { getDocuments } from "./documentService";

import "./List.css";
import { Input } from "@/components/ui/input";
import documents from "@/data/projects/documents";

function List() {
  const [docs, setDocuments] = useState([]);

  // ogni volta che la prop "category" cambia → aggiorno lo stato interno
  useEffect(() => {
    async function fetchData() {}
    fetchData()
      .then(async () => {
        let docs = await getDocuments();
        setDocuments(docs);
        console.log("documents ", docs);
      })
      .catch((error: any) => {
        let docume: any = documents;
        setDocuments(docume);
      });
  }, []);

  const [data, setData] = useState("");

  function setCategory(category: string): void {
    setData(category);
  }

  const [title, setTitle] = useState("");

  function searchTitle(titleFiltered: string): void {
    setTitle(titleFiltered);
  }

  const [visu, setVis] = useState(Boolean);

  function setVisualization(visu: boolean): void {
    setVis(visu);
  }

  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-start w-full">
        <section className="flex flex-row gap-2 justify-start items-center">
          <Input
            className="w-[200px]"
            type="text"
            placeholder="Search"
            value={title}
            onChange={(e: any) => searchTitle(e.target.value)}
          />
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
              <TableData
                documents={docs}
                category={data}
                titleFiltered={title}
              ></TableData>
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
              <Docs
                documents={docs}
                category={data}
                titleFiltered={title}
              ></Docs>
            </section>
          )}
        </section>
      </div>
    </>
  );
}

export default List;
