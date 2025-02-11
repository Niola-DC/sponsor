import { clsx } from "clsx";
import React from "react";

export default function Button({
  variant = "primary",
  animate = false,
  children,
}) {
  return (
    <button
      type="button"
      className={clsx("cursor-pointer rounded px-8 py-3", {
        "bg-stone-900 text-white lg:hover:bg-stone-800": variant === "primary",
        "bg-stone-100 text-stone-800 lg:hover:bg-stone-200":
          variant === "secondary",
        "lg:animate-bounce": animate,
      })}
    >
      {children}
    </button>
  );
}
