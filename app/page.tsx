"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { articlesData, efficiencyData, faqData, teamData } from "@/lib/data";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Footer } from "@/components/footer";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BoxReveal } from "@/components/ui/box-reveal";
import { TextAnimate } from "@/components/ui/text-animate";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { MorphingText } from "@/components/ui/morphing-text";
import { useScroll, useTransform, motion } from "motion/react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <main className="overflow-hidden">
      <section ref={containerRef} className="relative pt-[256px] pb-[100px]">
        <div className="flex z-10 flex-col items-center">
          <div className="bg-[url(/background.png)] h-full w-full absolute translate-x-1/2 -left-1/2 -top-1/2 translate-y-1/2 bg-cover bg-center bg-no-repeat" />
          <h1 className="text-[#EBF9FF] relative md:block hidden text-[55.03px] font-satoshi font-bold text-center mx-auto max-w-[975px] leading-[100%]">
            <TextAnimate
              duration={0.3}
              animation="blurInUp"
              by="character"
              once
            >
              Seamlessly monetize your surplus
            </TextAnimate>
            <TextAnimate
              duration={0.5}
              animation="blurInUp"
              by="character"
              once
            >
              compute, bandwidth, and storage
            </TextAnimate>
            <TextAnimate
              duration={0.7}
              animation="blurInUp"
              by="character"
              once
            >
              with AI-powered optimization
            </TextAnimate>
          </h1>
          <h1 className="text-[#EBF9FF] relative md:hidden text-[30.591px] font-satoshi font-bold text-center mx-auto max-w-[332px] leading-[100%]">
            Seamlessly monetize your surplus compute, bandwidth, and storage
            with AI-powered optimization
          </h1>

          <div className="container z-10 !w-max relative py-[13.91px] mt-[53px] mb-[89.72px] px-[15.301px] rounded-[25.038px] border-[1.391px] border-white/[0.37] mx-auto flex items-center gap-[6.978px]">
            <p className="md:text-[33.476px] text-2xl leading-[93.305%] font-satoshi">
              Built on
            </p>

            <Image
              src="/base.svg"
              alt="Base Logo"
              width={80.25}
              height={21.27}
              className="rounded-[52.336px] bg-white p-[8.723px]"
            />
          </div>

          <motion.div
            style={{
              rotateX: rotate,
              scale,
            }}
            className="md:block hidden relative z-10"
          >
            <Image
              src="/home-1.png"
              alt="Hero Image"
              width={1284.961}
              height={827.2}
              className="-mb-60 relative z-10"
            />
          </motion.div>
          <Image
            src="/home-1.png"
            alt="Hero Image"
            width={1284.961}
            height={827.2}
            className="md:-mb-60 relative z-10 md:hidden"
          />
        </div>
        <section className="bg-[#000] z-[5] md:block hidden absolute -bottom-[20%] blur-[56px]  w-[150%] -translate-x-[20%] h-[442px]" />
      </section>

      <section className="bg-[#000] md:block hidden -mb-40 -mt-30 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[442px]" />
      <section className="bg-[url(/home-8.png)] bg-cover bg-center bg-no-repeat">
        <section className="mx-auto container md:py-60 py-20  md:h-[780px]">
          <h1 className="text-[#EBF9FF] max-w-[839px] font-satoshi text-center md:text-[92.85px] text-[31.664px] font-bold leading-[100%] mx-auto">
            The DePIN market is expected to grow{" "}
            <NumberTicker value={6000} className="!text-[#31A88D]" />% by 2028.
          </h1>
        </section>
      </section>
      <section className="bg-[#000] md:block hidden -mb-60 -mt-30 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[442px]" />

      <section
        id="about"
        className="container mx-auto flex md:flex-row flex-col items-center justify-center md:gap-10 gap-6 py-20"
      >
        <Image
          data-aos="fade-right"
          src="/home-2.png"
          alt="Hero Image"
          width={514.766}
          height={466.795}
          className="md:rounded-[94px] rounded-[57.605px] bg-[#0370F7] md:py-[55px] py-[33px] md:px-[32px] px-[19px]"
        />

        <div data-aos="fade-up" className="space-y-[49px]">
          <h2 className="text-white md:text-[40px] text-[23.269px] font-medium font-satoshi leading-[125%] max-w-[635px]">
            Unlock a new $10 trillion asset class. Your existing tech holds
            untapped value. Idle Finance brings the decentralized future to your
            balance sheet, securely and effortlessly.
          </h2>
          <Button
            variant="outline"
            className="md:text-2xl text-[13.962px] font-medium rounded-[60px] md:px-12 px-6  md:py-5 py-2.5 !border-white !border-2 h-auto"
          >
            Get Started
          </Button>
        </div>
      </section>

      <section
        id="our-solution"
        className="container mx-auto py-20 space-y-[89px]"
      >
        <h2 className="text-white font-satoshi flex-col items-center text-[60px] hidden md:flex font-bold max-w-[937px] mx-auto text-center leading-[100%]">
          <BoxReveal boxColor={"#fff"} duration={0.5}>
            <span className="w-full">Unlock the Power of Your Idle </span>
          </BoxReveal>
          <BoxReveal boxColor={"#fff"} duration={0.5}>
            <span>Assets with AI-Driven Efficiency. </span>
          </BoxReveal>
        </h2>
        <h2 className="text-white font-satoshi md:hidden block text-[29px] font-bold max-w-[313px] mx-auto text-center leading-[100%]">
          Unlock the Power of Your Idle Assets with AI-Driven Efficiency.
        </h2>
        <div className="grid md:grid-cols-2 gap-x-[28px] gap-y-[34px]">
          {efficiencyData.map(({ title, description }, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={1500 * index}
              className="rounded-[17.931px] space-y-1 md:pb-[34px] pb-[14px] md:pt-[66px] pt-[37px] border-[1.107px] border-b-white/10 border-l-white/10 bg-[#08080F] shadow-[0px_5.517px_12.276px_0px_rgba(0,0,0,0.11)]"
            >
              <Image
                src="/home-3.png"
                alt="Hero Image"
                width={177.078}
                height={116.905}
                className=""
              />
              <div className="space-y-3">
                <h3 className="md:text-[33.091px] text-[18.87px] border-l-[3.32px] border-white md:px-11 px-[25px] text-white font-semibold font-satoshi ">
                  {title}
                </h3>
                <p className="md:text-[18.925px] text-[10.792px] text-white/80 md:px-11 px-[25px]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="md:rounded-[30px] z-10 relative bg-[#0370F7] md:py-[52px] py-[17px] my-20 md:mx-7">
        <InfiniteMovingCards>
          <div className="flex md:gap-[54px] gap-[16.747px] items-center">
            <Image
              src="/base.svg"
              alt="Base Logo"
              width={113.25}
              height={30.133}
              className="md:rounded-[52.336px] rounded-[22.999px] md:h-[30.133px] h-[17px] md:w-[113.25px] w-[35px] bg-white md:p-[8.723px] p-1"
            />
            <p className="md:text-[47.434px] text-sm">
              Simple | Secure | Compliant | Built on
            </p>
          </div>
          <div className="flex md:gap-[54px] gap-[16.747px] items-center">
            <Image
              src="/base.svg"
              alt="Base Logo"
              width={113.25}
              height={30.133}
              className="rounded-[52.336px] md:h-[30.133px] h-[17px] md:w-[113.25px] w-[43px] bg-white p-[8.723px]"
            />
            <p className="md:text-[47.434px] text-sm">
              Simple | Secure | Compliant | Built on
            </p>
          </div>
        </InfiniteMovingCards>
      </section>
      <section className="bg-[#000] md:block hidden -mb-60 -mt-30 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[442px]" />
      <section className="relative">
        <div className="bg-[url(/home-7.png)] h-full w-full absolute translate-x-1/2 -left-1/2 -top-1/2 translate-y-1/2 bg-cover bg-center bg-no-repeat [mix-blend-mode:color-dodge] blur-[151.60000610351562px]" />
        <section className="container md:my-40 mx-auto space-y-[61px] !relative md:!py-10 py-5 md:!px-[51px] px-6 rounded-[32px] border-2 border-[#002F6E]">
          <h2 className="text-[50px] font-bold md:block hidden leading-[100%] max-w-[1062px]">
            <BoxReveal boxColor={"#fff"} duration={0.5}>
              <span> Bridging Your Assets to Decentralized </span>
            </BoxReveal>
            <BoxReveal boxColor={"#fff"} duration={0.5}>
              <span>Infrastructure with smart choices made by AI.</span>
            </BoxReveal>
          </h2>
          <h2 className="md:text-[50px] text-[29px] md:hidden font-bold leading-[100%] max-w-[1062px]">
            Bridging Your Assets to Decentralized Infrastructure with smart
            choices made by AI.
          </h2>
          <div className="w-full relative z-10 space-y-[50px] ">
            <div className="space-y-[39px]">
              <h2 className="text-[40px] ">Liquid Staking</h2>
              <div className="flex md:flex-row flex-col gap-3.5 items-stretch justify-between">
                <Image
                  src="/liquid-collective.svg"
                  alt="Base Logo"
                  width={220}
                  height={202}
                  className="bg-white/10 md:size-[220px] size-[180px] py-[20px] rounded-[17px] md:p-[34px] md:py-[54px] w-full"
                />
                <Image
                  src="/lido.svg"
                  alt="Base Logo"
                  width={220}
                  height={202}
                  className="bg-white/10  md:size-[220px] size-[180px] py-[20px] rounded-[17px] md:p-[34px] md:py-[54px] w-full "
                />
                <Image
                  src="/rocket-pool.svg"
                  alt="Base Logo"
                  width={220}
                  height={202}
                  className="bg-white/10  md:size-[220px] size-[180px] py-[20px] rounded-[17px] md:p-[34px] md:py-[54px] w-full"
                />
                <Image
                  src="/solv.svg"
                  alt="Base Logo"
                  width={220}
                  height={202}
                  className="bg-white/10  md:size-[220px] size-[180px] py-[20px] rounded-[17px] md:p-[34px] md:py-[54px] w-full"
                />
              </div>
            </div>
            <div className="space-y-[39px]">
              <h2 className="text-[40px] ">DePIN Protocols</h2>
              <div className="flex md:flex-row gap-3.5 flex-col items-stretch justify-between">
                <Image
                  src="/morphware.svg"
                  alt="Base Logo"
                  width={220}
                  height={202}
                  className="bg-white/10  md:size-[220px] size-[180px] py-[20px] rounded-[17px] md:p-[34px] md:py-[54px] w-full "
                />
                <Image
                  src="/file-coin.svg"
                  alt="Base Logo"
                  width={220}
                  height={202}
                  className="bg-white/10  md:size-[220px] size-[180px] py-[20px] rounded-[17px] md:p-[34px] md:py-[54px] w-full "
                />
                <Image
                  src="/render-network.svg"
                  alt="Base Logo"
                  width={220}
                  height={202}
                  className="bg-white/10  md:size-[220px] size-[180px] py-[20px] rounded-[17px] md:p-[34px] md:py-[54px] w-full "
                />
                <Image
                  src="/akash.svg"
                  alt="Base Logo"
                  width={220}
                  height={202}
                  className="bg-white/10  md:size-[220px] size-[180px] py-[20px] rounded-[17px] md:p-[34px] md:py-[54px] w-full "
                />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-[#000] md:block hidden -mb-60 -mt-30 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[442px]" />
      <section className="bg-[url(/home-6.png)] md:h-[711px] flex items-center justify-center bg-cover bg-center bg-no-repeat">
        <section className="py-40 md:flex hidden container mx-auto items-center justify-center gap-[30px]">
          <Icons.logo2 />
          <MorphingText
            texts={["IdleFinance", "IdleFinance"]}
            className="!text-[117.608px] !font-bold"
          />

          <span className="text-[117.608px]  font-bold invisible">
            IdleFinance
          </span>
        </section>
        <div className="flex md:hidden py-20 justify-center z-10 relative items-center gap-[6.46px]">
          <Icons.logo />
          <span className="text-[23.858px] text-[#EBF9FF] font-bold">
            IdleFinance
          </span>
        </div>
      </section>
      <section className="bg-[#00000B] md:block hidden -mt-70 blur-[56px] h-[442px]  w-[150%] -translate-x-[20%]" />
      <section id="team" className="container mx-auto py-20 space-y-[63px]">
        <h2 className="text-[50px] md:block hidden  font-bold leading-[100%] max-w-[599px]">
          <BoxReveal boxColor={"#fff"} duration={0.5}>
            <span>Meet our talented team!</span>
          </BoxReveal>
        </h2>
        <h2 className="md:text-[50px] md:hidden text-[29px] font-bold leading-[100%] max-w-[599px]">
          Meet our talented team!
        </h2>
        <div className="grid md:grid-cols-3 gap-x-[55.89px] md:gap-y-[102.9px] gap-y-20">
          {teamData.map(
            (
              {
                image,
                name,
                designation,
                description,
                socialMediaUrl,
                socialMediaName,
              },
              index,
            ) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-duration={1500 * index}
                className="space-y-[33px]"
              >
                <div className="space-y-[17.88px]">
                  <Image
                    src={image}
                    alt="Base Logo"
                    width={439.09}
                    height={439.09}
                    className="md:rounded-[60px] rounded-[30px]"
                  />
                  <div className="space-y-[13.75px]">
                    <h2 className="md:text-[27.947px] text-xl font-bold leading-normal">
                      {name}

                      {/* |{" "}
                      <span className="text-[#8B8B8B] md:text-[22.866px] text-lg">
                        {designation}
                      </span> */}
                    </h2>
                    <h3 className="md:text-[22.866px] text-lg text-[#8B8B8B] leading-normal">
                      {designation}
                    </h3>
                  </div>
                  <p className="md:text-[20.325px] leading-normal">
                    {description}
                  </p>
                </div>
                <Link
                  href={socialMediaUrl}
                  className="rounded-[49.123px] border-[1.228px] border-[#F6F6F64D] py-3 px-8 underline text-[21.24px] "
                >
                  {socialMediaName}
                </Link>
              </div>
            ),
          )}
        </div>
      </section>

      <section className="px-2 md:py-[80px]">
        <section className="container  rounded-[32px] md:mx-auto linear-border-wrapper overflow-hidden">
          <div className="space-y-11 bg-[#00000B] md:px-12 py-8 px-[18px] rounded-[22px]">
            <h2 className="text-[40px] md:inline-block hidden font-medium leading-[100%]">
              <BoxReveal boxColor={"#fff"} duration={0.5}>
                <span>Selected Experience from</span>
              </BoxReveal>
            </h2>
            <h2 className="text-[29px] md:hidden font-bold leading-[100%]">
              Selected Experience from
            </h2>
            <div className="md:space-y-6 space-y-[7.84px]">
              <div className="flex md:gap-[18.267px] gap-[7.84px] ">
                <div className="bg-white/10  p-[8.845px] !w-full flex items-center justify-center md:rounded-[17px] rounded-[4.42px] md:p-[34px] md:py-[54px]">
                  <Image
                    src="/world-economic-forum.svg"
                    alt="Base Logo"
                    width={195.938}
                    height={114.472}
                    className=""
                  />
                </div>
                <div className="bg-white/10  p-[8.845px] !w-full flex items-center justify-center md:rounded-[17px] rounded-[4.42px] md:p-[34px] md:py-[54px]">
                  <Image
                    src="/meta.svg"
                    alt="Base Logo"
                    width={236.259}
                    height={114.754}
                    className=""
                  />
                </div>
                <div className="bg-white/10  p-[8.845px] !w-full flex items-center justify-center md:rounded-[17px] rounded-[4.42px] md:p-[34px] md:py-[54px]">
                  <Image
                    src="/pwc.svg"
                    alt="Base Logo"
                    width={163.328}
                    height={110.011}
                    className=""
                  />
                </div>
                <div className="bg-white/10  p-[8.845px] !w-full flex items-center justify-center md:rounded-[17px] rounded-[4.42px] md:p-[34px] md:py-[54px]">
                  <Image
                    src="/bcg.svg"
                    alt="Base Logo"
                    width={160.835}
                    height={107.929}
                    className=""
                  />
                </div>
              </div>
              <div className="flex md:gap-[18.267px] gap-[7.84px]">
                <div className="bg-white/10  p-[8.845px] !w-full flex items-center justify-center md:rounded-[17px] rounded-[4.42px] md:p-[34px] md:py-[54px]">
                  <Image
                    src="/paypal.svg"
                    alt="Base Logo"
                    width={387.568}
                    height={114}
                    className=""
                  />
                </div>
                <div className="bg-white/10  p-[8.845px] !w-full flex items-center justify-center md:rounded-[17px] rounded-[4.42px] md:p-[34px] md:py-[54px]">
                  <Image
                    src="/snap.svg"
                    alt="Base Logo"
                    width={253.945}
                    height={175}
                    className=""
                  />
                </div>
                <div className="bg-white/10  p-[8.845px] !w-full flex items-center justify-center md:rounded-[17px] rounded-[4.42px] md:p-[34px] md:py-[54px]">
                  <Image
                    src="/google.svg"
                    alt="Base Logo"
                    width={219.012}
                    height={91.255}
                    className=""
                  />
                </div>
              </div>
              <div className="flex md:gap-[18.267px] gap-[7.84px]">
                <div className="bg-white/10  p-[8.845px] !w-full md:max-w-[452.445px] flex items-center justify-center md:rounded-[17px] rounded-[4.42px] md:p-[34px] md:py-[54px]">
                  <Image
                    src="/forbes.svg"
                    alt="Base Logo"
                    width={387.568}
                    height={114}
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className="container mx-auto py-20 md:space-y-[91px] space-y-20">
        <h2 className="text-[84px] md:inline-block hidden font-bold leading-[100%]">
          <BoxReveal boxColor={"#fff"} duration={0.5}>
            <span>Frequently</span>
          </BoxReveal>
          <BoxReveal boxColor={"#fff"} duration={0.5}>
            <span>Asked Questions.</span>
          </BoxReveal>
        </h2>
        <h2 className="text-[29px] md:hidden font-bold leading-[100%]">
          Frequently Asked Questions.
        </h2>

        <Accordion type="single" collapsible className="space-y-[17.134px]">
          {faqData.map(({ value, question, answer }, index) => (
            <AccordionItem
              key={index}
              data-aos="fade-up"
              data-aos-duration={100 * index}
              value={value}
              className="rounded-[25.701px] border-none bg-[#131619] p-[12.238px] data-[state=open]:bg-[#2B2B2B] "
            >
              <AccordionTrigger className="md:text-[31.86px] text-xl text-[#EBF9FF]">
                {question}
              </AccordionTrigger>
              <AccordionContent className="p-[12.238px] text-[#8F8F8F] md:text-[31.86px] text-xl font-medium">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
      <section className="bg-[#000] md:block hidden -mb-80 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[442px]" />
      <section className="relative">
        <div className="absolute w-full h-full bg-bottom opacity-30 pointer-events-none">
          <section className="bg-[#000] md:block hidden -mb-80 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[442px]" />
          <Image
            src="/footer-1.png"
            alt="Hero Image"
            width={1284.961}
            height={827.2}
            className="w-full h-full object-cover pointer-events-none"
          />
        </div>
        <section className="flex md:flex-row z-10 relative flex-col items-center overflow-hidden mx-1 justify-between container md:mx-auto my-20 md:rounded-[20px] md:py-0 py-10 !pl-10 border border-[#0A79E6] shadow-[0px_4px_12.2px_0px_#000] bg-[linear-gradient(90deg,#0370F7_-14.87%,#31A88D_54.05%)]">
          <div className="flex flex-col justify-between items-start">
            <div className="space-y-[22px]">
              <h3 className="text-[#EBF9FF] md:text-[33.67px] text-xl font-light">
                Ready to start earning?
              </h3>
              <h2 className="md:text-[68.65px] text-[40px] font-medium md:max-w-[402px] leading-[100%]">
                Download Idle Finance Desktop App
              </h2>
            </div>
            <Link
              // href="/download"
              href="#"
              className={cn(
                buttonVariants(),
                "py-2.5 px-5 mt-[53px] mb-[89.72px]  h-auto rounded-[71.112px] border-[#374EFF] border-2 gap-[9.046px] text-[21.711px] font-medium",
              )}
            >
              {/* <Icons.window /> */}
              Coming soon
            </Link>
          </div>
          <Image
            data-aos="fade-left"
            src="/home-5.png"
            alt="Base Logo"
            className="md:block hidden -mr-5"
            width={834}
            height={572}
          />
        </section>
        <Footer />
      </section>
    </main>
  );
}
