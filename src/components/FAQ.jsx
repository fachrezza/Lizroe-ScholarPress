import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We provide journal publication assistance, proofreading, plagiarism reduction, proposal mentoring, and data analysis services.",
  },
  {
    question: "Do you assist Scopus and Sinta publications?",
    answer:
      "Yes, we assist publications for Scopus indexed journals (Q1-Q4) and Sinta journals.",
  },
  {
    question: "Can I consult before ordering?",
    answer:
      "Of course. Consultation is available through WhatsApp before starting any service.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Processing time depends on the selected service and journal category.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes, revisions are available according to the agreed service scope.",
  },
  {
    question: "Is my document confidential?",
    answer:
      "Yes, all client documents and research data are kept confidential and secure.",
  },
  {
    question: "Can you help reduce plagiarism?",
    answer:
      "Yes, plagiarism reduction is handled professionally and manually.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-28 px-6 bg-[#F3F7F3]">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Find answers to common questions about our academic
            and journal publication services.
          </p>
        </div>

        {/* FAQ List */}
        <div className="mt-16 space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                border-gray-200
                rounded-3xl
                overflow-hidden
                transition
                duration-300
                hover:shadow-lg
              "
            >

              {/* Question */}
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  p-6
                  text-left
                "
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`
                    text-green-500
                    transition-transform
                    duration-300
                    ${open === index ? "rotate-180" : ""}
                  `}
                />
              </button>

              {/* Answer */}
              <div
                className={`
                  grid
                  transition-all
                  duration-300
                  ${
                    open === index
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }
                `}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}