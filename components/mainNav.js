const MainNav = ({ title, navItems }) => {
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
            </div>
        </nav>
    );
};

export default MainNav;