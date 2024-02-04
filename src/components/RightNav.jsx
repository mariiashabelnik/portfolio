import React from "react";
import { GoChevronRight } from "react-icons/go";
const RightNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-right-nav text-2xl md:text-4xl text-highlight"
      disabled={disabled}
      onClick={onClick}
      aria-label="Next Slide"
    >
      <GoChevronRight />
    </button>
  );
});

RightNav.displayName = "RightNav";

export default RightNav;
