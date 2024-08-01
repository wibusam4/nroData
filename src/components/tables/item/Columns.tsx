"use client";
import { Item } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: "ID Item",
  },
  {
    accessorKey: "iconID",
    header: "iconID",
  },
  {
    accessorKey: "name",
    header: "Tên Vật Phẩm",
  },
  {
    accessorKey: "gender",
    header: "Hành Tinh",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "strRequire",
    header: "Sức Mạnh Yêu Cầu",
  },
  {
    accessorKey: "level",
    header: "Level",
  },
  {
    accessorKey: "part",
    header: "Part",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
];
