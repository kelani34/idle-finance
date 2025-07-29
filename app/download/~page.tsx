import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <main className="space-y-[98px] pt-[181px] overflow-hidden">
      <section className="container flex md:flex-row gap-4 flex-col items-center justify-between mx-auto">
        <div className="md:space-y-[80px] space-y-[40px] max-w-[699px]">
          <div className="md:space-y-[31px] space-y-[24px]">
            <h2 className="font-medium md:text-[40px] text-[35px] font-satoshi">
              Download the Idle Finance App
            </h2>
            <p className="md:text-[30px] text-[24px] font-satoshi">
              Keep Idle Finance running in the background to earn. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes,
            </p>
          </div>
          <Button className="py-4 px-5 md:w-max w-full h-auto rounded-[71.112px] border-[#374EFF] border-2 gap-[9.046px] text-[21.711px] font-medium">
            <Icons.window />
            Download now
          </Button>
        </div>
        <div className="rounded-[20.257px] border-[0.723px] border-[rgba(89,229,133,0.1)] opacity-90 bg-[#111213] md:px-[136px] md:w-max w-full flex items-center justify-center py-[90.74px]">
          <Icons.window3 />
        </div>
      </section>

      <section className="bg-[#000] md:block hidden -mb-80 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[442px]" />
      <section className="bg-[url(/footer-1.png)] bg-no-repeat bg-cover bg-bottom space-y-[98px]">
        <section className="container mx-auto z-10 relative">
          <Image
            src="/download-1.png"
            alt="Hero Image"
            width={1284.961}
            height={827.2}
            className="mx-auto"
          />
        </section>
        <Footer />
      </section>
    </main>
  );
};

export default Page;
