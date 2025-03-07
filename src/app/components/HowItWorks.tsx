"use client";

import { ReactElement, useState } from "react";
import useScreenWidth from "../hooks/useScreenWidth";

interface ComponentMapping {
  [key: number]: ReactElement;
}

const DownloadKoinage = () => (
  <div className="text-center md:text-left">
    <p className="font-semibold text-2xl">01</p>
    <p className="text-primary text-3xl py-5 font-semibold">Download</p>
    <p className="w-full md:w-[500px] text-base md:text-lg px-5 md:px-0">
      All you need is an iOS or Android ready smart phone or tablet to download
      the Koinage® app and create your account. You will be assigned a unique QR
      code.
    </p>
  </div>
);

const CashPurchase = () => (
  <div className="text-center md:text-left">
    <p className="font-semibold text-2xl">02</p>
    <p className="text-primary text-3xl py-5 font-semibold">
      Make a cash purchase
    </p>
    <p className="w-full md:w-[500px] text-base md:text-lg px-5 md:px-0">
      You are likely to receive change when you make a cash purchase.
    </p>
  </div>
);

const ScanQR = () => (
  <div className="text-center md:text-left">
    <p className="font-semibold text-2xl">03</p>
    <p className="text-primary text-3xl py-5 font-semibold">Scan QR code</p>
    <p className="w-full md:w-[500px] text-base md:text-lg px-5 md:px-0">
      Present your QR code to the merchant.
    </p>
  </div>
);

const TakeChange = () => (
  <div className="text-center md:text-left">
    <p className="font-semibold text-2xl">04</p>
    <p className="text-primary text-3xl py-5 font-semibold">
      Leave with Your Change
    </p>
    <p className="w-full md:w-[500px] text-lg">
      Accept and leave with your change in the Koinage® app. You can either keep
      your change on the app, invest, donate, or connect to your bank, credit,
      debit, or prepaid card and transfer your change directly in seconds
    </p>
  </div>
);

const HowItWorks = () => {
  const [activeItem, setActiveItem] = useState(1);
  const screenWidth = useScreenWidth();

  const walkThroughComponentMapping: ComponentMapping = {
    1: <DownloadKoinage />,
    2: <CashPurchase />,
    3: <ScanQR />,
    4: <TakeChange />,
  };

  const selectedAction = walkThroughComponentMapping[activeItem];

  return (
    <div
      className="flex flex-col items-center text-center scroll-mt-32"
      id="how-it-works"
    >
      <h1 className="text-2xl md:text-4xl font-bold">How It Works</h1>
      <p className="w-full md:w-[600px] text-base md:text-lg pt-5 px-5 md:px-0 leading-8">
        A simple peer-to-peer app and anytime you need your change you will
        receive it quickly and directly into your bank account.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28 mt-5 md:mt-10">
        <div className="mb-10">{selectedAction}</div>
      </div>

      <div className="my-5">
        <iframe
          width={screenWidth < 700 ? "320" : "966"}
          height={screenWidth < 700 ? "150" : "543"}
          src="https://www.youtube.com/embed/jle0cE7NVcw"
          className="rounded-2xl"
          title="Koinage App - How it works"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default HowItWorks;
