import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const {theme} = useContext(ThemeContext);
  return <p className="text-center" style={{color: theme.fgColor}}> {theme.name}theme ... is activated</p>;
};
