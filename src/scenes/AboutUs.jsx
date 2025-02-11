import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import PriorityCards from "../components/PriorityCards";
import { FAQ } from "../utils";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="bg-stone-900">
      <Container>
        <div className="space-y-16">
          <div className="space-y-5 lg:w-3/5 lg:space-y-3">
            <Heading variant="h2" color="secondary">
              <span>Ready to learn how we're changing education? </span>
              <span className="text-primary">Explore PaySkul!</span>
            </Heading>
            <Paragraph>
              Here are frequently asked questions to give you information about
              our product and services.
            </Paragraph>
          </div>

          <div className="border-gradient grid gap-10 py-20 sm:grid-cols-2">
            {FAQ.map((faq) => (
              <div key={faq.id} className="space-y-3">
                <h3 className="text-lg font-semibold text-stone-300 uppercase">
                  {faq.question}
                </h3>
                <p className="text-stone-500">{faq.answer}</p>
              </div>
            ))}
          </div>

          <p className="text-stone-500 sm:text-center lg:text-right">
            <span> Can't find answers to what you are looking for? </span>
            <Link to="/" className="text-primary-light border-b border-current">
              Reach out to us
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
