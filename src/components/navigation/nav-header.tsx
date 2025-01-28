import Image from "next/image";
import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

export const NavHeader = () => {
  return (
    <nav className="flex-between background-light900_dark200 sticky top-0 gap-5 bg-red-200 px-4 py-3 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlow Logo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>Global Search</p>

      <ThemeToggle />
    </nav>
  );
};
