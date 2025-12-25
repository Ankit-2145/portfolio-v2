"use client";

import { useEffect, useState } from "react";

export default function NoScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScrollAttempt = (e: Event) => {
      e.preventDefault();

      setShowMessage(true);

      // Hide message after 2 seconds
      setTimeout(() => setShowMessage(false), 2000);
    };

    // Disable scroll
    document.body.style.overflow = "hidden";

    window.addEventListener("wheel", handleScrollAttempt, { passive: false });
    window.addEventListener("touchmove", handleScrollAttempt, {
      passive: false,
    });

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("wheel", handleScrollAttempt);
      window.removeEventListener("touchmove", handleScrollAttempt);
    };
  }, []);

  return (
    <>
      {showMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-2 rounded-xl shadow-lg z-50">
          This is a single page portfolio use navbar to visit other pages
        </div>
      )}

      {children}
    </>
  );
}
