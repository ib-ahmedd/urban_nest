import { useState } from "react";

function FAQsForm() {
  const [formSubmited, setSubmitted] = useState(false);
  return (
    <form
      className="md:-mt-20 slg:mb-20 flex flex-col gap-6 text-white bg-site-blue w-full slg:w-1/2 px-4 md:px-8 xl:px-12 py-8 md:py-20"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      data-aos="fade-right"
    >
      <h3>Request a Quote</h3>
      {!formSubmited ? (
        <>
          <p>Ready to Work Together? Build a project with us!</p>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Message" />
          <button className="solid_btn">SEND MESSAGE</button>
        </>
      ) : (
        <p className="text-site-gray mb-[25em]">
          Thank you for contacting us, we will get back to you shortly
        </p>
      )}
    </form>
  );
}

export default FAQsForm;
