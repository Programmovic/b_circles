import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from 'react-icons/fa';




const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className='py-[14px]'><button title="Switch Theme" onClick={toggleTheme} className="btn btn-primary z-0 p-[5px]">
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button></div>

    </>

  );
};
export default ThemeSwitcher;