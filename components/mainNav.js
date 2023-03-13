import { FaMoon, FaSun } from "react-icons/fa";

const routes = [
    { id: 0, url: "/about", title: "About Me" },
    { id: 1, url: "/experience", title: "Experience" },
    { id: 2, url: "/work", title: "Work" },
    { id: 3, url: "/contact", title: "Contact" }];

const MainNav = ({ className, title, showDarkMode, darkModeState, onDarkMode }) => {
    // calculated props
    const darkModeBtnText = darkModeState ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>;

    return (
        <nav className={className + ' mt-10 flex flex-col sm:flex-row justify-between flex-wrap gap-2'}>
            <h1 className="text-5xl font-bold">{title}</h1>
            <div className="flex flex-col gap-2 sm:gap-10 sm:flex-row flex-wrap sm:self-center">
                {routes.map(item => {
                    return (
                        <a key={item.id} className="text-sm text-primary-400 hover:text-primary-900 dark:text-slate-400 dark:hover:text-slate-200 before:content-['<'] after:content-['_/>'] whitespace-nowrap sm:self-center" href={item.url}>
                            {item.title}
                        </a>
                    )
                })}
                { (showDarkMode) && 
                    <div className="hidden sm:inline self-center">
                        <button className="text-xs text-primary-300 hover:text-primary-800 dark:text-slate-500 dark:hover:text-slate-200" type="secondary" onClick={onDarkMode}>{darkModeBtnText}</button>
                    </div>
                }
            </div>
        </nav>
    );
};

export default MainNav;