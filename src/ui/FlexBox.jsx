import { clsx } from "clsx";
import React from "react";

export default function FlexBox({ className, gap = "small", children }) {
  return (
    <div
      className={clsx("flex", className, {
        "gap-5": gap === "small",
        "gap-10": gap === "medium",
        "gap-16": gap === "large",
      })}
    >
      {children}
    </div>
  );
}
