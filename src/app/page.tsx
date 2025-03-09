"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Image from "next/image";
import { Fragment } from "react";
import Link from "next/link";
import Icon from "./components/Icon";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/Faq";
import AppDownloadBanner from "./components/AppDownloadBanner";

const records = [
  {
    id: 1,
    count: "$846B",
    title: "US Retail cash sales (2023)",
    subtitle:
      "Cash continues to be the mode of payment for the unbanked and underbanked population around the globe",
  },
  {
    id: 2,
    count: "$48.5B",
    title: "Value of coins sitting in homes across the US",
    subtitle:
      "There is currently no viable best practice for collecting, conveying, or storing loose change",
  },
  {
    id: 3,
    count: "$3M",
    title: "Investment Goal",
    subtitle: "You can participate in our crowdfunding effort through Wefunder",
  },
];

export default function Home() {
  return (
    <Fragment>
      <Navbar />

      <main id="home">
        <div className="bg-[url('/bg-image.jpg')] rounded-b-3xl h-screen bg-cover flex justify-between flex-col md:flex-row items-center min-h-screen gap-10 md:gap-0 px-5 py-24 md:py-0 md:p-24">
          <div className="relative text-center md:text-left">
            <h1
              className="text-white font-beVietnam font-bold text-2xl md:text-[80px] leading-[40px] md:leading-[80px] md:w-[650px] pt-5 md:pt-0"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              Local urgent courier delivery services
            </h1>

            <p
              className="text-sm text-white md:text-lg font-medium pt-5 leading-7 w-full md:w-[600px]"
              data-aos="fade-up"
              data-aos-duration="1100"
            >
              Turn Your Loose Change into Opportunities: Effortlessly Convert
              Spare Coins into Investments, Transfers, Donations, and More with
              Koinage.
            </p>

            <div
              className="pt-[35px]"
              data-aos="fade-up"
              data-aos-duration="1300"
            >
              <div className="flex justify-center md:justify-start items-center gap-3 md:gap-5">
                <Link
                  href="https://apps.apple.com/us/app/koinage/id1641750746"
                  target="_blank"
                >
                  <Icon name="ios" rectColor="black" fillColor="white" />
                </Link>

                <Link
                  href="https://play.google.com/store/apps/details?id=com.koinageapp.app&hl=en_US"
                  target="_blank"
                >
                  <Icon name="android" rectColor="black" fillColor="white" />
                </Link>
              </div>
            </div>
          </div>

          {/* <div data-aos="fade-up" data-aos-duration="900">
            <Image
              src="/hero-image.jpg"
              width={720}
              height={1024}
              alt="Bob-theo hero image"
              priority
            />
          </div> */}
        </div>

        <div
          id="about"
          className="flex justify-center items-center rounded-e-2xl rounded-s-2xl mx-5 mt-5 mb-10 md:mb-28 p-5 md:p-20"
          style={{
            backgroundImage: "linear-gradient(to right, #175CFF 80%, #180f8a)",
          }}
        >
          <div className="grid md:grid-cols-2 justify-center items-center px-5 xl:px-0">
            <div>
              <p className="w-full md:w-10/12 text-2xl md:text-[40px] text-white font-bold leading-9 md:leading-[50px]">
                Invest in Koinage today and be part of our success story
              </p>
              <Link href="https://wefunder.com/koinage" target="_blank">
                <Button
                  className="flex flex-items gap-2 mt-5 my-10 md:mt-5"
                  secondary
                >
                  Invest In Koinage
                  <Icon name="arrow-right" />
                </Button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-5">
              {records.map((record) => (
                <div
                  key={record.id}
                  className="bg-white p-5 rounded-lg cursor-pointer"
                >
                  <p className="text-4xl font-bold text-primary">
                    {record.count}
                  </p>
                  <p className="font-bold py-3">{record.title}</p>
                  <p className="font-medium">{record.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-28 px-6 md:px-20 mb-10 md:mb-28 text-center md:text-left">
          <div className="w-full md:w-[500px] flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-4xl font-bold">For Merchants</h1>
            <p className="leading-8 md:!leading-9 pt-5 text-sm md:text-lg">
              Constantly dealing with and processing change can be frustrating
              and expensive for Merchants. With Koinage you eliminate the need
              to handle change by electronically paying your customers the
              correct change through a simple QR-Code scan and digital
              transaction.
            </p>
            <Link href="/contact-us" target="_blank">
              <Button className="flex flex-items gap-2 mt-10" primary>
                Contact Us
                <Icon name="arrow-right" />
              </Button>
            </Link>
          </div>

          <div>
            <Image
              src="/merchant.jpg"
              className="rounded-xl"
              width={700}
              height={500}
              alt="Merchant image"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-28 p-6 md:p-20 mb-20 md:mb-28 text-center md:text-left">
          <div>
            <Image
              src="/shoppers.jpg"
              className="rounded-xl shadow-lg"
              width={700}
              height={500}
              alt="Shoppers image"
            />
          </div>
          <div className="w-full md:w-[500px] flex flex-col items-center md:items-start">
            <h1 className="text-2xl md:text-4xl font-bold">For Shoppers</h1>
            <p className="leading-8 md:!leading-9 pt-5 text-sm md:text-lg">
              Shoppers should not spend valuable time counting loose change or
              awkwardly asking for change. Koinage provides a convenient way to
              receive change through a simple electronic transaction. Simply
              scan your unique QR-Code on your Koinage app to receive your
              change electronically, and carry on with your day. Yes!! The ease
              of managing loose change is possible today.
            </p>
            <Link href="/" target="_blank">
              <Button className="flex flex-items gap-2 mt-10" primary>
                Download Koinage
                <Icon name="arrow-right" />
              </Button>
            </Link>
          </div>
        </div>

        <HowItWorks />
        <FAQ />
        <AppDownloadBanner />
      </main>
      <Footer />
    </Fragment>
  );
}
