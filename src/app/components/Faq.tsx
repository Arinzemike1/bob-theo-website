import Accordion from "../components/Accordion";

const FAQ = () => {
  const faqs = [
    {
      question:
        "How quickly can my balance be transferred to my card or bank account?",
      answer:
        "For a small fee, within 30 minutes of withdrawal for Koinage wallets with a minimum available balance of $5.",
    },
    {
      question:
        "Why do I have two different figures for balance and funds available for withdrawal?",
      answer:
        "The first figure shows the total amount that has been deposited into your account, and the second figure shows the actual amount you can withdraw less processing fee.",
    },
    {
      question:
        "What is the maximum amount of loose change I can receive in my Koinage wallet?",
      answer: "You can receive a maximum of $99.99 into your Koinage wallet.",
    },
    {
      question: "Can I make purchases with my Koinage account?",
      answer:
        "Yes, you can! Simply by withdrawing the amount available in your Koinage account to your bank account.",
    },
    {
      question: "How can I locate merchants that offer Koinage service?",
      answer:
        "Merchants that offer Koinage will place the Koinage logo at the counter next to the cashier. We will soon implement a map that displays all the merchants that offer Koinage near you.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-0 md:gap-20 my-10 md:my-28 mx-5 scroll-mt-24" id="faq">
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-3xl font-bold text-primary">
          Frequently Asked Questions
        </h1>
        <div className="mt-5 mb-10 w-full md:w-[500px]">
          <p className="text-sm md:text-lg !leading-7 !md:leading-9">
            Koinage is designed to be an intuitive and easy-to-use change-saver
            platform for merchants and customers! Still, have doubts? We
            collected our frequently asked questions in the following list for
            you, hoping that it will help! If you don&apos;t find the answer you are
            looking for, do not hesitate to contact us!
          </p>
        </div>
      </div>
      <div>
        <Accordion faqs={faqs} />
      </div>
    </div>
  );
};

export default FAQ;
