import React, { ReactNode } from "react";
import LandingHeader from "./landing_header";

interface LandingLayoutProps {
  children: ReactNode;
}

const LandingLayout: React.FC<LandingLayoutProps> = ({ children }) => {
  return (
    <>
      <LandingHeader />
      <main className="pt-14">{children}</main>
    </>
  );
};

export default LandingLayout;
