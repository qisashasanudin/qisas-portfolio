import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(location.hash);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [location.pathname, location.hash]);

  return null;
}

