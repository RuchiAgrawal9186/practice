import { IconChartCohort, IconPlugConnectedX, IconShield, IconUserHexagon, IconUsers } from "@tabler/icons-react";
import type { SidebarItem } from "../assets/types/sidebar";

export const sidebarMenu: SidebarItem[] = [
  {
    id: 1,
    title: "Segments",
    path: "/",
    icon: IconUserHexagon,
  },
  {
    id: 2,
    title: "Connectors",
    path: "/connectors",
    icon: IconPlugConnectedX,
  },
  {
    id: 3,
    title: "Data Catalog",
    path: "/data-catalog",
    icon: IconChartCohort,
  },
  {
    id: 4,
    title: "Customers",
    path: "/customers",
    icon: IconUsers,
  },
  {
    id: 5,
    title: "Governance",
    path: "/governance",
    icon: IconShield,
  },
];
