import Head from "next/head";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Sascha Kuhness - Contact</title>
            </Head>
            <div className="container mt-5 sm:mt-20">
                <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                        <section>
                            <h1 className="inline-block is-underlined mb-2">Let&apos;s Talk!</h1>
                            <p className="mt-2">
                                I am always happy to talk about any job opportunities or other quries via any of the following methods:
                            </p>
                            <ul className="list-disc mt-4 list-inside">
                                <li>
                                    <a href="//www.github.com/SaschaVII" target="_blank" className="inline-block mb-2 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-200">
                                        <div><FaGithub /> <span>Github</span></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="//www.linkedin.com/in/sascha-kuhness-34968a132" target="_blank" className="inline-block mb-2 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-200">
                                        <div><FaLinkedin /> <span>LinkedIn</span></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:sascha.kuhness@gmail.com?subject=Mail from Portfolio" className="inline-block mb-2 hover:text-slate-500 dark:text-slate-400 dark:hover:text-slate-200">
                                        <div><FaEnvelope /> <span>Email</span></div>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;