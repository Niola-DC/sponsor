import { clsx } from "clsx";
import React from "react";

export default function Heading({
  variant = "h1",
  color = "primary",
  children,
}) {
  if (variant == "h1") {
    return (
      <h1 className="text-4xl leading-12 font-semibold text-stone-800 lg:text-5xl lg:leading-16">
        {children}
      </h1>
    );
  }

  if (variant == "h2") {
    return (
      <h2
        className={clsx(
          "text-center text-3xl leading-12 font-semibold lg:text-left",
          {
            "text-stone-800": color === "primary",
            "text-stone-100": color === "secondary",
          },
        )}
      >
        {children}
      </h2>
    );
  }

  if (variant == "h3") {
    return (
      <h3 className="text-center text-2xl font-semibold text-stone-800 lg:text-left">
        {children}
      </h3>
    );
  }
}
