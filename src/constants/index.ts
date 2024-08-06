import { NavItem } from "@/type";

export type Map = {
  id: string;
  name: string;
};

export interface Item {
  isUpToUp: boolean;
  id: number;
  type: number;
  gender: number;
  level: number;
  strRequire: number;
  iconID: number;
  part: number;
  name: string;
  description: string;
}

export const navItems: NavItem[] = [
  {
    title: "Data NRO",
    label: "Data NRO",
    href: "/",
    icon: "data",
    sub: [
      {
        title: "Item",
        label: "",
        href: "/nro-data/item",
        icon: "pickaxe",
      },
      {
        title: "Map",
        label: "",
        href: "/nro-data/map",
        icon: "mountain",
      },
      {
        title: "Skill",
        label: "",
        href: "/nro-data/skill",
        icon: "swords",
      },
      {
        title: "NPC",
        label: "",
        href: "/nro-data/npc",
        icon: "npc",
      },
      {
        title: "Mob / Quái",
        label: "",
        href: "/nro-data/mob",
        icon: "mob",
      },
    ],
  },
  {
    title: "Công Cụ",
    href: "/control",
    icon: "control",
    label: "Công CỤ",
    sub: [
      {
        title: "Example 1",
        label: "",
        href: "/",
        icon: "control",
      },
      {
        title: "Example 2)",
        label: "",
        href: "/",
        icon: "control",
      },
    ],
  },
  {
    title: "Thông Tin",
    href: "/infor",
    icon: "info",
    label: "Công CỤ",
  },
  {
    title: "Shopwibu.Net",
    href: "https://shopwibu.net",
    icon: "store",
    label: "Công CỤ",
  },
];

export const API = "https://electroheavenvn.github.io/DataNRO/";
