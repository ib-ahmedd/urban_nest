import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { questionProps } from "@types";

function Question({ question, open, id, handleOpen }: questionProps) {
  return (
    <>
      <button
        className="w-full flex justify-between font-bold text-sm md:text-base text-site-blue p-3 text-left border-b border-[#999]"
        onClick={() => {
          handleOpen(id);
        }}
      >
        {question}
        <span className="text-xl">
          <FontAwesomeIcon icon={open === id ? faMinus : faPlus} />
        </span>
      </button>
      <p
        className={`w-full overflow-hidden px-3 ${open === id && "py-3"}`}
        style={{
          borderBottom: "1px solid #999",
          height: open === id ? "7em" : "0",
          transition: "0.5s",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </p>
    </>
  );
}

export default Question;
