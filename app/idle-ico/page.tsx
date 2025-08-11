"use client";

import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Pie, PieChart } from "recharts";
import { toast } from "sonner";

const RECEIVE_BASE_ADDRESS = "0x0072752A1a60959D1FA7881EE0911FB71a7e1815";

const Page = () => {
  const [showSummary, setShowSummary] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = RECEIVE_BASE_ADDRESS;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        setIsCopied(true);
        toast.success("Address copied to clipboard!");
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
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
            className="relative md:pt-[243px] pt-[150px] space-y-6"
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
            </div>{" "}
            <div className="flex items-center md:flex-row flex-col justify-center gap-8 max-w-[879px] mx-auto px-5 w-full">
              {/* Donut Chart */}
              <div className="relative">
                <ChartContainer
                  config={{
                    lp: {
                      label: "LP (Liquidity Pool)",
                    },
                    ecosystem: {
                      label: "Ecosystem Development",
                    },
                    team: {
                      label: "Team",
                    },
                    partnerships: {
                      label: "Partnerships",
                    },
                    cex: {
                      label: "CEX Listings",
                    },
                    presale: {
                      label: "Pre-sale",
                    },
                  }}
                  className="md:size-[500px] size-[250px]"
                >
                  <PieChart>
                    <defs>
                      <linearGradient
                        id="lpGradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#1A76FF" />
                        <stop offset="100%" stopColor="#CCE7FF" />
                      </linearGradient>
                      <linearGradient
                        id="ecosystemGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#B9F8EF" />
                        <stop offset="53.61%" stopColor="#07FDF4" />
                        <stop offset="100%" stopColor="#9EEC46" />
                      </linearGradient>
                    </defs>
                    <ChartTooltip
                      cursor={false}
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const data = payload[0].payload;
                          return (
                            <div className="bg-black/90 border border-white/20 rounded-lg p-3 text-white">
                              <p className="font-medium">{data.name}</p>
                              <p className="text-sm text-gray-300">
                                {data.percentage}% •{" "}
                                {data.amount.toLocaleString()}
                              </p>
                            </div>
                          );
                        }
                        return null;
                      }}
                    />
                    <Pie
                      className="md:block hidden"
                      data={[
                        {
                          name: "LP (Liquidity Pool)",
                          value: 40,
                          amount: 200000000,
                          percentage: 40,
                          fill: "url(#lpGradient)",
                        },
                        {
                          name: "Pre-sale",
                          value: 30,
                          amount: 150000000,
                          percentage: 30,
                          fill: "url(#ecosystemGradient)",
                        },
                        {
                          name: "Team",
                          value: 10,
                          amount: 50000000,
                          percentage: 10,
                          fill: "#C49300",
                        },
                        {
                          name: "Ecosystem Development",
                          value: 9.5,
                          amount: 47500000,
                          percentage: 9.5,
                          fill: "#B39372",
                        },

                        {
                          name: "Partnerships",
                          value: 5.5,
                          amount: 27500000,
                          percentage: 5.5,
                          fill: "#FF4646",
                        },
                        {
                          name: "CEX Listings",
                          value: 5,
                          amount: 25000000,
                          percentage: 5,
                          fill: "#374EFF",
                        },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={90}
                      outerRadius={200}
                      paddingAngle={0}
                      dataKey="value"
                    />
                    <Pie
                      className="md:hidden"
                      data={[
                        {
                          name: "LP (Liquidity Pool)",
                          value: 40,
                          amount: 200000000,
                          percentage: 40,
                          fill: "url(#lpGradient)",
                        },
                        {
                          name: "Pre-sale",
                          value: 30,
                          amount: 150000000,
                          percentage: 30,
                          fill: "url(#ecosystemGradient)",
                        },
                        {
                          name: "Team",
                          value: 10,
                          amount: 50000000,
                          percentage: 10,
                          fill: "#C49300",
                        },
                        {
                          name: "Ecosystem Development",
                          value: 9.5,
                          amount: 47500000,
                          percentage: 9.5,
                          fill: "#B39372",
                        },

                        {
                          name: "Partnerships",
                          value: 5.5,
                          amount: 27500000,
                          percentage: 5.5,
                          fill: "#FF4646",
                        },
                        {
                          name: "CEX Listings",
                          value: 5,
                          amount: 25000000,
                          percentage: 5,
                          fill: "#374EFF",
                        },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={85}
                      paddingAngle={0}
                      dataKey="value"
                    />
                  </PieChart>
                </ChartContainer>
              </div>

              {/* Custom Legend */}
              <div className="space-y-4">
                {[
                  {
                    name: "LP (Liquidity Pool)",
                    percentage: 40,
                    amount: 200000000,
                    color: "linear-gradient(180deg, #1A76FF 0%, #CCE7FF 100%)",
                    bgStyle: {
                      background:
                        "linear-gradient(180deg, #1A76FF 0%, #CCE7FF 100%)",
                    },
                  },
                  {
                    name: "Pre-sale",
                    percentage: 30,
                    amount: 150000000,

                    color:
                      "linear-gradient(90deg, #B9F8EF 0%, #07FDF4 53.61%, #9EEC46 100%)",
                    bgStyle: {
                      background:
                        "linear-gradient(90deg, #B9F8EF 0%, #07FDF4 53.61%, #9EEC46 100%)",
                    },
                  },
                  {
                    name: "Team",
                    percentage: 10,
                    amount: 50000000,
                    color: "#C49300",
                    bgStyle: { backgroundColor: "#C49300" },
                  },
                  {
                    name: "Ecosystem Development",
                    percentage: 9.5,
                    amount: 47500000,
                    color: "#B39372",
                    bgStyle: { backgroundColor: "#B39372" },
                  },

                  {
                    name: "Partnerships",
                    percentage: 5.5,
                    amount: 27500000,

                    color: "#FF4646",
                    bgStyle: { backgroundColor: "#FF4646" },
                  },
                  {
                    name: "CEX Listings",
                    percentage: 5,
                    amount: 25000000,

                    color: "#374EFF",
                    bgStyle: { backgroundColor: "#374EFF" },
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 group cursor-pointer"
                    title={`${item.percentage}% • ${item.amount.toLocaleString()}`}
                  >
                    <div
                      className="w-3.5 h-6 flex-shrink-0"
                      style={item.bgStyle}
                    />
                    <span className="text-white font-medium text-[25px]">
                      {item.name}
                    </span>
                  </div>
                ))}
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
            <section className="relative">
              <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#31A88D] rounded-full top-[10%] absolute left-[-15%] blur-[150px] opacity-20" />
              <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#31A88D] rounded-full top-[40%] absolute right-[-15%] blur-[150px] opacity-20" />
              <motion.section
                key="summary"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="max-w-[1074px] mx-auto z-10 space-y-[26px] pt-[150px] pb-[175px] relative"
              >
                <div className="rounded-[28px] m-2 md:py-10 md:px-[42px] p-4 overflow-hidden bg-[#0A0B0B] border border-white/[0.05] relative flex items-center gap-[20px]">
                  <div className="space-y-[1px] max-w-[585px]">
                    <h2 className="text-[30px] font-semibold leading-normal">
                      Initial Coin Offering
                    </h2>
                    <p className="text-[#B3B3B3] text-xl leading-normal">
                      To contribute to the ICO, please send your funds (ETH) of
                      any denomination to the address below on base blockchain.
                      Your contribution will be logged on-chain to ensure your
                      airdrop will be received during TGE (Token Generation
                      Event).
                    </p>
                  </div>

                  <Image
                    src="/p-d.svg"
                    alt="Hero Image"
                    width={267}
                    height={67.4}
                    className="max-h-[67px] overflow-hidden object-cover"
                  />

                  <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#00F] rounded-full -top-[100%] absolute right-[-45%] blur-[150px] opacity-[0.87]" />
                </div>
                <div className="rounded-[28px] m-2 bg-[#0A0B0B] border border-white/[0.05] ">
                  <h2 className="md:text-[30px] text-2xl  p-4 md:py-[29px] md:px-[34px] text-[#B9CBE3] font-semibold">
                    Send to
                  </h2>

                  <Separator />
                  <div className="md:py-[51px] md:px-[49px] md:gap-[64px] gap-4 p-4 flex flex-col-reverse items-center justify-between">
                    <div className=" !h-full w-full space-y-[34px]">
                      <Label
                        htmlFor="get"
                        className="text-[#B3B3B3] text-lg mb-3 block"
                      >
                        To this address
                      </Label>
                      <div className="relative h-full">
                        <Input
                          id="get"
                          value={RECEIVE_BASE_ADDRESS}
                          className="rounded-xl border-white/[0.05] p-[21px] pr-14 resize-none h-max !text-[27px] !font-semibold !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                          placeholder=""
                        />

                        <Button
                          size="default"
                          variant="ghost"
                          onClick={handleCopy}
                          className={`absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg border ${
                            isCopied
                              ? "bg-green-600/20 border-green-500/30 text-green-400 hover:bg-green-600/30"
                              : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
                          }`}
                        >
                          {isCopied ? (
                            <>
                              <div className="h-4 w-4">
                                <Check />
                              </div>
                              Copied
                            </>
                          ) : (
                            <>
                              <div className="h-5 w-5">
                                <Icons.copy />
                              </div>
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Image
                        src="/qr-2.svg"
                        alt="qr code"
                        className="rounded-lg bg-white p-2"
                        width={283.76}
                        height={283.76}
                      />
                      <p className="text-[18.619px] text-center mx-auto">
                        Scan this QR
                      </p>
                    </div>
                  </div>
                </div>
              </motion.section>
            </section>
          )}
        </AnimatePresence>
        <Footer />
      </section>
    </main>
  );
};

export default Page;
