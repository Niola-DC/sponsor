import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import Container from "../ui/Container";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 w-full border-b border-stone-200 bg-white px-10 py-8 lg:py-12">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />
          <NavLinks />
        </div>
      </Container>
    </header>
  );
}
