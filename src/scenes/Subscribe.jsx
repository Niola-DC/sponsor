import React from "react";
import Container from "../ui/Container";
import FlexBox from "../ui/FlexBox";
import FormInput from "../ui/FormInput";
import Button from "../ui/Button";

export default function Subscribe() {
  return (
    <section>
      <Container>
        <FlexBox className="flex-col items-center">
          <h3 className="text-lg font-semibold text-stone-800">
            Don't be left out, Get exclusive updates from us
          </h3>
          <form action="" method="post" className="mx-auto w-full lg:w-3/5">
            <FlexBox className="flex-col sm:flex-row">
              <label className="grow rounded border bg-stone-50 px-4 py-3 focus-within:ring-2 focus-within:ring-offset-2">
                <input
                  type="email"
                  placeholder={"email@domain.com"}
                  className="w-full outline-0"
                />
              </label>
              <Button variant="primary">Subscribe now</Button>
            </FlexBox>
          </form>
        </FlexBox>
      </Container>
    </section>
  );
}
