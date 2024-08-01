"use client";
import { Map } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Map>[] = [
  {
    accessorKey: "npcTemplateId",
    header: "ID NPC",
  },
  {
    accessorKey: "name",
    header: "Tên NPC",
  },
  {
    accessorKey: "headId",
    header: "headId",
  },
  {
    accessorKey: "bodyId",
    header: "bodyId",
  },
  {
    accessorKey: "legId",
    header: "legId",
  },
  {
    accessorKey: "menu",
    header: "Menu",
  },
];
