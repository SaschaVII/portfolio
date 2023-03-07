import MainNav from "@/components/mainNav";
import StylesShowcase from "@/components/stylesShowcase";
import { useEffect, useState } from "react";

export default function Home() {
  // States
  // darkMode state should be placed at the top level, wherever the mainNav element will sit!
  // consider saving the darkMode variable via local storage instead of using a state in the future
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // if darkmode has changed, update html element class accordingly
    if (darkMode) document.querySelector('html').classList.add('dark');
    else document.querySelector('html').classList.remove('dark');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(current => !current);
  };

  return (
    <>
      <MainNav title="Sascha Kuhness" className="mb-20" showDarkMode={true} darkModeState={darkMode} onDarkMode={toggleDarkMode} />

      {/* implement router outlet here */}

      {/* temporary component list */}
      <StylesShowcase />
    </>
  )
}