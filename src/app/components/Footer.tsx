import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-5 border-top">
      <div className="flex justify-center px-5">
        <div className="flex flex-wrap justify-center items-center gap-10">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Koinage. All Rights Reserved
          </p>

          <Link href="/privacy-policy" className="text-sm hover:text-primary">
            Privacy Policy
          </Link>
          <Link href="/faq" className="text-sm hover:text-primary">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
