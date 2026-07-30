

import type { Dispatch, SetStateAction } from "react";
import type { ActiveTab } from "../../assets/types/segment";
import { segmentTabsData } from "../../constants/SegmentsData";

type SegmentTabsProps = {
  activeTab: ActiveTab;
  setActiveTab: Dispatch<SetStateAction<ActiveTab>>;
};

const SegmentTabs = ({ activeTab, setActiveTab }: SegmentTabsProps) => {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white shadow-2xl p-1 ">
      {segmentTabsData?.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.value)}
          className={`flex items-center rounded-md px-4 py-1 text-sm font-medium transition-all cursor-pointer duration-200 ${
            activeTab === tab.value
              ? "bg-gray-600 text-white shadow-sm"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          <span>{tab?.label}</span>

          <span
            className={`ml-2 inline-flex h-6 min-w-6 items-center justify-center rounded-md px-2 text-xs font-medium ${
              activeTab === tab.value
                ? "bg-white text-gray-700"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab?.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default SegmentTabs
