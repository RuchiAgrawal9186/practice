import { IconBrandSupabase, IconSearch } from "@tabler/icons-react";
import type { Segment, SegmentSection, SegmentTab } from "../assets/types/segment";

export const segmentTabsData: SegmentTab[] = [
  {
    id: 1,
    label: "All",
    value: "all",
    count: 10,
  },
  {
    id: 2,
    label: "My Segments",
    value: "my-segments",
    count: 1,
  },
  {
    id: 3,
    label: "Shared with Me",
    value: "shared",
    count: 1,
  },
  {
    id: 4,
    label: "Archived",
    value: "archived",
    count: 0,
  },
];
export const segments: Segment []= [
  {
    id: 1,
    status: "Draft",
    title: "Lorem ipsum dolor sit amet consectetur.",
    totalUsers: "100,000,000",
    userType: "Eligible Users",
    updatedAt: "5/13/26",
    createdAt: "5/13/26",
    collaborators: [
      {
        id:1,
        name: "V",
        bgColor: "#D9F7BE",
        textColor: "#389E0D",
      },
    ],
  },

  {
    id: 2,
    status: "Published",
    title: "Lorem ipsum dolor sit amet consectetur.",
    totalUsers: "100,000,000",
    userType: "Reachable",
    updatedAt: "5/13/26",
    createdAt: "5/13/26",
    collaborators: [
      {
        id:1,
        name: "S",
        bgColor: "#FDE2E4",
        textColor: "#AD1457",
      },
      {
        id:2,
        name: "A",
        bgColor: "#E3F2FD",
        textColor: "#1565C0",
      },
      {
        id:3,
        name: "+3",
        bgColor: "#F5F5F5",
        textColor: "#424242",
      },
    ],
  },
  {
    id: 3,
    status: "Draft",
    title: "Lorem ipsum dolor sit amet consectetur.",
    totalUsers: "100,000,000",
    userType: "Eligible Users",
    updatedAt: "5/13/26",
    createdAt: "5/13/26",
    collaborators: [
      {
        id:1,
        name: "V",
        bgColor: "#D9F7BE",
        textColor: "#389E0D",
      },
    ],
  },
  {
    id: 4,
    status: "Draft",
    title: "Lorem ipsum dolor sit amet consectetur.",
    totalUsers: "100,000,000",
    userType: "Eligible Users",
    updatedAt: "5/13/26",
    createdAt: "5/13/26",
    collaborators: [
      {
        id:1,
        name: "V",
        bgColor: "#D9F7BE",
        textColor: "#389E0D",
      },
    ],
  },
  {
    id: 5,
    status: "Published",
    title: "Lorem ipsum dolor sit amet consectetur.",
    totalUsers: "100,000,000",
    userType: "Reachable",
    updatedAt: "5/13/26",
    createdAt: "5/13/26",
    collaborators: [
      {
        id:1,
        name: "S",
        bgColor: "#FDE2E4",
        textColor: "#AD1457",
      },
      {
        id:2,
        name: "A",
        bgColor: "#E3F2FD",
        textColor: "#1565C0",
      },
      {
        id:3,
        name: "+3",
        bgColor: "#F5F5F5",
        textColor: "#424242",
      },
    ],
  },
  {
    id: 6,
    status: "Published",
    title: "Lorem ipsum dolor sit amet consectetur.",
    totalUsers: "100,000,000",
    userType: "Reachable",
    updatedAt: "5/13/26",
    createdAt: "5/13/26",
    collaborators: [
      {
        id:1,
        name: "S",
        bgColor: "#FDE2E4",
        textColor: "#AD1457",
      },
      {
        id:2,
        name: "A",
        bgColor: "#E3F2FD",
        textColor: "#1565C0",
      },
      {
        id:3,
        name: "+3",
        bgColor: "#F5F5F5",
        textColor: "#424242",
      },
    ],
  },
  {
    id: 7,
    status: "Draft",
    title: "Lorem ipsum dolor sit amet consectetur.",
    totalUsers: "100,000,000",
    userType: "Eligible Users",
    updatedAt: "5/13/26",
    createdAt: "5/13/26",
    collaborators: [
      {
        id:1,
        name: "V",
        bgColor: "#D9F7BE",
        textColor: "#389E0D",
      },
    ],
  },
];
export const segmentTitleData: SegmentSection[]= [
  {
    id: 1,
    icon: IconBrandSupabase,
    title: "Top Trending Segments",
    data: segments,
  },
  {
    id: 2,
    icon: IconSearch,
    title: "Browse All Segments",
    data: segments,
  },
];

