import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import AppDownloadBanner from "../components/AppDownloadBanner";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen my-20">
        <div className="bg-[url('/blue-background.png')] bg-cover bg-no-repeat h-[30vh] md:h-[50vh]">
          <h1 className="text-base md:text-3xl text-white font-bold w-full md:w-2/3 px-5 mx-auto flex items-center text-center h-[30vh] md:h-[50vh] leading-[30px] md:leading-[45px]">
            We know the inconvenience of carrying around pockets full of coins,
            so we decided to do something about it!
          </h1>
        </div>

        <div className="px-5 md:px-36 mt-10">
          <Image
            src="/about-us.png"
            width={1906}
            height={1318}
            alt="About us image"
          />
        </div>
      </div>

      <AppDownloadBanner />
      <Footer />
    </>
  );
};

export default page;
