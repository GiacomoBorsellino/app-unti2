import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import documents from "@/data/projects/documents";
import type { docInterface } from "@/data/projects/documentsInterface";

import "./List.css";

interface DocsProps {
  category: string;
}

export default function Docs({ category }: DocsProps) {
  const [selectedCategory, setSelectedCategory] = useState(category);

  // ogni volta che la prop "category" cambia → aggiorno lo stato interno
  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pb-8 ">
        {documents
          .filter((docs: docInterface) => {
            return selectedCategory === "" || selectedCategory === "all"
              ? docs
              : docs.tag.includes(selectedCategory);
          })
          .map((document: docInterface) => {
            return (
              <div
                className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
                key={document.id}
              >
                <div className="bg-white border-border shadow-shadow rounded-base -bottom-[2px]! border-2 ">
                  <img
                    className="rounded-base w-4/5 mx-auto"
                    src={document.img}
                    alt={document.name}
                  />
                </div>

                <div className="text-main-foreground font-base mt-5">
                  <h2 className="font-heading text-xl sm:text-2xl">
                    {document.name}
                  </h2>

                  <p className="mt-2">{document.description}</p>

                  <div className="mt-8 gap-5">
                    <a
                      className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center text-sm transition-all hover:shadow-none sm:text-base"
                      href={document.docDownload}
                      target="_blank"
                    >
                      Download
                    </a>
                  </div>
                  <div className="flex flex-row align-middle justify-end gap-2 mt-8">
                    {document.tag.map((tag: string) => {
                      switch (tag) {
                        case "front-end":
                          return <Badge className="bg-red-400">{tag}</Badge>;
                        case "back-end":
                          return <Badge className="bg-lime-400">{tag}</Badge>;
                        case "database":
                          return <Badge className="bg-yellow-400">{tag}</Badge>;
                        default:
                          return <Badge className="bg-gray-400">{tag}</Badge>;
                      }
                    })}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
