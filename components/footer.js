import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="pb-6">
            <hr className="my-6 border-slate-200 sm:mx-auto dark:border-slate-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-evenly">
                <span className="text-sm text-slate-500 sm:text-center dark:text-slate-400"><FaRegCopyright /> 2023 Sascha Kuhness. All rights reserved.</span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <a href="//www.github.com/SaschaVII" target="_blank" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
                        <div><span className="hidden xl:inline">Github </span><FaGithub /></div>
                    </a>
                    <a href="//www.linkedin.com/in/sascha-kuhness-34968a132" target="_blank" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
                        <div><span className="hidden xl:inline">LinkedIn</span> <FaLinkedin /></div>
                    </a>
                    <a href="mailto:sascha.kuhness@gmail.com?subject=Mail from Portfolio" className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200">
                        <div><span className="hidden xl:inline">Email</span> <FaEnvelope /></div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;