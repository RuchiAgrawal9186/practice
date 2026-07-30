// import { segments } from "../../constants/SegmentsData";
import type { ComponentType } from "react";
import SegmentCard from "./SegmentCard";
import type { IconProps } from "@tabler/icons-react";
import type { Segment } from "../../assets/types/segment";

type SegmentCardSectionProps = {
  icon: ComponentType<IconProps>;
  title: string;
  data: Segment[];
};
const SegmentCardSection = ({ icon, title,data }:SegmentCardSectionProps) => {
  const Icon = icon
    return (
      <div className="mt-5">
        {/* Section Header */}
        <div className="mb-4 flex items-center gap-2">
          <Icon size={18} className="text-[#E20074]" />
          <h3 className="text-base font-semibold text-[#E20074]">{title}</h3>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4 mt-3">
          {data?.map((segment) => (
            <SegmentCard key={segment.id} segment={segment} />
          ))}
        </div>
      </div>
    );
}

export default SegmentCardSection
