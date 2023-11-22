import React from "react";
import Fotter from "../Fotter/Fotter";
import Unibanner from "../Pages/Unibanner";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <>
      <Unibanner text="Contact Us" />
      <div>
        <ContactCard />
      </div>
      <Fotter />
      
    </>
  );
}

export default Contact;
