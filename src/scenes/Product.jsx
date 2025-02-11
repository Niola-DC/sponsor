import React from "react";
import ProductCards from "../components/ProductCards";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";

export default function Product() {
  return (
    <section className="bg-stone-50">
      <Container>
        <div className="space-y-16">
          <div className="space-y-5 lg:w-3/5 lg:space-y-3">
            <Heading variant="h2">
              <span>Anything education, think </span>
              <span className="text-primary">Payskul</span>
            </Heading>
            <Paragraph>
              We don't only offer educational loans, we offer services to study
              and build a great future.
            </Paragraph>
          </div>

          <div className="grid gap-10 lg:grid-cols-3">
            <ProductCards />
          </div>
        </div>
      </Container>
    </section>
  );
}
