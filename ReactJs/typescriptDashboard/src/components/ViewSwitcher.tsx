import { IconLayoutGrid, IconList } from "@tabler/icons-react";
import type { ViewType } from "../assets/types/segment";
import type { Dispatch, SetStateAction } from "react";



type ViewSwitcherProps = {
  view: ViewType;
  setView: Dispatch<SetStateAction<ViewType>>;
};
const ViewSwitcher = ({ view, setView }:ViewSwitcherProps) => {
  return (
    <div className="flex overflow-hidden rounded-lg border border-gray-300 bg-white">
      <button
        onClick={() => setView("grid")}
        className={`flex h-10 w-10 items-center justify-center transition-colors cursor-pointer ${
          view === "grid"
            ? "bg-gray-600 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        <IconLayoutGrid size={18} />
      </button>

      <button
        onClick={() => setView("list")}
        className={`flex h-10 w-10 items-center justify-center transition-colors cursor-pointer ${
          view === "list"
            ? "bg-gray-600 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        <IconList size={18} />
      </button>
    </div>
  );
}

export default ViewSwitcher
