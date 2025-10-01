import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function SwitchVisualization({ setVisualization }: any) {
  const [isChecked, setIsChecked] = useState(Boolean);

  function handleChange(e: any) {
    // ✅ Updating a controlled input to e.target.value synchronously
    setIsChecked(!isChecked);
    setVisualization(!isChecked);
    // console.log("isChercked? ", isChecked);
  }

  return (
    <div className="flex items-center space-x-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Switch
              id="visualization"
              onCheckedChange={(e: any) => {
                handleChange(e);
              }}
            />
          </TooltipTrigger>
          <TooltipContent>
            <p>Visualization</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
