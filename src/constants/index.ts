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
    title: "Data NRO TeaMobi",
    label: "Data NRO TeaMobi",
    href: "/",
    icon: "data",
    sub: [
      {
        title: "Item",
        label: "",
        href: "/tea-data/item",
        icon: "pickaxe",
      },
      {
        title: "Map",
        label: "",
        href: "/tea-data/map",
        icon: "mountain",
      },
      {
        title: "Skill",
        label: "",
        href: "/tea-data/skill",
        icon: "swords",
      },
      {
        title: "NPC",
        label: "",
        href: "/tea-data/npc",
        icon: "npc",
      },
      {
        title: "Mob / Quái",
        label: "",
        href: "/tea-data/mob",
        icon: "mob",
      },
    ],
  },
  {
    title: "Data NRO HSNR",
    label: "Data NRO HSNR",
    href: "/",
    icon: "data",
    sub: [
      {
        title: "Item",
        label: "",
        href: "/",
        icon: "pickaxe",
      },
      {
        title: "Map",
        label: "",
        href: "/",
        icon: "mountain",
      },
      {
        title: "Skill",
        label: "",
        href: "/",
        icon: "swords",
      },
      {
        title: "NPC",
        label: "",
        href: "/",
        icon: "npc",
      },
      {
        title: "Mob / Quái",
        label: "",
        href: "/",
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

export const API = "https://electroheavenvn.github.io/DataNRO/TeaMobi/";
