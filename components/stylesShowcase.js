const StylesShowcase = () => (
    <div>
        <h1 className="mb-2">Components</h1>
        <section className="mb-2">
            <div className="pl-4">
                <h2>Button</h2>
                <div className="pl-4">
                    <div className="mb-2">
                        <button className="btn btn-primary mr-2">Primary</button>
                    </div>
                    <div className="mb-2">
                        <button className="btn btn-secondary mr-2">Secondary</button>
                    </div>
                </div>
            </div>
        </section>
        <section className="mb-4">
            <h1 className="mb-2">Typography</h1>
            <div className="pl-4">
                <div className="pl-4">
                    <h1 className="text-5xl font-bold">Title</h1>
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <p>
                        Dolor magna exercitation ad ipsum magna anim ut Lorem adipisicing mollit enim anim. Ut ut esse est consectetur pariatur exercitation do occaecat. Cillum eu id mollit est magna proident ullamco amet. Ea reprehenderit laboris dolor non aute officia dolor. Sunt proident officia et dolore mollit est. Est mollit et proident deserunt et. Excepteur consequat nostrud fugiat exercitation in minim laboris et sit tempor veniam elit.
                    </p>
                </div>
            </div>
        </section>

        <section className="mb-4">
            <h1 className="mb-2">Main Nav</h1>
            <div className="pl-4">
                <nav className="flex flex-col gap-10 sm:flex-row-reverse">
                        <a className="text-primary-400 hover:text-primary-900 before:content-['<'] after:content-['_/>'] whitespace-nowrap" href="#">About Me</a>
                        <a className="text-primary-400 hover:text-primary-900 before:content-['<'] after:content-['_/>'] whitespace-nowrap" href="#">Experience</a>
                        <a className="text-primary-400 hover:text-primary-900 before:content-['<'] after:content-['_/>'] whitespace-nowrap" href="#">Work</a>
                        <a className="text-primary-400 hover:text-primary-900 before:content-['<'] after:content-['_/>'] whitespace-nowrap" href="#">Contact</a>
                </nav>
            </div>
        </section>

        <section className="mb-4">
            <h1 className="mb-2">Project Card</h1>
            <div className="pl-4 flex gap-10 flex-wrap">
                <div className="max-w-[375px] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="grayscale" src="./placeholder375x375.png" alt="project thumbnail" />
                    </a>
                    <div className="p-5">
                        <h1 className="mb-2">Project Title 1</h1>
                        <p>
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <button className="btn btn-primary mt-5">Click Me</button>
                    </div>
                </div>
                <div className="max-w-[375px] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="grayscale" src="./placeholder375x375.png" alt="project thumbnail" />
                    </a>
                    <div className="p-5">
                        <h1 className="mb-2">Project Title 2</h1>
                        <p>
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <button className="btn btn-primary mt-5">Click Me</button>
                    </div>
                </div>
                <div className="max-w-[375px] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="grayscale" src="./placeholder375x375.png" alt="project thumbnail" />
                    </a>
                    <div className="p-5">
                        <h1 className="mb-2">Project Title 3</h1>
                        <p>
                            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                        </p>
                        <button className="btn btn-primary mt-5">Click Me</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default StylesShowcase;