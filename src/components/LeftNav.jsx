import React from "react";
import { GoChevronLeft } from "react-icons/go";

const LeftNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav text-2xl md:text-4xl text-highlight"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <GoChevronLeft />
    </button>
  );
});

LeftNav.displayName = "LeftNav";

export default LeftNav;
