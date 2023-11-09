import React from "react";
import { useThemeStore } from "../store/useThemeStore";

export default function Footer() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <footer className={`footer ${theme === "light" ? "white" : "dark"}`}>
      <button onClick={toggleTheme}>테마 변경</button>
    </footer>
  );
}
