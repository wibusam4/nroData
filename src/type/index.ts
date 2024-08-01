import { Icons } from "@/components/icons";

export interface NavItem extends SubItem {
  sub?: SubItem[];
}

export interface SubItem {
  title: string;
  href: string;
  icon?: keyof typeof Icons;
  label?: string;
}

export interface Map {
  id: number;
  name: string;
}

export interface Mob {
  mobTemplateId: number;
  rangeMove: number;
  speed: number;
  type: number;
  dartType: number;
  hp: number;
  name: string;
}

export interface NPC {
  npcTemplateId: number;
  headId: number;
  bodyId: number;
  legId: number;
  name: string;
  menu: string[][];
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
