import Head from "next/head";

const Work = () => {
    return (
        <>
            <Head>
                <title>Sascha Kuhness - Work</title>
            </Head>
            <div className="container mt-5 sm:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <section>
                            <h1>Work</h1>
                            <p>
                                Nostrud ex do Lorem mollit deserunt in excepteur cillum fugiat commodo minim voluptate velit aliqua. Eu Lorem dolor magna dolore ullamco laboris dolore duis. Eu sunt et duis proident velit non adipisicing commodo nisi nisi anim pariatur labore exercitation. Minim adipisicing irure culpa est occaecat.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Work;