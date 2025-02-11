import React from "react";
import Hero from "../scenes/Hero";
import Product from "../scenes/Product";
import Priority from "../scenes/Priority";
import FinanceFuture from "../scenes/FinanceFuture";
import AboutUs from "../scenes/AboutUs";
import Subscribe from "../scenes/Subscribe";

export default function Landing() {
  return (
    <>
      <Hero />
      <Product />
      <Priority />
      <FinanceFuture />
      <AboutUs />
      <Subscribe />
    </>
  );
}
