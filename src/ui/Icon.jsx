import React from "react";

export default function Icon({ name }) {
  return (
    <figure className="grid size-14 cursor-pointer place-items-center rounded-full transition-all duration-500 ease-in-out lg:hover:bg-stone-800">
      <svg className="size-5 fill-stone-500">
        <use href={`/svg/socials.svg#icon-${name}`} />
      </svg>
    </figure>
  );
}
