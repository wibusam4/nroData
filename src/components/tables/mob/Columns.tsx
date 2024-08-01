"use client";
import { Mob } from "@/type";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Mob>[] = [
  {
    accessorKey: "mobTemplateId",
    header: "ID Quái",
  },

  {
    accessorKey: "name",
    header: "Tên Quái",
  },
  {
    accessorKey: "hp",
    header: "Máu",
  },
  {
    accessorKey: "rangeMove",
    header: "RangeMove",
  },
  {
    accessorKey: "speed",
    header: "Speed",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "dartType",
    header: "dartType",
  },
];
