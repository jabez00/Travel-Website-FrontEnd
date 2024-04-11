import React from "react";
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import KeyWest from "../assets/keywest.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import SelectCard from "./SelectCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] gap-4 mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3">
      <SelectCard bg={BoraBora} name="Bora Bora" />
      <SelectCard bg={BoraBora2} name="Antigua" />
      <SelectCard bg={KeyWest} name="Key West" />
      <SelectCard bg={Maldives} name="Maldives" />
      <SelectCard bg={Maldives2} name="Cozumel" />
      <SelectCard bg={Maldives3} name="Jamaica" />
    </div>
  );
};

export default Selects;
