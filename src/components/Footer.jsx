import React from "react";
import Container from "../ui/Container";
import { FOOTER_DETAILS, SOCIALS } from "../utils";
import Accordion from "./Accordion";
import Logo from "../components/Logo";
import FlexBox from "../ui/FlexBox";
import Paragraph from "../ui/Paragraph";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <Container>
        <div className="divide-y divide-stone-700">
          <div className="grid gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
            {Object.keys(FOOTER_DETAILS).map((key) => (
              <Accordion key={key} title={key} links={FOOTER_DETAILS[key]} />
            ))}
          </div>
          <FlexBox className="flex-col items-center py-7 lg:space-x-5 lg:flex-row">
            <Logo />
            <Paragraph>&copy; PaySkul International Ltd. 2024</Paragraph>
            <div className="grid grid-cols-4 gap-2">
              <SocialIcons socials={SOCIALS} />
            </div>
          </FlexBox>
        </div>
      </Container>
    </footer>
  );
}
