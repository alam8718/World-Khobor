import React from "react";

function ContactCard() {
  return (
    <>
      <div className="px-5 container mx-auto my-10  ">
        <form className="flex  flex-col lg:w-[50%] ">
          <input
            type="text"
            className="bg-slate-200 outline-none ring-1 ring-purple-400 rounded-lg my-3 placeholder:text-black p-3 "
            placeholder="Your Name "
          />
          <input
            type="text"
            className="bg-slate-200 outline-none ring-1 ring-purple-400 rounded-lg my-3 placeholder:text-black p-3 "
            placeholder="Your Email "
          />
          <textarea
            type="text"
            rows={5}
            className="bg-slate-200 outline-none ring-1 ring-purple-400 rounded-lg my-3 placeholder:text-black p-3 "
            placeholder="Your Name "
          />
        </form>
        <button className="px-12 font-semibold py-1 rounded-lg bg-amber-400">
          Submit
        </button>
      </div>
    </>
  );
}

export default ContactCard;
