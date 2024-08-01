"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useSidebar } from "@/hooks/useSideBar";
import { NavItem } from "@/type";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown, ChevronDownIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";

interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function Nav({
  items,
  setOpen,
  isMobileNav = false,
}: DashboardNavProps) {
  const path = usePathname();
  const { isMinimized } = useSidebar();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>
        {items.map((item, index) => {
          const Icon = Icons[item.icon || "arrowRight"];
          return (
            item.href && (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  {/* <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                      path === item.href ? "bg-accent" : "transparent"
                    )}
                    onClick={() => {
                      if (setOpen) setOpen(false);
                    }}
                  >
                    <Icon className={`ml-3 size-5 flex-none`} />

                    {isMobileNav || (!isMinimized && !isMobileNav) ? (
                      <span className="mr-2 truncate">{item.title}</span>
                    ) : (
                      ""
                    )}
                  </Link> */}
                  {item.sub && (
                    <Collapsible>
                      <CollapsibleTrigger
                        className={cn(
                          "flex w-full items-center gap-2 overflow-hidden rounded-md py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                          path === item.href ? "bg-accent" : "transparent"
                        )}
                      >
                        <Icon className={`ml-3 size-5 flex-none`} />
                        {isMobileNav || (!isMinimized && !isMobileNav) ? (
                          <>
                            {item.title}
                            <span
                              className={cn(
                                'ml-auto transition-all group-data-[state="open"]:-rotate-180'
                              )}
                            >
                              <ChevronDownIcon />
                            </span>
                          </>
                        ) : (
                          ""
                        )}
                      </CollapsibleTrigger>
                      <CollapsibleContent
                        className={`${
                          isMinimized ? "hidden" : ""
                        } collapsibleDropdown`}
                        asChild
                      >
                        <ul>
                          {item.sub.map((sublink) => (
                            <li key={sublink.title} className="my-1 ml-8">
                              <Link
                                href={sublink.href}
                                className={cn(
                                  buttonVariants({
                                    variant: "ghost",
                                    size: "sm",
                                  }),
                                  "h-12 w-full justify-start text-wrap rounded-none px-2 border-l border-slate-900"
                                )}
                              >
                                <Icon className={`size-5 flex-none`} />
                                <div className="ml-2 rounded-lg px-1">
                                  {sublink.title}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </CollapsibleContent>
                    </Collapsible>
                  )}
                </TooltipTrigger>
                <TooltipContent
                  align="center"
                  side="right"
                  sideOffset={8}
                  className={!isMinimized ? "hidden" : "inline-block"}
                >
                  {item.title}
                </TooltipContent>
              </Tooltip>
            )
          );
        })}
      </TooltipProvider>
    </nav>
  );
}
