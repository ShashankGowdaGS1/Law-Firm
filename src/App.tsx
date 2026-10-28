import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { AppRoutes } from "@/routes/AppRoutes";

/**
 * Ensures page scroll position resets cleanly to top on route transition
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
