"use client";

import { SidebarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSidebar } from "@/components/ui/sidebar";

import { UserDropdown } from "./user-dropdown";

export const NavHeader = () => {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="background-light900_dark200 sticky top-0 z-50 w-full items-center border-b">
      <div className="flex-between h-[--header-height] w-full items-center gap-2 px-4">
        <div className="flex items-center gap-2">
          <Button className="size-8" variant="ghost" onClick={toggleSidebar}>
            <SidebarIcon />
          </Button>
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/site-logo.svg"
              alt="DevFlow Logo"
              width={20}
              height={20}
            />
            <p className="h3-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
              Dev<span className="text-primary-500">Flow</span>
            </p>
          </Link>
        </div>

        <p>search</p>
        <UserDropdown />
      </div>
    </header>
  );
};
