import React from "react";
import Button from "../ui/Button";
import FlexBox from "../ui/FlexBox";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import heroImage from "../assets/image/heroImage.png";

export default function Hero() {
  return (
    <section className="min-h-dvh grid lg:min-h-[70dvh]">
      <FlexBox
        className="mx-auto h-full max-w-6xl flex-col lg:flex-row"
        gap="large"
      >
        <div className="flex h-full flex-col justify-center gap-8 text-center md:basis-1/2 lg:text-left">
          <Heading>Get easy access to very flexible education loans</Heading>
          <Paragraph>
            PaySkul provides affordable education loans with flexible repayment
            plans, tailored to empower students to achieve their dreams without
            financial stress.
          </Paragraph>
          <FlexBox className="w-fit flex-col self-center sm:flex-row md:mx-0 lg:self-start">
            <Button>Get started</Button>
            <Button variant="secondary">Become a partner</Button>
          </FlexBox>
        </div>
        <div className="hidden h-full basis-1/2 items-center justify-center sm:flex">
          <img src={heroImage} alt="hero image" className="object-cover" />
        </div>
      </FlexBox>
    </section>
  );
}
