"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import Button from "./Button";

const Navbar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeBackground);
    }
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 flex items-center justify-between z-10 px-6 md:px-[100px] py-5 ${
        nav && "bg-[#1C3441]"
      }`}
    >
      <Link href="/">
        {/* <Image
          src="/logo.png"
          className="hidden md:block"
          width={150}
          height={43}
          alt="Koinage Logo"
        /> */}
        <div className="font-bold text-2xl text-white">BOB THEO</div>
        <Image
          src="/logo.png"
          className="md:hidden"
          width={130}
          height={30}
          alt="Koinage Logo"
        />
      </Link>
      <ul className="hidden md:flex items-center gap-12 text-offwhite">
        <li
          className={`text-sm font-semibold hover:text-white ${
            pathname === "/"
              ? "text-white underline-animation"
              : "landing-page-hover"
          }`}
        >
          <Link href="/#home">Home</Link>
        </li>
        <li
          className={`text-sm font-semibold hover:text-white ${
            pathname === "/#how-it-works"
              ? "text-white underline-animation"
              : "landing-page-hover"
          }`}
        >
          <Link href="/#how-it-works">How It Works</Link>
        </li>
        <li
          className={`text-sm font-semibold hover:text-white ${
            pathname === "/about"
              ? "text-primary underline-animation"
              : "landing-page-hover"
          }`}
        >
          <Link href="/about">About Us</Link>
        </li>
        <li
          className={`text-sm font-semibold hover:text-white ${
            pathname === "/#faq"
              ? "text-primary underline-animation"
              : "landing-page-hover"
          }`}
        >
          <Link href="/#faq">FAQ</Link>
        </li>
      </ul>
      <Icon
        name={isOpen ? "close-menu" : "hamburger"}
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      />

      <div
        className={`fixed top-0 right-0 h-full bg-white w-full transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4">
          <Link href="/">
            <Image
              src="/logo.png"
              className="hidden md:block"
              width={164}
              height={43}
              alt="Koinage Logo"
            />
            <Image
              src="/logo.png"
              className="md:hidden"
              width={120}
              height={38}
              alt="Koinage Logo"
            />
          </Link>

          <Icon name="close-menu" onClick={() => setIsOpen(false)} />
        </div>
        <nav className="flex flex-col items-center space-y-6 mt-10 px-6">
          <Link
            href="/#home"
            className={`text-sm font-semibold hover:text-primary ${
              pathname === "/#home"
                ? "text-primary underline-animation"
                : "landing-page-hover"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/#how-it-works"
            className={`text-sm font-semibold hover:text-primary ${
              pathname === "/#how-it-works"
                ? "text-primary underline-animation"
                : "landing-page-hover"
            }`}
            onClick={() => setIsOpen(false)}
          >
            How It Works
          </Link>

          <Link
            href="/about"
            className={`text-sm font-semibold hover:text-primary ${
              pathname === "/about"
                ? "text-primary underline-animation"
                : "landing-page-hover"
            }`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>

          <Link
            href="/#faq"
            className={`text-sm font-semibold hover:text-primary ${
              pathname === "/#faq"
                ? "text-primary underline-animation"
                : "landing-page-hover"
            }`}
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact-us"
            className={`text-sm font-semibold hover:text-primary ${
              pathname === "/contact-us"
                ? "text-primary underline-animation"
                : "landing-page-hover"
            }`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>

      <Link href="/contact-us" className="hidden md:block">
        <Button className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black">
          Contact Us
        </Button>
      </Link>
    </header>
  );
};

export default Navbar;
