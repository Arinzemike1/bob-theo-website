"use client";

import { ReactNode, useRef, useState } from "react";
import Icon from "./Icon";

interface AccordionProps {
  question: string;
  answer: ReactNode;
  isOpen: boolean;
  toggle: () => void;
  hasList?: boolean;
  listItems?: string[];
}

interface faqItem {
  question: string;
  answer: ReactNode;
  hasList?: boolean;
  listItems?: string[];
}

interface faqsProps {
  faqs: faqItem[];
}

const AccordionItem: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  toggle,
  hasList,
  listItems,
}) => {
  const contentRef: React.RefObject<HTMLDivElement | null> = useRef(null);

  return (
    <div>
      <div
        className="p-4 font-semibold flex justify-between items-center text-sm md:text-base"
        onClick={toggle}
      >
        <span>{question}</span>
        <Icon name={isOpen ? "caret-top" : "caret-down"} />
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0px",
        }}
      >
        <div className="px-4 py-2 text-gray-700 text-[15px] leading-7">
          {answer}

          {hasList && (
            <ul className="px-4">
              {listItems?.map((item, index) => (
                <li className="text-[15px] list-disc" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const Accordion = ({ faqs }: faqsProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number | null) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="w-full md:w-[600px]">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-[#fafafa] mb-5 shadow-sm cursor-pointer">
          <AccordionItem
            question={faq.question}
            answer={faq.answer}
            isOpen={index === openIndex}
            toggle={() => toggleItem(index)}
            hasList={faq.hasList}
            listItems={faq.listItems}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
