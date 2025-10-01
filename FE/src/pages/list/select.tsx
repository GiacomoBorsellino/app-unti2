import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { useState } from "react";

export default function SelectCategory({ setCategory }: any) {
  const [value, setData] = useState("");

  function handleChange(category: string) {
    console.log("son ", category);
    setData(category);
    setCategory(category);
  }

  return (
    <Select
      value={value}
      onValueChange={(value) => {
        handleChange(value);
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="front-end">Front-End</SelectItem>
          <SelectItem value="back-end">Back-End</SelectItem>
          <SelectItem value="database">Database</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
