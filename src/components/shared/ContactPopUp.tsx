"use client";
import React from "react";
interface Props {
  setOpenPopUp: (i: boolean) => void;
}
const ContactPopUp: React.FC<Props> = ({ setOpenPopUp }) => {
  return (
    <div onClick={() => setOpenPopUp(false)} className="overlay-contact">
      <div className=" w-[352px] h-[321px] border"></div>
    </div>
  );
};

export default ContactPopUp;
