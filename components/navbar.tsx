import Link from "next/link";
import { Icons } from "./ui/icons";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <div className=" w-full fixed z-[999]">
      <div className="relative">
        <div className="bg-[#070708] blur-[24.149999618530273px] absolute w-[150%] -translate-x-1/2 left-1/2 -top-20 h-[201px]" />
        <div className="flex items-center justify-between px-[30px] relative  py-[18px] container  mx-auto">
          <Link href="/" className="flex items-center gap-[6.46px]">
            <Icons.logo />
            <span className="text-[23.858px] text-[#EBF9FF] font-bold">
              IdleFinance
            </span>
          </Link>
          <Link
            href="/download"
            className={cn(
              buttonVariants(),
              "idle-button md:visible invisible hover:opacity-80",
            )}
          >
            Download Idle
          </Link>
        </div>
      </div>
    </div>
  );
};
