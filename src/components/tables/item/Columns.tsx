"use client";
import { Item } from "@/constants";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "id",
    header: "ID Item",
  },
  {
    accessorKey: "icon",
    header: "iconID",
    cell: (row) => (
      <Image
        src={`https://electroheavenvn.github.io/DataNRO/TeaMobi/Icons/${row.getValue()}.png`}
        width={20}
        height={20}
        alt="icon"
        loading="lazy"
        data-loaded="false"
        onLoad={(event) => {
          event.currentTarget.setAttribute("data-loaded", "true");
        }}
        className="data-[loaded=false]:animate-pulse data-[loaded=false]:bg-gray-900 data-[loaded=false]:rounded"
      />
    ),
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
