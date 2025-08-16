import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 10); // delay in ms (adjust as needed)

    return () => clearTimeout(timer); // cleanup on unmount or path change
  }, [pathname]);

  return null;
}
