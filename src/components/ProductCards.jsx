import React from "react";
import { PRODUCT_DETAILS } from "../utils";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

function Card({ product }) {
  return (
    <div className="overflow-clip rounded bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="h-[200px] w-full object-cover object-center"
      />
      <div className="space-y-5 px-8 py-10">
        <Heading variant="h3">{product.title}</Heading>
        <Paragraph>{product.description}</Paragraph>
      </div>
    </div>
  );
}

export default function ProductCards() {
  return (
    <>
      {PRODUCT_DETAILS.map((product, idx) => (
        <Card key={idx} product={product} />
      ))}
    </>
  );
}
