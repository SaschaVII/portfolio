import MainNav from "@/components/mainNav";
import StylesShowcase from "@/components/stylesShowcase";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	// States
	// darkMode state should be placed at the top level, wherever the mainNav element will sit!
	// consider saving the darkMode variable via local storage instead of using a state in the future
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (localStorage.darkMode) {
			if (JSON.parse(localStorage.darkMode) === true) {
				setDarkMode(true);
				document.querySelector("html").classList.add("dark");
			} else {
				setDarkMode(false);
				document.querySelector("html").classList.remove("dark");
			}
		}
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((current) => {
			if (current) {
				localStorage.darkMode = false;
				document.querySelector("html").classList.remove("dark");
				return false;
			} else {
				localStorage.darkMode = true;
				document.querySelector("html").classList.add("dark");
				return true;
			}
		});
	};

	return (
		<>
			<MainNav title="Sascha Kuhness" className="mb-20" showDarkMode={true} darkModeState={darkMode} onDarkMode={toggleDarkMode} />

			{/* implement router outlet here and wrap inside a div with desired layout style */}

			{/* temporary component list */}
			<StylesShowcase />
		</>
	);
}
