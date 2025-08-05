"use client";

import DownloadButton from "@/components/download-button";
import { Footer } from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { BoxReveal } from "@/components/ui/box-reveal";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { faqData, people } from "@/lib/data";
import Aos from "aos";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <main className="bg-[#070708] overflow-hidden">
      <section className="bg-[url('/n-a.png')] bg-no-repeat  bg-cover ">
        <div className="bg-[url('/d-a.png')] bg-no-repeat h-screen  pt-[150px] bg-bottom-right bg-size-[1338.56px_842.00px]">
          <div className="max-w-[1235px]  px-2 mx-auto relative z-10 md:space-y-0 space-y-[55px]">
            <div className="flex md:flex-row pb-[75px] flex-col gap-[69px] md:items-start items-center justify-between">
              <div className="space-y-3 max-w-[513px] mt-[75px]">
                <div className="p-2.5 pr-[26px] md:mx-0 mx-auto border border-[#5F5F5F] rounded-[102px] w-max flex items-center gap-[14px]">
                  <div className="flex items-center ">
                    <AnimatedTooltip items={people} />
                  </div>
                  <span className="text-lg font-medium ml-4">
                    Just seamless earning{" "}
                  </span>
                </div>
                <div className="space-y-[30px]">
                  <h1 className="md:text-[60px] max-w-[480px] capitalize text-[40px] font-bold text-white leading-[100%]">
                    Download the Idle Finance app
                  </h1>
                  <h2 className="md:text-2xl text-lg font-medium text-white max-w-[580px]">
                    Start earning rewards by sharing your unused internet. Tap
                    into a hidden resource and join the network today.
                  </h2>
                </div>

                <DownloadButton />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="h-[342px] bg-[#070708] blur-[60px] w-[150%] absolute left-1/2 -translate-x-1/2 -top-[180px]" />
        <div className="relative z-10 space-y-[60px] mx-auto md:py-[150px] py-[50px]  px-5 max-w-[1235px]">
          <h3 className="md:text-[48px] text-[30px] font-bold leading-[100%] text-white ">
            Supported Devices
          </h3>
          <div className="grid md:grid-cols-3 md:gap-2.5 gap-3.5">
            <div className="md:py-[161px] md:px-[107px] py-[95.883px] px-[63.723px] bg-[#0B0B17] rounded-[16px] flex items-center justify-center">
              <div className="md:space-y-[34px] space-y-[20.249px]">
                <div className="rounded-full">
                  <Icons.linux2 />
                </div>
                <p className="md:text-[29.92px] text-[17.819px]  font-semibold text-center">
                  Linux
                </p>
              </div>
            </div>
            <div className="md:py-[161px] md:px-[107px] py-[95.883px] px-[63.723px] bg-[#0B0B17] rounded-[16px] flex items-center justify-center">
              <div className="md:space-y-[34px] space-y-[20.249px]">
                <div className="rounded-full">
                  <Icons.mac2 />
                </div>
                <p className="md:text-[29.92px] text-[17.819px]  font-semibold text-center">
                  MacOS
                </p>
              </div>
            </div>
            <div className="md:py-[161px] md:px-[107px] py-[95.883px] px-[63.723px] bg-[#0B0B17] rounded-[16px] flex items-center justify-center">
              <div className="md:space-y-[34px] space-y-[20.249px]">
                <div className="rounded-full">
                  <Icons.windows2 />
                </div>
                <p className="md:text-[29.92px] text-[17.819px]  font-semibold text-center">
                  Windows
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative max-w-[1235px] mx-auto md:py-[150px] py-[50px] space-y-[60px] px-5">
        <h3 className="md:text-[48px] text-[30px] font-bold leading-[100%] text-white ">
          3 Steps on how to earn
        </h3>
        <div className="grid md:grid-cols-3 gap-[18px]">
          <div className="bg-[#0B0B17] group md:space-y-[27px] space-y-[18.671px] w-full relative overflow-hidden md:py-6 md:px-[18px] p-3.5 rounded-[16px]">
            <div className="bg-white font-semibold learn-more-button-shadow md:text-base text-[11.064px] w-max flex items-center justify-center rounded-full py-2.5 md:px-5 px-4 text-black">
              1
            </div>
            <div className="rounded-full bg-white/5 p-[29.556px] relative w-max mx-auto">
              <div className="bg-white/5 p-[29.556px] mx-auto size-full group-hover:animate-ping rounded-full absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2" />
              <Icons.keyboardOpen />
            </div>
            <div className="md:space-y-4 space-y-[11.064px] md:max-w-[386px] max-w-[213.676px]">
              <h3 className="md:text-[29.92px] md:translate-y-10 duration-300 group-hover:translate-y-0 text-[20.69px] font-semibold">
                Create an account
              </h3>
              <div className="overflow-hidden">
                <p className="md:text-[17.111px] md:translate-y-10 md:group-hover:translate-y-0 delay-100 duration-300 text-[11.833px] text-white/80 ">
                  Log into your Idle account
                </p>
              </div>
            </div>
            <div className="h-[771.159px] w-[354.353px] rotate-[135deg] bg-[#31A88D] rounded-full absolute -bottom-[90%] right-[-55%] blur-[150px] opacity-20" />
          </div>
          <div className="bg-[#0B0B17] group md:space-y-[27px] space-y-[18.671px] w-full relative overflow-hidden md:py-6 md:px-[18px] p-3.5 rounded-[16px]">
            <div className="bg-white font-semibold learn-more-button-shadow md:text-base text-[11.064px] w-max flex items-center justify-center rounded-full py-2.5 md:px-5 px-4 text-black">
              2
            </div>
            <div className="rounded-full bg-white/5 p-[29.556px] relative w-max mx-auto">
              <div className="bg-white/5 p-[29.556px] mx-auto size-full group-hover:animate-ping rounded-full absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2" />
              <Icons.keyboardOpen />
            </div>
            <div className="md:space-y-4 space-y-[11.064px] md:max-w-[386px] max-w-[213.676px]">
              <h3 className="md:text-[29.92px] md:translate-y-10 duration-300 group-hover:translate-y-0 text-[20.69px] font-semibold">
                Download
              </h3>
              <div className="overflow-hidden">
                <p className="md:text-[17.111px] md:translate-y-10 md:group-hover:translate-y-0 delay-100 duration-300 text-[11.833px] text-white/80 ">
                  Download the IDLE FINANCE App
                </p>
              </div>
            </div>
            <div className="h-[771.159px] w-[354.353px] rotate-[135deg] bg-[#31A88D] rounded-full absolute -bottom-[90%] right-[-55%] blur-[150px] opacity-20" />
          </div>
          <div className="bg-[#0B0B17] group md:space-y-[27px] space-y-[18.671px] w-full relative overflow-hidden md:py-6 md:px-[18px] p-3.5 rounded-[16px]">
            <div className="bg-white font-semibold learn-more-button-shadow md:text-base text-[11.064px] w-max flex items-center justify-center rounded-full py-2.5 md:px-5 px-4 text-black">
              2
            </div>
            <div className="rounded-full bg-white/5 p-[29.556px] relative w-max mx-auto">
              <div className="bg-white/5 p-[29.556px] mx-auto size-full group-hover:animate-ping rounded-full absolute -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2" />
              <Icons.keyboardOpen />
            </div>
            <div className="md:space-y-4 space-y-[11.064px] md:max-w-[386px] max-w-[213.676px]">
              <h3 className="md:text-[29.92px] md:translate-y-10 duration-300 group-hover:translate-y-0 text-[20.69px] font-semibold">
                Earn
              </h3>
              <div className="overflow-hidden">
                <p className="md:text-[17.111px] md:translate-y-10 md:group-hover:translate-y-0 delay-100 duration-300 text-[11.833px] text-white/80 ">
                  Sign into your Idle account to start earning rewards
                </p>
              </div>
            </div>
            <div className="h-[771.159px] w-[354.353px] rotate-[135deg] bg-[#31A88D] rounded-full absolute -bottom-[90%] right-[-55%] blur-[150px] opacity-20" />
          </div>
        </div>
      </section>
      <section className="relative md:py-[156px] py-[50px] px-5">
        <div className="h-[771.159px] w-[354.353px] md:block hidden rotate-[40.486deg] bg-[#31A88D] rounded-full top-[10%] absolute left-[-15%] blur-[150px] opacity-20" />

        <div className="rounded-[18px] download-now max-w-[1235px] mx-auto relative z-10 flex flex-col items-center justify-center py-[65px] px-5 space-y-[71px]">
          <h3 className="md:text-[52.079px] text-[38.56px] max-w-[400px] font-medium text-center leading-[100%] text-white ">
            Download Idle App Now!
          </h3>
          <Button className="py-6 px-[58px] h-auto">Download Idle</Button>
        </div>
      </section>
      <section className="relative overflow-hidden pt-[181px]">
        {/* <div className="absolute w-full bg-bottom opacity-30 pointer-events-none">
          <section className="bg-[#000] md:block hidden -mb-80 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[942px]" />
          <Image
            src="/footer-1.png"
            alt="Hero Image"
            width={1284.961}
            height={827.2}
            className="w-full h-full object- pointer-events-none"
          />
        </div> */}
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
