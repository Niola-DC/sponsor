import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import PriorityCards from "../components/PriorityCards";

export default function Priority() {
  return (
    <section className="bg-white">
      <Container>
        <div className="space-y-16">
          <div className="space-y-5 lg:w-3/5 lg:space-y-3">
            <Heading variant="h2">
              <span>Your education is our </span>
              <span className="text-primary">priority</span>
            </Heading>
            <Paragraph>
              At PaySkul we are in the business of empowering your education and
              your future, here are reasons why you should choose us.
            </Paragraph>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <PriorityCards />
          </div>
        </div>
      </Container>
    </section>
  );
}
