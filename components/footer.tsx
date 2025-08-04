import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { Icons } from "./ui/icons";
import { cn } from "@/lib/utils";

export const Footer = () => {
  return (
    <footer className="border-[#313131] py-[61px] flex md:flex-row flex-col gap-4 items-center justify-between border-t container mx-auto">
      <div className="flex items-center gap-[8.69px]">
        <Icons.logo3 />
        <span className="text-[32.097px] text-[#EBF9FF] font-bold">
          IdleFinance
        </span>
      </div>

      <Link
        href="https://x.com/idlefinances?s=21"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
          }),
          "bg-[#C7E3DC]/[.22] rounded-full",
        )}
      >
        <Icons.x />
      </Link>
      <p className="md:text-[20.458px] text-[#9B9B9B] ">
        ©2025 IdleFinance, All rights reserved.
      </p>
    </footer>
  );
};
