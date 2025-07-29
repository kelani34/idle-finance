"use client";

import Link from "next/link";
import { Icons } from "./ui/icons";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [navShow, setNavShow] = useState(false);

  const toggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return (
    <div className="bg-[#00000B]/80 w-full fixed z-[999]">
      <div className="flex items-center justify-between px-[30px] py-[18px] container  mx-auto">
        <Link href="/" className="flex items-center gap-[6.46px]">
          <Icons.logo />
          <span className="text-[23.858px] text-[#EBF9FF] font-bold">
            IdleFinance
          </span>
        </Link>
        <div className="rounded-[60px] border border-[#C8C8C8] bg-white/[0.09] py-5 px-6 hidden md:flex items-center justify-between gap-[58px] font-satoshi">
          <Link
            href="#about"
            className="text-[20.458px] text-[#EBF9FF] font-satoshi. hover:text-[#C8C8C8] hover:underline transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#our-solution"
            className="text-[20.458px] text-[#EBF9FF] font-satoshi. hover:text-[#C8C8C8] hover:underline transition-colors duration-200"
          >
            Our Solution
          </Link>

          {/* <Link
            href="/presale"
            className="text-[20.458px] text-[#EBF9FF] font-satoshi. hover:text-[#C8C8C8] hover:underline transition-colors duration-200"
          >
            Presale
          </Link> */}
          <Link
            href="#team"
            className="text-[20.458px] text-[#EBF9FF] font-satoshi. hover:text-[#C8C8C8] hover:underline transition-colors duration-200"
          >
            Team
          </Link>
        </div>

        <div className="block md:hidden">
          {!navShow && (
            <div className="flex items-center gap-3">
              <Icons.hamburger
                onClick={() => toggleNav()}
                aria-label="Toggle Menu"
              />
            </div>
          )}
          <div
            className={cn(
              'fixed top-0 left-0 z-[100] h-screen w-full transform bg-black/90 backdrop-blur-sm duration-300 ease-in-out "',
              navShow ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="flex justify-between p-4 items-center">
              <Link
                href="/"
                onClick={toggleNav}
                className="flex items-center gap-[6.46px]"
              >
                <Icons.logo />
                <span className="text-[23.858px] text-[#EBF9FF] font-bold">
                  IdleFinance
                </span>
              </Link>
              <Icons.close className="w-[35px] h-[26px] " onClick={toggleNav} />
            </div>
            <nav className="fixed mt-8 h-screen z-20">
              <div className="flex flex-col  p-4  items-center gap-[25px]">
                <div className="flex flex-col justify-between gap-[75.41px]">
                  <Link
                    onClick={toggleNav}
                    href="#about"
                    className="text-[20.458px] text-[#EBF9FF] font-satoshi. hover:text-[#C8C8C8] hover:underline transition-colors duration-200"
                  >
                    About
                  </Link>
                  <Link
                    onClick={toggleNav}
                    href="#our-solution"
                    className="text-[20.458px] text-[#EBF9FF] font-satoshi. hover:text-[#C8C8C8] hover:underline transition-colors duration-200"
                  >
                    Our Solution
                  </Link>
                  {/* <Link
                    onClick={toggleNav}
                    href="/presale"
                    className="text-[20.458px] text-[#EBF9FF] font-satoshi. hover:text-[#C8C8C8] hover:underline transition-colors duration-200"
                  >
                    Presale
                  </Link> */}
                  <Link
                    onClick={toggleNav}
                    href="#team"
                    className="text-[20.458px] text-[#EBF9FF] font-satoshi. hover:text-[#C8C8C8] hover:underline transition-colors duration-200"
                  >
                    Team
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
