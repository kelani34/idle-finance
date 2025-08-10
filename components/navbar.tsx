"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icons } from "./ui/icons";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isDownloadPage = pathname === "/download";
  const isPresalePage = pathname === "/idle-ico";

  const docsUrl =
    process.env.NEXT_PUBLIC_DOCS_URL ||
    "https://idle-finance.gitbook.io/idle-finance.md/";

  return (
    <div className="w-full fixed z-[999]">
      <div className="relative">
        <div className="bg-[#070708] blur-[24.149999618530273px] absolute w-[150%] -translate-x-1/2 left-1/2 -top-20 h-[201px]" />
        <div className="flex items-center justify-between px-[30px] relative py-[18px] container mx-auto">
          <Link href="/" className="flex items-center gap-[6.46px]">
            <Icons.logo />
            <span className="text-[23.858px] text-[#EBF9FF] font-bold">
              IdleFinance
            </span>
          </Link>

          <div className="flex items-center gap-4">
            {isHomePage && (
              <Link
                href="/idle-ico"
                className={cn(
                  buttonVariants(),
                  "idle-button md:visible invisible hover:opacity-80",
                )}
              >
                $IDLE ICO
              </Link>
            )}

            {isDownloadPage && (
              <Link
                href="#more"
                type="button"
                className="rounded-[8px] !border-[#D8D8D8] border-[1px] learn-more-button-shadow !bg-none md:text-base text-sm font-semibold text-white px-[48.5px] h-auto py-[14px] hover:bg-white/10 hover:text-white transition-colors duration-200"
              >
                Learn more
              </Link>
            )}

            {isPresalePage && (
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Back to Home
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
