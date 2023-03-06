import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const MainNav = ({ title, navItems, showDarkMode }) => {
    // States
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);

    useEffect(() => {
        if (darkModeEnabled) document.querySelector('html').classList.add('dark');
        else document.querySelector('html').classList.remove('dark');
    }, [darkModeEnabled]);

    const darkModeBtnText = darkModeEnabled ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>;

    return (
        <nav className="flex flex-col sm:flex-row justify-between flex-wrap gap-2">
            <h1 className="text-5xl font-bold">{title}</h1>
            <div className="flex flex-col gap-2 sm:gap-10 sm:flex-row flex-wrap sm:self-center">
                {navItems.map(item => {
                    return (
                        <a key={item.id} className="text-primary-400 hover:text-primary-900 dark:text-slate-400 dark:hover:text-slate-200 before:content-['<'] after:content-['_/>'] whitespace-nowrap" href={item.url}>
                            {item.title}
                        </a>
                    )
                })}
                { (showDarkMode || true) && 
                    <div className="hidden sm:inline self-center">
                        <button className="text-xs text-primary-300 hover:text-primary-800 dark:text-slate-500 dark:hover:text-slate-200" type="secondary" onClick={() => setDarkModeEnabled(current => !current)}>{darkModeBtnText}</button>
                    </div>
                }
            </div>
        </nav>
    );
};

export default MainNav;