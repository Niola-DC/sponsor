import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlexBox from "../ui/FlexBox";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";

export default function Accordion({ title, links }) {
  const [open, setOpen] = useState(false);

  const toggleAccordion = () => setOpen((prev) => !prev);

  return (
    <div className="cursor-pointer" onClick={toggleAccordion}>
      <FlexBox className="items-center justify-between space-y-5">
        <h1 className="text-stone-300 capitalize">{title}</h1>
        <ChevronDownIcon
          className={clsx(
            "size-5 transition-transform duration-300 sm:hidden",
            {
              "rotate-180": open,
            },
          )}
        />
      </FlexBox>

      <nav
        className={clsx(
          "flex h-0 flex-col space-y-4 overflow-clip transition duration-1000 sm:h-auto",
          {
            "h-auto": open,
          },
        )}
      >
        {links.map((value, idx) => (
          <Link
            key={idx}
            to={value.href}
            className="font-light text-stone-500 capitalize"
          >
            {value.text}
          </Link>
        ))}
      </nav>
    </div>
  );
}
