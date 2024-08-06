"use client";
import { Map } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Map>[] = [
  {
    accessorKey: "id",
    header: "ID Skill",
  },
  {
    accessorKey: "name",
    header: "Skill",
  },
  {
    accessorKey: "iconId",
    header: "IconID",
  },
  {
    accessorKey: "maxPoint",
    header: "maxPoint",
  },
  {
    accessorKey: "manaUseType",
    header: "manaUseType",
  },
  {
    accessorKey: "type",
    header: "type",
  },
  {
    accessorKey: "damInfo",
    header: "damInfo",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
