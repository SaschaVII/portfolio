const StylesShowcase = () => (
    <div>
        <h1>Components</h1>
        <section>
            <div className="pl-4">
                <h2>Buttons</h2>
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
        <section>
            <h1>Typography</h1>
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
        <nav className="flex gap-10">
                <a className="text-primary-400 hover:text-primary-900 before:content-['<'] after:content-['_/>']" href="#">About Me</a>
                <a className="text-primary-400 hover:text-primary-900 before:content-['<'] after:content-['_/>']" href="#">Experience</a>
                <a className="text-primary-400 hover:text-primary-900 before:content-['<'] after:content-['_/>']" href="#">Work</a>
                <a className="text-primary-400 hover:text-primary-900 before:content-['<'] after:content-['_/>']" href="#">Contact</a>
        </nav>
    </div>
);

export default StylesShowcase;