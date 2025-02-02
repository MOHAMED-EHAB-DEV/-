import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const DatasheetBtn = ({ className = "", link, children }) => {
  return (
    <Button
      className={cn(
        "bg-teal border-2 border-teal text-white hover:text-gray-800 w-fit",
        className
      )}
      variant="outline"
      onClick={() =>
        redirect(
          link,
          "push"
        )
      }
    >
      {children}
    </Button>
  );
};

export default DatasheetBtn;
