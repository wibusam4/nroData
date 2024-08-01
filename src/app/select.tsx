"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SelectType() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const handleSelectChange = (value: any) => {
    console.log(value);
    router.push(
      `${pathname}?${createQueryString({
        type: value,
      })}`,
      {
        scroll: false,
      }
    );
  };

  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );
  return (
    <div>
      <div className="flex items-center space-x-2">
        <p>Chọn Thể Loại</p>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Vật Phẩm" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="item">Vật Phẩm</SelectItem>
              <SelectItem value="skill">Kĩ Năng</SelectItem>
              <SelectItem value="map">Map</SelectItem>
              <SelectItem value="npc">NPC</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
