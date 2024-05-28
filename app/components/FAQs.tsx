"use client";
import { FAQsArray } from "@constants";
import FAQsForm from "./FAQsForm";
import Question from "./Question";
import { useState } from "react";

function FAQs() {
  const [open, setOpen] = useState(1);

  function handleOpen(id: number) {
    if (id === open) return setOpen(0);
    setOpen(id);
  }
  return (
    <section className="width_parent mt-12 md:mt-40 pb-12 lg:pb-0 bg-[#F5F5F5]">
      <div className="width_container flex flex-col slg:flex-row justify-between">
        <FAQsForm />
        <div className="w-full slg:w-2/5 mt-8 slg:mt-20 flex flex-col gap-8">
          <h2 className="text-site-yellow">Learn More From</h2>
          <h3 className="text-site-blue">Frequently Asked Questions</h3>
          <div className="border border-[#999] border-collapse">
            {FAQsArray.map((item) => (
              <Question
                key={item.question}
                open={open}
                handleOpen={handleOpen}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
