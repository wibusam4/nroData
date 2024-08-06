"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Dispatch, SetStateAction } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useSidebar } from "@/hooks/useSideBar";
import { NavItem, SubItem } from "@/type";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { ChevronDown } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import useCheckActiveNav from "@/hooks/useCheckActive";
interface DashboardNavProps {
  items: NavItem[];
  setOpen?: Dispatch<SetStateAction<boolean>>;
  isMobileNav?: boolean;
}

export function Nav2({
  items,
  setOpen,
  isMobileNav = false,
}: DashboardNavProps) {
  const { isMinimized } = useSidebar();
  if (!items?.length) {
    return null;
  }

  const renderLink = ({ sub, ...rest }: NavItem) => {
    const key = `${rest.title}-${rest.href}`;
    if (isMinimized && sub)
      return <NavLinkIconDropdown {...rest} sub={sub} key={key} />;

    if (isMinimized) return <NavLinkIcon {...rest} key={key} />;

    if (sub) return <NavLinkDropdown {...rest} sub={sub} key={key} />;

    return <NavLinkMain {...rest} key={key} />;
  };

  return (
    <nav className="grid items-start gap-2">
      <TooltipProvider>{items.map(renderLink)}</TooltipProvider>
    </nav>
  );
}

function NavLink({ title, icon, label, href }: SubItem) {
  const Icon = Icons[icon || "arrowRight"];
  const { checkActiveNav } = useCheckActiveNav();
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: checkActiveNav(href) ? "secondary" : "ghost",
          size: "sm",
        }),
        "h-12 w-full justify-start text-wrap rounded-none px-2 border-l border-slate-900"
      )}
    >
      <Icon className={`size-5 flex-none`} />
      <div className="ml-2 rounded-lg px-1">{title}</div>
    </Link>
  );
}

function NavLinkMain({ title, icon, label, href }: SubItem) {
  const Icon = Icons[icon || "arrowRight"];
  const { checkActiveNav } = useCheckActiveNav();
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({
          variant: checkActiveNav(href) ? "secondary" : "ghost",
          size: "sm",
        }),
        `h-12 w-full justify-start text-wrap rounded-none px-2`
      )}
    >
      <Icon className={`size-5 flex-none`} />
      <div className="ml-2 rounded-lg px-1 text-[16px]">{title}</div>
    </Link>
  );
}

function NavLinkDropdown({ title, icon, label, sub }: NavItem) {
  const Icon = Icons[icon || "arrowRight"];
  return (
    <Collapsible>
      <CollapsibleTrigger
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "group h-12 w-full justify-start rounded-none px-2"
        )}
      >
        <Icon className={`size-5 flex-none`} />
        <div className="ml-2 px-1 text-[16px]">{title}</div>
        <span
          className={cn(
            'ml-auto transition-all group-data-[state="open"]:-rotate-180'
          )}
        >
          <ChevronDown />
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="collapsibleDropdown" asChild>
        <ul>
          {sub?.map((sublink: any) => (
            <li key={sublink.title} className="my-1 ml-8">
              <NavLink {...sublink} subLink />
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
}

function NavLinkIcon({ title, icon, label, href }: NavItem) {
  const Icon = Icons[icon || "arrowRight"];
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            buttonVariants({
              size: "icon",
              variant: "ghost",
            }),
            "h-12 w-12"
          )}
        >
          <Icon />
          <span className="sr-only">{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {title}
      </TooltipContent>
    </Tooltip>
  );
}

function DropdownItem({ title, icon, label, href }: SubItem) {
  const Icon = Icons[icon || "arrowRight"];
  return (
    <DropdownMenuItem asChild>
      <Link href={href}>
        <Icon className={`size-5 flex-none`} />
        <span className="ml-2 max-w-52 text-wrap">{title}</span>
      </Link>
    </DropdownMenuItem>
  );
}

function NavLinkIconDropdown({ title, icon, label, sub }: NavItem) {
  const Icon = Icons[icon || "arrowRight"];
  return (
    <DropdownMenu>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} size="icon" className="h-12 w-12">
              <Icon className={`size-5 flex-none`} />
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent side="right" className="flex items-center gap-4">
          {title}
          <ChevronDown className="-rotate-90 text-muted-foreground" />
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent side="right" align="start" sideOffset={4}>
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {sub?.map(({ title, icon, label, href }: SubItem) => (
          <DropdownItem
            key={`${title}-${href}`}
            title={title}
            icon={icon}
            label={label}
            href={href}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
