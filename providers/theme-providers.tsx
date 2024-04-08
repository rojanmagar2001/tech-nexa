import React from "react";
import { ThemeProvider } from "next-themes";

interface CustomThemeProvidersProps {
  children: React.ReactNode;
}

const CustomThemeProviders: React.FC<CustomThemeProvidersProps> = ({
  children,
}) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  );
};

export default CustomThemeProviders;
