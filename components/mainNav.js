const MainNav = ({ title }) => {
    const navItemStyles = "text-primary-400 hover:text-primary-900 before:content-['<'] after:content-['_/>'] whitespace-nowrap";

    return (
        <nav className="flex flex-col sm:flex-row justify-between flex-wrap gap-2">
            <h1 className="text-5xl font-bold">{title}</h1>
            <div className="flex flex-col gap-2 sm:gap-10 sm:flex-row flex-wrap sm:self-center">
                <a className={navItemStyles} href="#">About Me</a>
                <a className={navItemStyles} href="#">Experience</a>
                <a className={navItemStyles} href="#">Work</a>
                <a className={navItemStyles} href="#">Contact</a>
            </div>
        </nav>
    );
};

export default MainNav;