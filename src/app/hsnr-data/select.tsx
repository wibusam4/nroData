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
    router.push(
      `${pathname}?${createQueryString({
        server: value,
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
        <p>Chọn Server</p>
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Server 1" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Server1">Server 1</SelectItem>
              <SelectItem value="Server2">Server 2</SelectItem>
              <SelectItem value="Server3">Server 3</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
