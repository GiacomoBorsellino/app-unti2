import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  // TableCaption,
  // TableFooter,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { docInterface } from "@/data/projects/documentsInterface";

import { useEffect, useState } from "react";
import { downloadDocument } from "./documentService";

export default function TableData({ documents, category, titleFiltered }: any) {
  const [selectedCategory, setSelectedCategory] = useState(category);

  const [selectedTitle, setSelectedTitle] = useState(titleFiltered);

  // ogni volta che la prop "category" cambia → aggiorno lo stato interno
  useEffect(() => {
    setSelectedCategory(category);
    setSelectedTitle(titleFiltered);
  }, [category, titleFiltered]);

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
    <Table className="rounded-md card">
      {/* <TableCaption className="text-foreground">
        A list of your recent invoices.
      </TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-left">Categories</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents
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
          .map((doc: docInterface) => (
            <TableRow key={doc.id}>
              <TableCell>
                <img
                  src={doc.pathImg}
                  className="h-10 w-10 object-contain border-2 rounded-full bg-white p-1 mx-auto"
                  alt={doc.name}
                />
              </TableCell>
              <TableCell className="text-left">{doc.name}</TableCell>
              <TableCell className="text-left">{doc.description}</TableCell>
              <TableCell className="text-left">
                {doc.categories.map((tag: string) => {
                  switch (tag) {
                    case "front-end":
                      return (
                        <Badge key={tag} className="bg-red-400 mx-1">
                          {tag}
                        </Badge>
                      );
                    case "back-end":
                      return (
                        <Badge key={tag} className="bg-lime-400 mx-1">
                          {tag}
                        </Badge>
                      );
                    case "database":
                      return (
                        <Badge key={tag} className="bg-yellow-400 mx-1">
                          {tag}
                        </Badge>
                      );
                    default:
                      return (
                        <Badge key={tag} className="bg-gray-400 mx-1">
                          {tag}
                        </Badge>
                      );
                  }
                })}
              </TableCell>
              <TableCell className="text-center">
                <a
                  className="border-border bg-secondary-background text-foreground shadow-shadow rounded-base font-base hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 text-center text-sm transition-all hover:shadow-none sm:text-base p-2 h-8 w-8"
                  // href={doc.pathFile}
                  // target="_blank"

                  onClick={() => {
                    download(doc.id, doc.name);
                  }}
                >
                  <span className="material-symbols">download</span>
                </a>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>aaa</TableCell>
          <TableCell className="text-right">---</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
