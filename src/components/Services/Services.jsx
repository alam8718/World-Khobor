import React from "react";
import Unibanner from "../Pages/Unibanner";
import ServicesCard from "./ServicesCard";
import Fotter from '../Fotter/Fotter'

function Services() {
  return (
    <>
    <div className="bg-[#2E3532] ">
      <Unibanner text="Our Services" />
      <div className=" flex justify-center flex-wrap md:gap-10 gap-5">
        <ServicesCard
          plans="Light Blogger"
          money={30}
          team={1}
          storage={10}
          api="Limited"
        />
        <ServicesCard
          plans="Power Blogger"
          money={69}
          team={10}
          storage={100}
          api="Unlimited"
        />
      </div>
    </div>
    <Fotter />
    </>
  );
}

export default Services;
