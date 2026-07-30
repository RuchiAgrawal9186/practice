import type { ComponentType } from "react";
import type { IconProps } from "@tabler/icons-react";

export type Collaborator = {
  id: number;
  name: string;
  bgColor: string;
  textColor: string;
};

export type ViewType = "grid" | "list";

export type ActiveTab = "all" | "my-segments" | "shared" | "archived";

export type Segment = {
  id: number;
  status: "Draft" | "Published";
  title: string;
  totalUsers: string;
  userType: string;
  updatedAt: string;
  createdAt: string;
  collaborators: Collaborator[];
};

export type SegmentTab = {
  id: number;
  label: string;
  value: ActiveTab;
  count: number;
};

export type SegmentSection = {
  id: number;
  title: string;
  icon: ComponentType<IconProps>;
  data: Segment[];
};
