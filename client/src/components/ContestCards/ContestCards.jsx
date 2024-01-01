import React, { useRef, useState } from "react";
import Marquee from "react-fast-marquee";

import {
  geeksforgeeks,
  leetcode,
  codingninjas,
  codechef,
  atcoder,
  codeforces,
} from "../AllAssets";

const platformsIcon = [
  leetcode,
  codingninjas,
  geeksforgeeks,
  codechef,
  codeforces,
  atcoder,
];

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ContestCard from "./ContestCard";
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function ContestCards() {
  const platforms = [
    {
      name: "Leetcode",
      description:
        "Platform for honing coding skills through a variety of algorithmic challenges.",
      icon: leetcode,
    },
    {
      name: "Atcoder",
      description:
        "Competitive programming platform that hosts contests and offers practice problems.",
      icon: atcoder,
    },
    {
      name: "Codeforces",
      description:
        "Online competitive programming platform with a global community and regular contests.",
      icon: codeforces,
    },
    {
      name: "Codechef",
      description:
        "Competitive programming platform featuring coding contests and challenges.",
      icon: codechef,
    },
    {
      name: "Geeksforgeeks",
      description:
        "Platform providing a variety of coding resources, tutorials, and practice problems.",
      icon: geeksforgeeks,
    },
    {
      name: "Codingninjas",
      description:
        "Educational platform offering coding courses, challenges, and programming competitions.",
      icon: codingninjas,
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      {/* <div className="mt-12 md:hidden">
        <Marquee speed={100}>
          {platforms.map((item) => (
            <div key={item.name} className="flex justify-center">
              <span className="bg-cardsColor p-4 mx-4 rounded-xl">
                <img
                  className="w-20 h-20"
                  src={item.icon}
                  draggable={false}
                  alt="leetcode"
                />
              </span>
            </div>
          ))}
        </Marquee>
      </div> */}
      <div className="w-full">
        <Marquee speed={150} className="flex flex-row" pauseOnHover={true}>
          {platforms.map((item) => (
            <ContestCard item={item} key={item.name} />
          ))}
        </Marquee>
      </div>
    </ThemeProvider>
  );
}
