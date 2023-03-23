import Link from "next/link";
import { useRouter } from "next/router";
import { FaMoon, FaSun } from "react-icons/fa";

const routes = [
    { id: 0, url: "/about", title: "About Me" },
    { id: 1, url: "/experience", title: "Experience" },
    { id: 2, url: "/work", title: "Work" },
    { id: 3, url: "/contact", title: "Contact" }];

const MainNav = ({ className, title, showDarkMode, darkModeState, onDarkMode }) => {
    const router = useRouter();

    // calculated props
    const darkModeBtnText = darkModeState ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>;
    const linkStyles = "text-md hover:text-emerald-400 dark:hover:text-emerald-200 before:content-['<'] after:content-['_/>'] whitespace-nowrap md:self-center";

    return (
        <nav className={className + ' mt-10 flex flex-col md:flex-row justify-between flex-wrap gap-2'}>
            <Link href="/about">
                <h1 className="text-center md:text-left text-5xl font-bold">{title}</h1>
            </Link>
            <div className="flex flex-col gap-2 md:gap-10 md:flex-row flex-wrap md:self-center">
                {routes.map(item => {
                    return (
                        <Link key={item.id}
                            className={linkStyles + ((router.asPath == item.url) ? " font-bold text-emerald-600 dark:text-emerald-100" : " text-primary-400 dark:text-slate-400")}
                            href={item.url} >
                            {item.title}
                        </Link>
                    )
                })}
                {(showDarkMode) &&
                    <div>
                        <button className="text-xs text-primary-300 hover:text-primary-800 dark:text-slate-500 dark:hover:text-slate-200" type="secondary" onClick={onDarkMode}>{darkModeBtnText}</button>
                    </div>
                }
            </div>
        </nav>
    );
};

export default MainNav;