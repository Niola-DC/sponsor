import React from "react";
import { PRIORITY_DETAILS } from "../utils";
import Paragraph from "../ui/Paragraph";
import { WalletIcon } from "@heroicons/react/24/outline";

function Card({ item }) {
  return (
    <div className="space-y-3 rounded-2xl border border-stone-100 bg-white px-8 py-10">
      <figure className="to-primary mx-auto w-fit rounded-2xl bg-gradient-to-br from-purple-500 p-3 lg:inline-block">
        <item.icon className="size-10 text-white" />
      </figure>
      <Paragraph>{item.text}</Paragraph>
    </div>
  );
}

export default function PriorityCards() {
  return (
    <>
      {PRIORITY_DETAILS.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </>
  );
}
