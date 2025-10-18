import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

import type { docInterface } from "@/data/projects/documentsInterface";

import "./List.css";

import { downloadDocument } from "./documentService";

export default function Docs({ documents, category, titleFiltered }: any) {
  const [selectedCategory, setSelectedCategory] = useState(category);

  const [selectedTitle, setSelectedTitle] = useState(titleFiltered);

  // ogni volta che la prop "category" cambia → aggiorno lo stato interno
  useEffect(() => {
    setSelectedCategory(category);
    setSelectedTitle(titleFiltered);
  }, [category, titleFiltered]);

  const compareFn = (firstItem: docInterface, secondItem: docInterface) =>
    firstItem.id - secondItem.id;

  async function download(id: number, fileName: string) {
    const os = await downloadDocument(Number(id));

    const base64Data = os.data;
    const format = os.format;

    // Creo il MIME type dinamicamente
    const mimeMap: Record<string, string> = {
      pdf: "application/pdf",
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
    };
    const mime = mimeMap[format.toLowerCase()] || "application/octet-stream";

    // Costruisco il data URL completo
    const dataUrl = `data:${mime};base64,${base64Data}`;

    // Converto in blob usando fetch
    const res = await fetch(dataUrl);
    const blob = await res.blob();

    // Creo link per il download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `${fileName}.${format}`;
    link.click();
    link.remove();
  }

  return (
    <div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pb-8 ">
        {documents
          .sort(compareFn)
          .filter((docs: docInterface) => {
            return selectedCategory === "" || selectedCategory === "all"
              ? docs
              : docs.categories.includes(selectedCategory);
          })
          .filter((docs: docInterface) => {
            return selectedTitle === "" || selectedTitle === null
              ? docs
              : docs.name.toLowerCase().includes(selectedTitle.toLowerCase());
          })
          .map((document: docInterface) => {
            return (
              <div
                className="border-border shadow-shadow rounded-base bg-main border-2 p-4 sm:p-5"
                key={document.id}
              >
                <div className="bg-white border-border shadow-shadow rounded-base bottom-[2px]! border-2 ">
                  <img
                    className="rounded-base w-4/5 mx-auto"
                    src={document.pathImg}
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
                      // href={document.pathFile}
                      // target="_blank"
                      onClick={() => {
                        download(document.id, document.name);
                      }}
                    >
                      Download
                    </a>
                  </div>
                  <div className="flex flex-row align-middle justify-end gap-2 mt-8">
                    {document.categories.map((tag: string, index: number) => {
                      switch (tag) {
                        case "front-end":
                          return (
                            <Badge
                              key={`${document.id}-${tag}-${index}`}
                              className="bg-red-400"
                            >
                              {tag}
                            </Badge>
                          );
                        case "back-end":
                          return (
                            <Badge
                              key={`${document.id}-${tag}-${index}`}
                              className="bg-lime-400"
                            >
                              {tag}
                            </Badge>
                          );
                        case "database":
                          return (
                            <Badge
                              key={`${document.id}-${tag}-${index}`}
                              className="bg-yellow-400"
                            >
                              {tag}
                            </Badge>
                          );
                        default:
                          return (
                            <Badge
                              key={`${document.id}-${tag}-${index}`}
                              className="bg-gray-400"
                            >
                              {tag}
                            </Badge>
                          );
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
