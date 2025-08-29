import { createPortal } from "react-dom";
import heartIcon from "@/assets/images/heart.svg";
import starIcon from "@/assets/images/star.svg";

const FooterDecor = () => {
  const container = document.getElementById("footer-decor");
  if (!container) return null;

  return createPortal(
    <div className="relative w-full">
      {/* Heart doodle (left) */}
      <img
        src={heartIcon}
        alt="Heart doodle"
        className="hidden md:block absolute"
        style={{
          left: "0vw",
          top: "-24vw",
          height: "17vw",
          width: "auto",
          opacity: 0.7,
        }}
      />

      {/* Star (right) */}
      <img
        src={starIcon}
        alt="Star"
        className="hidden md:block absolute"
        style={{
          right: "1vw",
          top: "-14vw",
          height: "4vw",
          width: "auto",
          opacity: 0.9,
        }}
      />
    </div>,
    container
  );
};

export default FooterDecor;
