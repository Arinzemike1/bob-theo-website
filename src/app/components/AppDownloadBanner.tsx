import React from "react";
import Link from "next/link";
import Icon from "./Icon";

const AppDownloadBanner = () => {
  return (
    <div className="mt-10 flex flex-col items-center bg-[url('/blue-background.png')] bg-cover bg-no-repeat h-auto py-24">
      <div className="w-full md:w-2/3 px-5 flex items-center justify-center text-center h-auto">
        <p className="text-base md:text-3xl text-white font-bold leading-[30px] md:leading-[45px]">
          Get started today and keep your change.
        </p>
      </div>

      <div className="pt-[35px]">
        <div className="flex justify-center md:justify-start items-center gap-3 md:gap-5">
          <Link
            href="https://apps.apple.com/us/app/koinage/id1641750746"
            target="_blank"
          >
            <Icon name="ios" rectColor="white" fillColor="black" />
          </Link>

          <Link
            href="https://play.google.com/store/apps/details?id=com.koinageapp.app&hl=en_US"
            target="_blank"
          >
            <Icon name="android" rectColor="white" fillColor="black" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadBanner;
