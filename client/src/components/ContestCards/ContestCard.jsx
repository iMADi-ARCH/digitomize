import React from "react";
import { Link } from "react-router-dom";

function ContestCard({ item }) {
  return (
    <div
      key={item.name}
      className="rounded-xl mx-4 bg-cardsColor flex flex-col items-center md:border md:border-contestborder md:py-10 md:px-4 md:w-4/5"
    >
      <div className=" p-4 md:p-0 md:bg-contestlogo md:rounded-full">
        <img
          className="w-20 h-20"
          src={item.icon}
          draggable={false}
          alt={item.name + " logo"}
        />
      </div>
      <div className="text-center mt-4 mb-5 max-md:hidden">
        <h1 className="text-xl text-[#ffffff] mb-2 mt-0">{item.name}</h1>
        <p className=" text-[#B7B6FF]">{item.description}</p>
      </div>
      <div className="justify-center hidden w-full md:flex">
        <Link to="/contests">
          <button className="rounded-xl border-xl px-4 py-2 bg-[#3c3b86] transition-colors hover:bg-[#313073]">
            check out
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ContestCard;
