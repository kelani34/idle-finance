"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Icons } from "@/components/ui/icons";
import { NumberTicker } from "@/components/ui/number-ticker";
import { efficiencyData, faqData, people, teamData } from "@/lib/data";




import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import { BoxReveal } from "@/components/ui/box-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Page = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <main className="bg-[#070708] overflow-hidden bg-grain relative">
      <section className="relative md:pt-[150px] pt-[75px] pb-[75px]">
        <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#31A88D] rounded-full top-[10%] absolute left-[-15%] blur-[150px] opacity-20" />
        <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#035BCF] rounded-full top-[40%] absolute right-[-5%] blur-[150px] opacity-20 z-10" />
        <div className="max-w-[1235px] px-2 mx-auto relative flex flex-col items-center md:space-y-[85px] space-y-6 z-10 ">
          <div className="space-y-[49px] flex flex-col items-center">
            <div className="space-y-[22px] max-w-[622px] mt-[75px] flex flex-col items-center">
              <div className="space-y-[30px]">
                <h1 className="md:text-[60px] text-[40px] text-center font-bold text-white leading-[100%]">
                  Monetize Your Surplus Resources Effortlessly
                </h1>
                <h2 className="md:text-2xl text-lg text-center font-medium text-white max-w-[580px]">
                  Turn idle compute, bandwidth, and storage into revenue with
                  our AI-powered optimization engine.
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <Link
                href="#more"
                type="button"
                className="rounded-[8px] whitespace-nowrap !border-[#D8D8D8] border-[1px] !bg-none md:text-base text-sm font-semibold text-white md:px-[48.5px] px-8 h-auto py-[14px] hover:bg-white/10 hover:text-white transition-colors duration-200"
              >
                Learn more
              </Link>

              <div className="flex items-center gap-[6.978px]">
                <p className="text-2xl leading-[93.305%] font-satoshi">
                  Built on
                </p>

                <Image
                  src="/base.svg"
                  alt="Base Logo"
                  width={80.25}
                  height={21.27}
                  className="rounded-[6px] bg-white p-[6.271px] "
                />
              </div>
            </div>
          </div>
          {/* <div className="relative">
              <div className="md:w-[544px] relative md:h-[601.465px] bg-grain w-[326.51px] h-[361px] bg-[#2E2E2E] md:aspect-[544.00/601.46] aspect-[326.51px/361px] rounded-[16px] hero-img-shadow">
                <Image
                  src="/n-o.png"
                  alt=""
                  width={994.3786010742188}
                  height={663}
                  className="w-full h-full"
                />
              </div>
              <Image
                src="/n-b.svg"
                alt=""
                width={113.43}
                height={113.43}
                className="absolute bottom-[20%] md:size-[113.43] size-[57.645px] -left-[6%] animate-bounce"
              />
              <Image
                src="/n-c.svg"
                alt=""
                width={113.43}
                height={113.43}
                className="absolute top-[15%] md:size-[113.43] size-[57.645px] -right-[7%] animate-pulse"
              />
            </div> */}

          <div className="p-2.5 pr-[26px] md:mx-0 mx-auto bg-black/30 rounded-[102px] w-max flex items-center gap-[14px]">
            <div className="flex items-center ">
              <AnimatedTooltip items={people} />
            </div>
            <span className="text-lg font-medium ml-4">
              Just seamless earning{" "}
            </span>
          </div>
        </div>
      </section>
      <section className="relative ">
        <div className="h-[342px] bg-[#070708] blur-[70px] w-[150%] absolute left-1/2 -translate-x-1/2 -top-[150%]" />
        <div className="max-w-[1235px] mx-auto bg-grain relative bg-[#0059CE] md:rounded-[12px] md:py-4 py-[9.16px]">
          <InfiniteMovingCards>
            <div className="rounded-[50px] bg-[#01010D1F] md:p-2.5 p-[5.769px] w-max flex gap-[10.783px] items-center">
              <Image
                src="/liquid-collective-n.svg"
                alt=""
                width={51}
                height={51}
                className="md:size-[51px] size-[29.423px]"
              />
              <span className="md:text-[24.957px] text-[14.398px]">
                liquid collective
              </span>
            </div>
            <div className="rounded-[50px] bg-[#01010D1F] md:p-2.5 p-[5.769px] w-max flex gap-[10.783px] items-center">
              <Image
                src="/lido-n.svg"
                alt=""
                width={51}
                height={51}
                className="md:size-[51px] size-[29.423px]"
              />
              <span className="md:text-[24.957px] text-[14.398px]">Lido</span>
            </div>
            <div className="rounded-[50px] bg-[#01010D1F] md:p-2.5 p-[5.769px] w-max flex gap-[10.783px] items-center">
              <Image
                src="/rocket-pool-n.svg"
                alt=""
                width={51}
                height={51}
                className="md:size-[51px] size-[29.423px]"
              />
              <span className="md:text-[24.957px] text-[14.398px]">
                rocketpool
              </span>
            </div>
            <div className="rounded-[50px] bg-[#01010D1F] md:p-2.5 p-[5.769px] w-max flex gap-[10.783px] items-center">
              <Image
                src="/solv-n.svg"
                alt=""
                width={51}
                height={51}
                className="md:size-[51px] size-[29.423px]"
              />
              <span className="md:text-[24.957px] text-[14.398px]">Solv</span>
            </div>
            <div className="rounded-[50px] bg-[#01010D1F] md:p-2.5 p-[5.769px] w-max flex gap-[10.783px] items-center">
              <Image
                src="/morphware-n.svg"
                alt=""
                width={51}
                height={51}
                className="md:size-[51px] size-[29.423px]"
              />
              <span className="md:text-[24.957px] text-[14.398px]">
                Morphware
              </span>
            </div>
            <div className="rounded-[50px] bg-[#01010D1F] md:p-2.5 p-[5.769px] w-max flex gap-[10.783px] items-center">
              <Image
                src="/filecoin-n.svg"
                alt=""
                width={51}
                height={51}
                className="md:size-[51px] size-[29.423px]"
              />
              <span className="md:text-[24.957px] text-[14.398px]">
                filecoin
              </span>
            </div>
          </InfiniteMovingCards>
        </div>
      </section>
      <section className="max-w-[1235px] px-5 mx-auto relative z-10 md:py-[120px] py-[50px] ">
        <Image
          src="/n-d.png"
          alt=""
          width={1200.375}
          height={1067}
          className="size-full border-[#B9F8EF] md:rounded-[26.397px] rounded-[8.576px] border-[0.226px]"
        />
      </section>
      <section className="bg-[url(/home-8.png)] relative bg-cover bg-center bg-no-repeat">
        <div className="md:h-[342px] py-4 bg-[#070708] blur-[44px] w-[150%] absolute left-1/2 -translate-x-1/2 -top-[20%]" />
        <div className="mx-auto container md:py-60 py-20  md:h-[980px] relative z-10 flex items-center justify-center">
          <h1 className="text-[#EBF9FF] max-w-[839px] font-satoshi text-center md:text-[80.593px] text-[32.444px] font-bold leading-[100%] mx-auto">
            The DePIN market is expected to grow{" "}
            <NumberTicker value={6000} className="!text-[#31A88D]" />% by 2028.
          </h1>
        </div>
        <div className="md:h-[342px] py-4 bg-[#070708] blur-[44px] w-[150%] absolute left-1/2 -translate-x-1/2 -bottom-[20%]" />
      </section>

      <section
        id="more"
        className="max-w-[1235px] mx-auto relative px-5 z-10 space-y-[46px] md:pt-[113px] pt-[77px]"
      >
        <h3 className="md:text-[52.079px] text-[30px] font-bold text-center leading-[100%] text-white ">
          How to Get Started
        </h3>
        <div className="space-y-2.5">
          <div className="relative rounded-[16px] overflow-hidden w-full md:bg-[url(/n-e.png)] bg-[url(/n-f.png)] bg-right md:bg-contain bg-no-repeat">
            <div className="get-started-bg opacity-70 absolute h-full w-full" />
            <div className="md:p-5 p-3.5 md:space-y-[27px] space-y-[18.671px] relative">
              <div className="one-bg md:text-base font-semibold text-[11.064px] w-max flex items-center justify-center rounded-full py-2.5 md:px-5 px-4 text-black">
                1
              </div>
              <div className="md:space-y-4 space-y-[11.064px] md:max-w-[386px] max-w-[266.922px]">
                <h3 className="md:text-[29.92px] text-[20.69px] font-semibold">
                  Download the Idle App
                </h3>
                <p className="md:text-[17.111px] text-[11.833px] text-white/80 ">
                  Get he app to start earning just log in and let Idle handle
                  everything.
                </p>
              </div>
              <Link
                href="#"
                className="idle-button hover:opacity-80 whitespace-nowrap md:text-base text-[11.064px] max-w-[181px]"
              >
Coming Soon
              </Link>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-[9.68px]">
            <div className="bg-[#0B0B17] md:space-y-[27px] space-y-[18.671px] w-full relative overflow-hidden md:p-5 p-3.5 rounded-[16px]">
              <div className="bg-white font-semibold learn-more-button-shadow md:text-base text-[11.064px] w-max flex items-center justify-center rounded-full py-2.5 md:px-5 px-4 text-black">
                2
              </div>
              <div className="md:space-y-4 space-y-[11.064px] md:max-w-[386px] max-w-[213.676px]">
                <h3 className="md:text-[29.92px] text-[20.69px] font-semibold">
                  Create an account
                </h3>
                <p className="md:text-[17.111px] text-[11.833px] text-white/80 ">
                  Sign into your Idle account to start earning rewards
                </p>
              </div>
              <div className="rounded-full bg-white/5 p-[29.556px] w-max mt-[-18%] ml-auto">
                <Icons.keyboardOpen />
              </div>
              <div className="h-[771.159px] w-[354.353px] rotate-[135deg] bg-[#31A88D] rounded-full absolute -bottom-[140%] right-[-15%] blur-[150px] opacity-20" />
            </div>
            <div className="bg-[#0B0B17] md:space-y-[27px] space-y-[18.671px] w-full relative overflow-hidden md:p-5 p-3.5 rounded-[16px]">
              <div className="bg-white font-semibold learn-more-button-shadow md:text-base text-[11.064px] w-max flex items-center justify-center rounded-full py-2.5 md:px-5 px-4 text-black">
                3
              </div>
              <div className="md:space-y-4 space-y-[11.064px] md:max-w-[386px] max-w-[213.676px]">
                <h3 className="md:text-[29.92px] text-[20.69px] font-semibold">
                  Earn
                </h3>
                <p className="md:text-[17.111px] text-[11.833px] text-white/80 ">
                  Log into your Idle finance account to begin earning rewards.
                </p>
              </div>
              <div className="rounded-full bg-white/5 p-[29.556px] w-max mt-[-18%] ml-auto">
                <Icons.gift />
              </div>
              <div className="h-[771.159px] w-[354.353px] rotate-[135deg] bg-[#31A88D] rounded-full absolute -bottom-[140%] right-[-15%] blur-[150px] opacity-20" />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[1235px] mx-auto relative z-10 space-y-[46px] md:py-[256px] py-[96px] px-5">
        <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#31A88D] rounded-full top-[10%] absolute left-[-15%] blur-[150px] opacity-20" />
        <h3 className="md:text-[50px] text-[34.518px] max-w-[879px] mx-auto font-bold text-center leading-[100%] text-white ">
          Unlock the Power of Your Idle Assets with AI-Driven Efficiency
        </h3>
        <div className="grid md:grid-cols-2 md:gap-x-[28px] relative z-10 md:gap-y-[34px] gap-[17.259px]">
          {efficiencyData.map(({ title, description }, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={1500 * index}
              className="rounded-[17.931px] space-y-1 md:pb-[30px] pb-[14px] md:pt-[60px] pt-[37px] border-[1.107px] border-b-white/10 border-l-white/10 bg-[#222222] shadow-[0px_5.517px_12.276px_0px_rgba(0,0,0,0.11)]"
            >
              <Image
                src="/home-3.png"
                alt="Hero Image"
                width={177.078}
                height={116.905}
                className=""
              />
              <div className="space-y-3">
                <h3 className="md:text-[29.92px] text-[18.87px] border-l-[3.32px] border-white md:px-11 px-[25px] text-white font-semibold font-satoshi ">
                  {title}
                </h3>
                <p className="md:text-[17.111px] text-[10.792px] text-white/80 md:px-11 px-[25px]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[url(/home-6.png)] md:h-[831px] h-[327.529px] relative flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <div className="h-[342px]  bg-[#070708] blur-[44px] w-[150%] absolute left-1/2 -translate-x-1/2 md:-top-[10%] -top-[59%]" />
        <h2 className="md:text-[83.021px] text-[32.722px] max-w-[1026.203px] relative z-10 mx-auto text-center font-bold leading-[100%] capitalize">
          Unlocking value from a hidden resource
        </h2>
        <div className="h-[342px] bg-[#070708] blur-[44px] w-[150%] absolute left-1/2 -translate-x-1/2 md:-bottom-[15%] -bottom-[69%]" />
      </section>

      {/* <section className="max-w-[1235px] mx-auto relative space-y-[68px] md:py-[113px] py-[50px] px-5">
        <div className="space-y-[18px]">
          <h3 className="text-center md:text-[50px] text-[20px] font-bold leading-[100%] text-[#FFFEFE]">
            Genuine People, Genuine Rewards
          </h3>
          <p className="md:text-xl text-xs text-white/80 text-center">
            Idle is already being used by millions of people around the world
          </p>
        </div>
        <div className="space-y-[23px]">
          <div className="flex md:flex-row flex-col items-stretch gap-[23px]">
            <div className="rounded-[16px] overflow-hidden bg-[#222] py-4 px-[18px]">
              <div className="flex items-center gap-6">
                <div className="md:space-y-[56px] space-y-[51.04px]">
                  <div className="space-y-[46px] max-w-[484px]">
                    <div className="md:space-y-[27px] space-y-[30.101px]">
                      <Icons.quote />
                      <p className="text-white/80 md:text-xl text-[13.09px]">
                        Before Idle, I had no idea my idle crypto assets could
                        actually generate this much passive income. The platform
                        made it ridiculously simple to set things up, and now
                        I'm earning rewards without constantly watching the
                        market. It honestly feels like free money.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center md:gap-3 gap-2">
                        <button
                          type="button"
                          className="rounded-[14px] border whitespace-nowrap border-[#F7F7F742] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium md:px-[25.5px] px-4 md:py-[10.5px] py-1.5 hover:bg-white/10 transition-colors duration-200"
                        >
                          Liam W.
                        </button>
                        <button
                          type="button"
                          className="bg-[#FFFFFF1A] rounded-[14px] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium px-4 md:py-[10.5px] py-1.5 flex items-center gap-2.5 hover:bg-white/40 transition-colors duration-200"
                        >
                          <Icons.location />
                          Toronto
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <Image src="/s-b.png" alt="" width={186} height={364} />
              </div>
            </div>
            <div className="rounded-[16px] bg-[#222] py-4 px-[18px]">
              <div className="flex items-center gap-6">
                <div className="space-y-[56px]">
                  <div className="space-y-[78px] max-w-[484px]">
                    <div className="space-y-[27px]">
                      <Icons.quote />
                      <p className="text-white/80 md:text-xl text-[13.09px]">
                        What I love about Idle is that it's transparent and
                        actually delivers. No fluff, just results.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src="/s-c.png"
                        alt=""
                        width={51}
                        height={51}
                        className="rounded-full size-[51px]"
                      />
                      <div className="flex items-center md:gap-3 gap-2">
                        <button
                          type="button"
                          className="rounded-[14px] border whitespace-nowrap border-[#F7F7F742] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium md:px-[25.5px] px-4 md:py-[10.5px] py-1.5 hover:bg-white/10 transition-colors duration-200"
                        >
                          Takeshi N.
                        </button>
                        <button
                          type="button"
                          className="bg-[#FFFFFF1A] rounded-[14px] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium px-4 md:py-[10.5px] py-1.5 flex items-center gap-2.5 hover:bg-white/40 transition-colors duration-200"
                        >
                          <Icons.location />
                          Tokyo
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-stretch gap-[23px]">
            <div className="gap-y-[23px] w-full flex flex-col">
              <div className="rounded-[16px] bg-[#222] h-full py-4 px-[18px]">
                <div className="flex items-center gap-6">
                  <div className="space-y-[56px]">
                    <div className="space-y-[78px] max-w-[484px]">
                      <div className="space-y-[27px]">
                        <Icons.quote />
                        <p className="text-white/80 md:text-xl text-[13.09px]">
                          I've used a bunch of DeFi tools, but Idle is the only
                          one I trust to auto-optimize my returns.
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/s-f.png"
                          alt=""
                          width={51}
                          height={51}
                          className="rounded-full size-[51px]"
                        />
                        <div className="flex items-center md:gap-3 gap-2">
                          <button
                            type="button"
                            className="rounded-[14px] border whitespace-nowrap border-[#F7F7F742] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium md:px-[25.5px] px-4 md:py-[10.5px] py-1.5 hover:bg-white/10 transition-colors duration-200"
                          >
                            Samuel K.
                          </button>
                          <button
                            type="button"
                            className="bg-[#FFFFFF1A] rounded-[14px] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium px-4 md:py-[10.5px] py-1.5 flex items-center gap-2.5 hover:bg-white/40 transition-colors duration-200"
                          >
                            <Icons.location />
                            Berlin
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-[16px] h-full bg-[#222] py-4 px-[18px]">
                <div className="flex items-center gap-6">
                  <div className="space-y-[56px]">
                    <div className="space-y-[78px] max-w-[484px]">
                      <div className="space-y-[27px]">
                        <Icons.quote />
                        <p className="text-white/80 md:text-xl text-[13.09px]">
                          Before Idle, I had no idea my idle crypto assets could
                          actually generate this much passive income. The
                          platform made it
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Image
                          src="/s-e.png"
                          alt=""
                          width={51}
                          height={51}
                          className="rounded-full size-[51px]"
                        />
                        <div className="flex items-center md:gap-3 gap-2">
                          <button
                            type="button"
                            className="rounded-[14px] border whitespace-nowrap border-[#F7F7F742] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium md:px-[25.5px] px-4 md:py-[10.5px] py-1.5 hover:bg-white/10 transition-colors duration-200"
                          >
                            Susan A.
                          </button>
                          <button
                            type="button"
                            className="bg-[#FFFFFF1A] rounded-[14px] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium px-4 md:py-[10.5px] py-1.5 flex items-center gap-2.5 hover:bg-white/40 transition-colors duration-200"
                          >
                            <Icons.location />
                            London
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-[16px] bg-[#222] py-4 px-[18px] w-full">
              <div className="flex items-center gap-6">
                <div className="space-y-[56px]">
                  <div className="space-y-[46px] ">
                    <div className="space-y-[27px]">
                      <Icons.quote />
                      <p className="text-white/80 md:text-xl text-[13.09px]">
                        My assets used to sit idle pun intended. Now they
                        generate steady rewards while I sleep.
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center md:gap-3 gap-2">
                        <button
                          type="button"
                          className="rounded-[14px] border whitespace-nowrap border-[#F7F7F742] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium md:px-[25.5px] px-4 md:py-[10.5px] py-1.5 hover:bg-white/10 transition-colors duration-200"
                        >
                          Nate A.
                        </button>
                        <button
                          type="button"
                          className="bg-[#FFFFFF1A] rounded-[14px] text-[#FFFFFFCC] md:text-xl text-[13.087px] font-medium px-4 md:py-[10.5px] py-1.5 flex items-center gap-2.5 hover:bg-white/40 transition-colors duration-200"
                        >
                          <Icons.location />
                          San Francisco
                        </button>
                      </div>
                    </div>
                  </div>
                  <Image
                    src="/s-d.png"
                    alt=""
                    width={524}
                    height={284}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <Carousel
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        id="team"
        className="py-20 space-y-[60px] px-5 mx-auto"
      >
        <div className="max-w-[1235px] px-5 mx-auto flex items-center justify-between">
          <h2 className="md:text-[50px]  text-[29px] font-bold leading-[100%] max-w-[599px]">
            <BoxReveal boxColor={"#fff"} duration={0.5}>
              <span>Meet our talented team!</span>
            </BoxReveal>
          </h2>
          <div className="flex items-center relative">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent>
          {teamData.map(
            (
              {
                image,
                name,
                description,
                socialMediaUrl,
                socialMediaName,
                companies,
                company,
                designation,
                position
              },
              index,
            ) => (
              <CarouselItem
                key={index}
                className="space-y-[33px] lg:basis-1/2  md:mr-[55px] md:min-w-[700px]"
              >
                <div className="flex md:flex-row flex-col gap-5">
                  <Image
                    src={image}
                    alt=""
                    width={439.09}
                    height={439.09}
                    className="md:rounded-[60px] md:h-full md:w-full md:max-w-[381.046px] md:max-h-[381.046px]  rounded-[30px]"
                  />
                  <div className="space-y-[28.64px] max-w-[446px]">
                    <div className="space-y-[11.937px]">
                      <div className="flex items-center gap-3">
                      <h2 className="md:text-[24.258px] text-xl font-bold leading-[100%]">
                        {name}
                      </h2>
                      <h3 className="md:text-[19.847px] text-lg text-[#8B8B8B] leading-[100%]">
                        {designation}
                        </h3>
                      </div>
                       <h3 className="md:text-[19.847px] text-lg text-[#8B8B8B] leading-normal">
                        {position}
                        </h3>
                      <div className="flex items-center gap-3">
                        {companies.map((company) => (
                          <Image
                            key={company}
                            src={company}
                            alt=""
                            width={99.122}
                            height={32.689}
                          />
                        ))}
                      </div>
                      <p className="md:text-sm text-sm leading-normal">
                        {description}
                      </p>
                    </div>
                    <div className="flex items-center gap-[29px]">
                      {company && (
                        <Image
                          src={company}
                          alt=""
                          width={140.243}
                          height={43.549}
                        />
                      )}
                      <Link
                        href={socialMediaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-[49.123px] border-[1.228px] border-[#F6F6F64D] py-3 px-8 underline text-[21.24px] "
                      >
                        {socialMediaName}
                      </Link>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
      </Carousel>
      <section className="space-y-[49px] max-w-[1235px] px-5 mx-auto">
        <h4 className="md:text-[30px] text-[20px] font-medium leading-[100%]">
          Selected Experience from
        </h4>

        <InfiniteMovingCards className=" bg-[#1F2029] rounded-[12px] md:py-8 py-2.5">
          <Image
            src="/world-economic-forum.svg"
            alt=""
            width={107.682}
            height={66.587}
          />
          <Image src="/meta.svg" alt="" width={217.752} height={63.635} />
          <Image src="/snap.svg" alt="" width={61.667} height={61.667} />
          <Image src="/pwc.svg" alt="" width={76.667} height={61.667} />
          <Image src="/bcg.svg" alt="" width={179.096} height={66.587} />
          <Image src="/google.svg" alt="" width={211.242} height={65.596} />
          <Image src="/paypal.svg" alt="" width={245.108} height={65.298} />
        </InfiniteMovingCards>
      </section>
      <section className="md:py-[200px] py-[50px] px-5 max-w-[1235px] mx-auto">
        <div className="get-started-bg rounded-[16px] overflow-hidden">
          <div className="relative overflow-hidden w-full md:h-auto h-[630px] md:bg-[url(/n-g.png)] bg-[url(/n-h.png)] md:bg-right bg-bottom bg-contain bg-no-repeat">
            {/* <div className="get-started-bg opacity-70 absolute h-full w-full" /> */}
            <div className="md:py-[49px] md:px-[59px] py-[41px] px-[29px] space-y-[71px] relative">
              <div className="space-y-[26px] md:max-w-[606px] max-w-[266.922px]">
                <h3 className="md:text-[54.65px] text-[40px] font-semibold">
                  Download Idle App Now!
                </h3>
                <p className="md:text-[34px] text-[20px] text-white/80 ">
                  Idle finance chrome extension will be available on chrome web
                  store soon
                </p>
              </div>
              <Link
                href="#"
                className="idle-button hover:opacity-80 md:text-base text-[11.064px] max-w-[181px]"
              >
Coming Soon
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden pt-[181px]">
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
        <div className="max-w-[1235px] px-5 mx-auto py-20 md:space-y-[91px] space-y-20">
          <h2 className="md:text-[70px] text-[29px] faq-txt font-bold leading-[100%]">
            <BoxReveal boxColor={"#fff"} duration={0.5}>
              <span className="faq-text">Frequently Asked Questions.</span>
            </BoxReveal>
          </h2>

          <Accordion
            type="single"
            collapsible
            className="space-y-[17.134px] relative z-10"
          >
            {faqData.map(({ value, question, answer }, index) => (
              <AccordionItem
                key={index}
                data-aos="fade-up"
                data-aos-duration={100 * index}
                value={value}
                className="rounded-[25.701px] border-none bg-[#2B2B2B29] p-[12.238px] data-[state=open]:bg-[#131619A1] "
              >
                <AccordionTrigger className="md:text-[28px] text-xl text-[#EBF9FF]">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="p-[12.238px] text-[#8F8F8F] md:text-[28.618px] text-xl">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Footer />
      </section>
    </main>
  );
};

export default Page;
