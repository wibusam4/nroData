import { cn } from "@/lib/utils";
import { MobileSidebar } from "./SideBarMobile";
import ThemeToggle from "./ThemeToggle/theme-toggle";

export default function Header() {
  return (
    <header className="sticky inset-x-0 top-0 w-full">
      <nav className="flex items-center justify-between md:justify-end p-[14px] border-b">
        <div className={cn("block md:!hidden")}>
          <MobileSidebar />
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
