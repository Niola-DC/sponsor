import React from "react";
import Icon from "../ui/Icon";

export default function SocialIcons({ socials }) {
  return (
    <>
      {socials.map((social) => (
        <Icon key={social} name={social} />
      ))}
    </>
  );
}
