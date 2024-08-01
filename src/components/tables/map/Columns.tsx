"use client";
import { Map } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Map>[] = [
  {
    accessorKey: "id",
    header: "ID Map",
  },
  {
    accessorKey: "name",
    header: "Tên Map",
  },
];
