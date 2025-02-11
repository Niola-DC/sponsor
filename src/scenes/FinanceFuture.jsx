import React from "react";
import FlexBox from "../ui/FlexBox";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import financeFutureImage from "../assets/image/phone-1.jpg";

export default function FinanceFuture() {
  return (
    <section className="bg-white">
      <Container>
        <FlexBox className="flex-col md:flex-row" gap="large">
          <div className="flex h-full flex-col justify-center gap-8 text-center md:basis-1/2 lg:text-left">
            <Heading variant="h2">Finance your future today</Heading>
            <Paragraph>
              You are just a tap away from enjoying our services, download our
              app on Playstore or via the website to have full access to our
              services.
            </Paragraph>

            <div className="">
              <Button animate>
                <FlexBox className="items-center">
                  <span>Download now</span>
                  <ArrowDownTrayIcon className="size-5" />
                </FlexBox>
              </Button>
            </div>
          </div>
          <div className="h-full basis-1/2 items-center justify-center sm:flex">
            <img
              src={financeFutureImage}
              alt="hero image"
              className="object-cover"
            />
          </div>
        </FlexBox>
      </Container>
    </section>
  );
}
