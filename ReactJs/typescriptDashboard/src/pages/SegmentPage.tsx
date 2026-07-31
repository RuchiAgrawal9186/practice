import { useState } from "react";

// import SegmentHeader from "../components/Segments/SegmentHeader";
import SegmentCardSection from "../components/Segments/SegmentCardSection";
import { segmentTitleData } from "../constants/SegmentsData";
import SegmentTabs from "../components/Segments/SegmentTabs";
import SearchBar from "../components/SearchBar";
import SortDropDown from "../components/SortDropDown";
import ViewSwitcher from "../components/ViewSwitcher";
import type { ActiveTab, ViewType } from "../assets/types/segment";
import CreateButton from "../components/CreateButton";

const SegmentPage = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");
  const [view, setView] = useState<ViewType>("grid");
  return (
    <div className="">
      <h6 className="text-[10px] text-gray-500">SEGMENTS</h6>
      {/* <SegmentHeader /> */}
      {/* segment header */}
      <div className="flex flex-1 items-center justify-between">
        <div>
          <h3 className="font-bold text-2xl ">Audience Segments</h3>
          <p className="text-[13px] text-gray-400 font-semibold">
            Discover segments,view everything you built or have been shared with
            you.
          </p>
        </div>
        <CreateButton></CreateButton>
      </div>

      {/* segment toolbar */}
      {/* <div className="xl:flex md:flex lg:flex md:flex-1 lg:flex-1 items-center justify-between mt-5">
        <SegmentTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex items-center gap-2">
          <SearchBar />
          <SortDropDown />
          <ViewSwitcher view={view} setView={setView} />
        </div>
      </div> */}

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mt-5 ">
        {/* Segment Tabs - full width/scrolling on mobile, auto on tablet+ */}
        <div className="w-full md:w-auto lg:w-auto overflow-x-auto pb-2 md:pb-0">
          <SegmentTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Control Actions */}
        <div className="flex flex-col  lg:flex-row  gap-2 w-full md:w-auto justify-between ">
          <div className="flex-1  w-full ">
            <SearchBar />
          </div>
          <div className="flex items-center gap-2 w-full">
            <SortDropDown />
            <ViewSwitcher view={view} setView={setView} />
          </div>
        </div>
      </div>

      {segmentTitleData?.map((el) => {
        return (
          <SegmentCardSection
            key={el.id}
            icon={el.icon}
            title={el.title}
            data={el?.data || []}
          ></SegmentCardSection>
        );
      })}
    </div>
  );
};

export default SegmentPage;
