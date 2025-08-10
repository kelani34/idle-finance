"use client";

import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const RECEIVE_BASE_ADDRESS = "0x0072752A1a60959D1FA7881EE0911FB71a7e1815";

const Page = () => {
  const [showSummary, setShowSummary] = useState(false);
  const receiveAmount = "0.0";
  const receiveAddress = "0x0072752A1a60959D1FA7881EE0911FB71a7e1815";
  const refundWallet = "0x0072752A1a60959D1FA7881EE0911FB71a7e1815";
  const sendAmount = "0.0";

  const handleCopy = () => {
    const textToCopy = RECEIVE_BASE_ADDRESS;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Address copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy address.");
      });
  };

  return (
    <main className="bg-[#070708] overflow-hidden bg-grain relative">
      <AnimatePresence mode="wait">
        {!showSummary && (
          <motion.section
            key="presale"
            className="relative md:pt-[243px] pt-[150px]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
          >
            <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#31A88D] rounded-full top-[10%] absolute left-[-15%] blur-[150px] opacity-20" />
            <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#31A88D] rounded-full top-[40%] absolute right-[-15%] blur-[150px] opacity-20" />
            <div className="max-w-[764px] relative flex md:flex-col flex-col-reverse gap-[67.99px] md:gap-6  z-10 mx-auto">
              <div className="space-y-[42px] ">
                <div className="space-y-[22px]">
                  <h1 className="faq-text capitalize md:text-[60px] text-[47px] font-bold text-center leading-[100%]">
                    Be Early.
                    <br className="md:hidden" /> Earn Early.{" "}
                    <br className="md:hidden" />
                    <br className="hidden md:block" />
                    Idle Finance Presale is Live.
                  </h1>
                  <p className="md:max-w-[670px] max-w-[336px] mx-auto  text-center md:text-2xl text-xl font-medium">
                    Get in before we launch power the next wave of decentralized
                    compute and staking. Auto stake, earn, and compound yields.
                  </p>
                </div>
                <Button
                  type="button"
                  className=" mx-auto block font-semibold px-[32.5px] py-[14px] h-auto"
                  onClick={() => setShowSummary(true)}
                >
                  Submit a Contribution
                </Button>
              </div>
              <div className="relative mx-auto w-max">
                <Image
                  src="/p-a.svg"
                  alt="Hero Image"
                  width={254.602}
                  height={254.602}
                  className="object-cover blur-[44.5px] animate-ping !duration-1000 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none"
                />
                <Image
                  src="/p-a.svg"
                  alt="Hero Image"
                  width={254.602}
                  height={254.602}
                  className="object-cover pointer-events-none relative delay-500 animate-bounce !duration-1000"
                />
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden pt-[50px]">
        <div className="absolute w-full bg-bottom opacity-30 pointer-events-none">
          <section className="bg-[#000] md:block hidden -mb-80 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[942px]" />
          <Image
            src="/footer-1.png"
            alt="Hero Image"
            width={1284.961}
            height={827.2}
            className="w-full h-full object- pointer-events-none"
          />
        </div>
        <AnimatePresence mode="wait">
          {!showSummary && (
            <motion.section
              key="presale"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="md:py-[200px] py-[50px] px-5 max-w-[1235px] mx-auto"
            >
              <div className="get-started-bg rounded-[16px] overflow-hidden">
                <div className="relative overflow-hidden w-full md:h-auto h-[630px] md:bg-[url(/n-g.png)] bg-[url(/n-h.png)] md:bg-right bg-bottom bg-contain bg-no-repeat">
                  {/* <div className="get-started-bg opacity-70 absolute h-full w-full" /> */}
                  <div className="md:py-[49px] md:px-[59px] py-[41px] px-[29px] space-y-[71px] relative">
                    <div className="space-y-[26px] md:max-w-[606px] max-w-[266.922px]">
                      <h3 className="md:text-[54.65px] text-[40px] font-semibold">
                        Download Idle App Now!
                      </h3>
                      <p className="md:text-[34px] text-[20px] text-white/80 ">
                        Idle finance chrome extension will be available on
                        chrome web store soon
                      </p>
                    </div>
                    <Link
                      href="/download"
                      className="idle-button hover:opacity-80 md:text-base text-[11.064px] max-w-[181px]"
                    >
                      Download Idle
                    </Link>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {showSummary && (
            <motion.section
              key="summary"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.4 }}
              className="max-w-[1074px] mx-auto z-10 space-y-[26px] pt-[150px] relative"
            >
              <Button
                variant="outline"
                onClick={() => {
                  setShowSummary(false);
                }}
                className="text-xl !p-2.5 h-auto rounded-[12px] !bg-[#01010D] text-[#B9CBE3]"
              >
                <ChevronLeft size={24} className="size-6" />
                Back
              </Button>

              <div className="rounded-[28px] m-2 md:p-12 p-4 overflow-hidden bg-[#0A0B0B] border border-white/[0.05] relative flex items-center gap-[28px]">
                <div className="space-y-[1px] max-w-[585px]">
                  <h2 className="text-[30px] font-semibold leading-normal">
                    Initial Coin Offering
                  </h2>
                  <p className="text-[#B3B3B3] text-xl leading-normal">
                    To contribute to the ICO, please send your funds of any
                    denomination to the address below. Your contribution will be
                    logged on chain to ensure your airdrop will be received
                    during Token Generation Event(TGE).
                  </p>
                </div>

                <Image
                  src="/p-b.svg"
                  alt="Hero Image"
                  width={267}
                  height={67.4}
                />

                <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#00F] rounded-full -top-[100%] absolute right-[-45%] blur-[150px] opacity-[0.87]" />
              </div>
              <div className="rounded-[28px] m-2 bg-[#0A0B0B] border border-white/[0.05] ">
                <div className="md:px-[34px] md:py-[29px] p-4 flex md:flex-row flex-col md:items-center justify-between">
                  <h2 className="md:text-[30px] text-2xl text-[#B9CBE3] font-semibold">
                    Send to
                  </h2>
                  <p className="text-[#D6D6D6] md:text-lg ">
                    Ensure the recipient's information is correct before
                    sending.
                  </p>
                </div>
                <Separator />
                <div className="md:py-[26px] md:px-[49px] p-4 flex md:flex-row flex-col items-stretch justify-between">
                  <div className="max-w-[533px] !h-full w-full space-y-[34px]">
                    <Label
                      htmlFor="get"
                      className="text-[#B3B3B3] text-lg mb-3 block"
                    >
                      To this address
                    </Label>
                    <div className="relative h-full">
                      <Textarea
                        id="get"
                        value={RECEIVE_BASE_ADDRESS}
                        className="rounded-xl border-white/[0.05] p-5 pr-14 resize-none h-full !text-[47px] !font-semibold !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                        placeholder=""
                      />

                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={handleCopy}
                        className="text-white absolute right-3 top-3 flex gap-1.5 text-2xl"
                      >
                        <Icons.copy />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Image
                      src="/qr.svg"
                      alt="qr code"
                      className="rounded-lg bg-white p-2"
                      width={283.76}
                      height={283.76}
                    />
                    <p className="text-[17.735px] text-center mx-auto">
                      Scan this QR
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
        <Footer />
      </section>
    </main>
  );
};

export default Page;
