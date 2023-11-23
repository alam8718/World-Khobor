import React from "react";
import Unibanner from "../Pages/Unibanner";
import ContactCard from "./ContactCard";
import Fotter from '../Fotter/Fotter'
function Contact() {
  return (
    <>
      <Unibanner text="Contact Us" />
      <div className="my-[200px]">
        <ContactCard />
      </div>
      <Fotter />
    </>
  );
}

export default Contact;
