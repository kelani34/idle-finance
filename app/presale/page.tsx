"use client";

import { Footer } from "@/components/footer";
import { AnimatePresence, motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Icons } from "@/components/ui/icons";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";

const FormSchema = z.object({
  sendAmount: z.string({ error: "Send amount is required" }),
  receiveAmount: z.string({ error: "Receive amount is required" }),
  receiveAddress: z.string({ error: "Receiver address is required" }),
  refundWallet: z.string({ error: "Refund wallet is required" }),
  isAddressConfirmed: z.boolean().refine((val) => val, {
    message: "You must confirm the address",
  }),
  selectedChain: z.enum(["base", "sol"], {
    error: "Please select a valid chain",
  }),
});

const Page = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      selectedChain: "base",
    },
  });

  const RECEIVE_BASE_ADDRESS = "0x0072752A1a60959D1FA7881EE0911FB71a7e1815";
  const RECEIVE_SOL_ADDRESS = "CL5PHNFP2AA9tedXZCkMcf5WE1jJ3qs7x8hWYU6igpVJ";

  const CONVERSION_RATES = {
    base: 500,
    sol: 300,
  } as const;

  const lastEdited = useRef<"send" | "receive" | null>(null);
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("confirm");
      return stored === "true";
    }
    return false;
  });
  const [showSummary, setShowSummary] = useState(false);

  const selectedChain = form.watch("selectedChain") || "base";
  const sendAmount = form.watch("sendAmount");
  const receiveAmount = form.watch("receiveAmount");
  const receiveAddress = form.watch("receiveAddress");
  const refundWallet = form.watch("refundWallet");
  const currentRate =
    CONVERSION_RATES[selectedChain as keyof typeof CONVERSION_RATES];

  useEffect(() => {
    localStorage.setItem("confirm", String(confirm));
  }, [confirm]);

  useEffect(() => {
    const send = parseFloat(sendAmount);
    const receive = parseFloat(receiveAmount);

    if (lastEdited.current === "send") {
      if (!Number.isNaN(send)) {
        const calculated = (send * currentRate).toString();
        if (calculated !== receiveAmount) {
          form.setValue("receiveAmount", calculated, { shouldValidate: true });
        }
      } else {
        form.setValue("receiveAmount", "", { shouldValidate: true });
      }
    }

    if (lastEdited.current === "receive") {
      if (!Number.isNaN(receive)) {
        const calculated = (receive / currentRate).toString();
        if (calculated !== sendAmount) {
          form.setValue("sendAmount", calculated, { shouldValidate: true });
        }
      } else {
        form.setValue("sendAmount", "", { shouldValidate: true });
      }
    }
  }, [sendAmount, receiveAmount, currentRate, form]);

  const handleCopy = () => {
    const textToCopy =
      selectedChain === "base" ? RECEIVE_BASE_ADDRESS : RECEIVE_SOL_ADDRESS;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        toast.success("Address copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy address.");
      });
  };

  function onSubmit() {
    setLoading(true);

    const toastId = toast.loading("Submitting transaction...");
    setTimeout(() => {
      setLoading(false);
      setShowSummary(true);

      toast.success("Transaction submitted successfully!", {
        id: toastId,
      });
    }, 2000);
  }

  return (
    <main className="space-y-[98px]">
      <section className="relative overflow-hidden  pt-[181px]">
        <div className="absolute w-full  bg-bottom opacity-30 pointer-events-none">
          <section className="bg-[#000] md:block hidden -mb-80 blur-[56.80000305175781px]  w-[150%] -translate-x-[20%] h-[942px]" />
          <Image
            src="/footer-1.png"
            alt="Hero Image"
            width={1284.961}
            height={827.2}
            className="w-full h-full object- pointer-events-none"
          />
        </div>

        <div className="space-y-[298px]">
          <AnimatePresence mode="wait">
            {!showSummary && (
              <div className="max-w-[1128px] mx-auto z-10 relative flex md:flex-row flex-col gap-[65px]">
                {!confirm && (
                  <motion.div
                    key="presale"
                    className="rounded-[28px] max-w-[443px] md:m-0 m-2 relative md:w-full md:h-[552px] flex flex-col gap-10 justify-between border border-white/[0.00] py-[37px] px-[22px] bg-[linear-gradient(152deg,#0B0910_-8%,#0B0910_7.9%,#0B0910_72.61%,#093518_104.1%)]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -40 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="absolute inset-0 bg-[url('/presale-1.png')] bg-cover bg-center opacity-30 pointer-events-none" />
                    <div className="space-y-8">
                      <h2 className="md:text-[32px] text-2xl text-[#DFDFDF] font-medium">
                        $Idle Presale info
                      </h2>
                      <p className="md:text-xl text-[#6C6C6C] font-medium">
                        To contribute to the ICO, please send your funds of any
                        denomination to the address below. Your contribution
                        will be logged on chain to ensure your airdrop will be
                        received on our token generation event.
                      </p>
                    </div>
                    <Button
                      onClick={() => setConfirm(true)}
                      className="text-black font-semibold w-full rounded-[8px] h-auto p-4 bg-[linear-gradient(90deg,#B9F8EF_0%,#07FDF4_53.61%,#9EEC46_100%)] shadow-[0px_10px_30px_0px_rgba(26,146,82,0.40)]"
                    >
                      Confirm
                    </Button>
                  </motion.div>
                )}
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{
                    opacity: confirm ? 1 : 0.3,
                    y: 0,
                    pointerEvents: confirm ? "auto" : "none",
                  }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.4 }}
                  className="md:w-full m-2"
                >
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="max-w-[620px] w-full mx-auto z-10 relative"
                    >
                      <div className="bg-[#0A0B0B] border border-white/5 rounded-[28px] relative">
                        <h2 className="md:text-[30px] text-2xl md:p-[34px] p-4 text-[#B9CBE3] font-semibold">
                          Buy $Idle Finance Presale{" "}
                        </h2>
                        <Separator />
                        <div className="md:px-[34px] px-4 space-y-[38px] md:py-[25px] py-4">
                          <p className="text-[#B9CBE3] md:text-xl ">
                            Please fill in transaction details
                          </p>

                          <div className="space-y-[58px]">
                            <div className="">
                              {/* You Send Section */}

                              <FormField
                                control={form.control}
                                name="sendAmount"
                                render={({ field }) => (
                                  <FormItem className="space-y-3">
                                    <FormLabel className="text-[#B3B3B3] md:text-lg mb-3 block">
                                      You Send
                                    </FormLabel>
                                    <div className="relative">
                                      <FormControl>
                                        <Input
                                          type="number"
                                          placeholder="0.0"
                                          className="rounded-xl border-white/[0.05] p-5 h-auto !text-[30px] !font-semibold !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                                          {...field}
                                          onChange={(e) => {
                                            lastEdited.current = "send";
                                            field.onChange(e);
                                          }}
                                        />
                                      </FormControl>

                                      <FormField
                                        control={form.control}
                                        name="selectedChain"
                                        render={({ field }) => (
                                          <FormItem>
                                            <Select
                                              onValueChange={field.onChange}
                                              defaultValue={field.value}
                                            >
                                              <FormControl>
                                                <SelectTrigger className="!bg-transparent p-0 border-none !text-2xl absolute right-4 top-1/2 -translate-y-1/2 shadow-none focus:ring-0">
                                                  <SelectValue />
                                                </SelectTrigger>
                                              </FormControl>
                                              <SelectContent className="bg-[#242323] border-[#333333]">
                                                <SelectItem
                                                  value="base"
                                                  className="text-white !text-2xl"
                                                >
                                                  <Icons.base />
                                                  Base
                                                </SelectItem>
                                                <SelectItem
                                                  value="sol"
                                                  className="text-white !text-2xl"
                                                >
                                                  <Icons.sol />
                                                  Sol
                                                </SelectItem>
                                              </SelectContent>
                                            </Select>
                                            <FormMessage />
                                          </FormItem>
                                        )}
                                      />
                                    </div>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* Arrow */}
                              <div className="mx-auto w-max">
                                <Icons.arrowSwap />
                              </div>

                              <FormField
                                control={form.control}
                                name="receiveAmount"
                                render={({ field }) => (
                                  <FormItem className="space-y-3">
                                    <FormLabel className="text-[#B3B3B3] text-lg mb-3 block">
                                      You Get
                                    </FormLabel>
                                    <div className="relative">
                                      <FormControl>
                                        <Input
                                          type="number"
                                          placeholder="0.0"
                                          className="rounded-xl border-white/[0.05] p-5 h-auto !text-[30px] !font-semibold !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                                          {...field}
                                          onChange={(e) => {
                                            lastEdited.current = "receive";
                                            form.setValue(
                                              "receiveAmount",
                                              e.target.value,
                                              { shouldValidate: true },
                                            );
                                          }}
                                        />
                                      </FormControl>
                                      <div className="text-white absolute right-5 top-1/2 -translate-y-1/2 flex gap-1.5 text-2xl">
                                        <Icons.idle />
                                        $Idle
                                      </div>
                                    </div>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />

                              {/* Conversion Rate */}
                              <div className="flex items-center gap-5 py-[38px]">
                                <Separator className="flex-1" />
                                <span className="text-[#B9CBE3]">
                                  1 {selectedChain.toUpperCase()} ≈{" "}
                                  {currentRate} $Idle
                                </span>
                                <Separator className="flex-1" />
                              </div>
                            </div>

                            <FormField
                              control={form.control}
                              name="receiveAddress"
                              render={({ field }) => (
                                <FormItem className="space-y-3">
                                  <FormLabel className="text-[#B3B3B3] text-lg  mb-3 block">
                                    Wallet to receive $IDLE token
                                  </FormLabel>
                                  <div className="bg-gradient-to-r rounded-xl from-blue-500 via-blue-400 to-green-400 p-0.5">
                                    <FormControl>
                                      <Input
                                        placeholder={`Enter the ${selectedChain.toUpperCase()} wallet Address `}
                                        className="rounded-xl border-white/[0.05] p-5 h-auto !text-base !font-semibold  !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                                        {...field}
                                      />
                                    </FormControl>
                                  </div>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="refundWallet"
                              render={({ field }) => (
                                <FormItem className="space-y-3">
                                  <FormLabel className="text-[#B3B3B3] text-lg  mb-3 block">
                                    Refund Wallet
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder={`Enter the ${selectedChain.toUpperCase()} wallet Address `}
                                      className="rounded-xl border-white/[0.05] p-5 h-auto !text-base !font-semibold  !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="isAddressConfirmed"
                              render={({ field }) => {
                                return (
                                  <FormItem className="flex items-center space-x-2 mb-8">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                        onBlur={field.onBlur}
                                        className="border-[#D6D6D6] border-3 rounded-none data-[state=checked]:bg-[#0052ff] data-[state=checked]:border-[#0052ff]"
                                      />
                                    </FormControl>
                                    <FormLabel className="text-[#D6D6D6] text-sm cursor-pointer">
                                      My wallet address was pasted correctly.
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />

                            {/* Confirm Transaction Button */}
                            <Button
                              type="submit"
                              disabled={loading}
                              className="w-full rounded-[8px] h-auto p-5 text-white font-semibold border-white/[0.05]  !bg-[#2A2A2A] hover:bg-[#2A2A2A]/80 shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                            >
                              {loading
                                ? "Submitting..."
                                : "Confirm Transaction"}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </Form>
                </motion.div>
              </div>
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
                className="max-w-[1074px] mx-auto z-10 space-y-[26px] relative"
              >
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowSummary(false);
                    form.reset();
                  }}
                  className="text-xl !p-2.5 h-auto rounded-[12px] !bg-[#01010D] text-[#B9CBE3]"
                >
                  <ChevronLeft size={24} className="size-6" />
                  Back
                </Button>
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
                  <div className="md:py-[26px] md:px-[49px] p-4 flex md:flex-row flex-col items-center justify-between">
                    <div className="max-w-[533px] w-full space-y-[34px]">
                      <div className="space-y-3">
                        <Label
                          htmlFor="get"
                          className="text-[#B3B3B3] text-lg mb-3 block"
                        >
                          You Send
                        </Label>
                        <div className="relative">
                          <Input
                            id="get"
                            value={sendAmount}
                            className="rounded-xl border-white/[0.05] p-5 h-auto !text-[30px] !font-semibold !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                            placeholder="0.0"
                          />

                          <div className="text-white absolute right-5 top-1/2 -translate-y-1/2 flex gap-1.5 text-2xl">
                            <Icons.sol />
                            Sol
                          </div>
                        </div>
                      </div>
                      <div className="mb-6">
                        <Label
                          htmlFor="get"
                          className="text-[#B3B3B3] text-lg mb-3 block"
                        >
                          To this address
                        </Label>
                        <div className="relative">
                          <Textarea
                            id="get"
                            value={
                              selectedChain === "base"
                                ? RECEIVE_BASE_ADDRESS
                                : RECEIVE_SOL_ADDRESS
                            }
                            className="rounded-xl border-white/[0.05] p-5 pr-14 resize-none h-auto !text-[30px] !font-semibold !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
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

                <div className="rounded-[28px] m-2 md:p-12 p-4 bg-[#0A0B0B] border border-white/[0.05] flex items-center gap-[28px]">
                  <div className="md:block hidden">
                    <Icons.disclaimer />
                  </div>
                  <div className="space-y-[1px]">
                    <div className="flex gap-2 items-center">
                      <div className="md:hidden">
                        <Icons.disclaimer />
                      </div>
                      <h2 className="text-[#B9CBE3] text-[30px] font-semibold leading-normal">
                        Disclaimer
                      </h2>
                    </div>
                    <p className="text-[#B3B3B3] text-xl leading-normal">
                      If you send from a different address than the one entered
                      in the field, it won't be counted, as we can't verify that
                      address. Only the Base EVM address provided will be
                      eligible to receive $IDLE tokens.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] m-2 overflow-hidden bg-[#0A0B0B] border border-white/[0.05] ">
                  <h2 className="md:text-[30px] text-2xl text-[#B9CBE3] font-semibold md:px-[34px] md:py-[29px] p-4">
                    Recipient's info
                  </h2>
                  <Separator />
                  <div className="flex md:flex-row flex-col-reverse justify-between items-center">
                    <Image
                      src="/download-2.svg"
                      alt="qr code"
                      className="flex-1 md:w-max w-full"
                      width={283.76}
                      height={283.76}
                    />
                    <div className="space-y-[36px] md:pr-[85px] p-4 max-w-[533px] w-full ">
                      <div className="space-y-3">
                        <Label
                          htmlFor="get"
                          className="text-[#B3B3B3] text-lg mb-3 block"
                        >
                          You Get
                        </Label>
                        <div className="relative">
                          <Input
                            id="get"
                            value={receiveAmount}
                            className="rounded-xl border-white/[0.05] p-5 h-auto !text-[30px] !font-semibold !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                            placeholder="0.0"
                          />

                          <div className="text-white absolute right-5 top-1/2 -translate-y-1/2 flex gap-1.5 text-2xl">
                            <Icons.idle />
                            $Idle
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="wallet-address"
                          className="text-[#B3B3B3] text-lg  mb-3 block"
                        >
                          Wallet to receive $IDLE token
                        </Label>

                        <Input
                          id="wallet-address"
                          value={receiveAddress}
                          className="rounded-xl border-white/[0.05] p-5 h-auto !text-base !font-semibold  !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                          placeholder="Enter the Base wallet Address "
                        />
                      </div>
                      <div className="space-y-3">
                        <Label
                          htmlFor="wallet-address"
                          className="text-[#B3B3B3] text-lg  mb-3 block"
                        >
                          Refund Wallet
                        </Label>

                        <Input
                          id="wallet-address"
                          value={refundWallet}
                          className="rounded-xl border-white/[0.05] p-5 h-auto !text-base !font-semibold  !bg-[#0E0E0E] shadow-[2px_4px_8px_0px_rgba(0,0,0,0.08)] backdrop-blur-[3px] blur-[0.10000000149011612px]"
                          placeholder="Enter the Base wallet Address "
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default Page;
