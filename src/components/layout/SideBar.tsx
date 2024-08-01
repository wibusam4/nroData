"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants";
import { ChevronLeft } from "lucide-react";
import { useSidebar } from "@/hooks/useSideBar";
import { Nav2 } from "./Nav2";
import Image from "next/image";

type SidebarProps = {
  className?: string;
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();

  const handleToggle = () => {
    toggle();
  };

  return (
    <aside
      className={cn(
        `relative hidden h-screen flex-none border-r bg-card transition-[width] duration-500 md:block`,
        !isMinimized ? "w-72" : "w-[72px]",
        className
      )}
    >
      <div className="hidden p-[9px] md:flex border-b min-h-[64px]  items-center">
        <Link href={"/"} className="flex justify-center w-full">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg> */}
          <Image
            priority
            src={"/logo.png"}
            alt="Logo"
            height={32}
            width={128}
          />
        </Link>
      </div>
      <ChevronLeft
        className={cn(
          "absolute -right-3 top-1/2 z-50  cursor-pointer rounded-full border bg-background text-3xl text-foreground",
          isMinimized && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            <Nav2 items={navItems} />
          </div>
        </div>
      </div>
    </aside>
  );
}
