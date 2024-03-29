import Button from "./button";
import MainNav from "./mainNav";
import ProjectCard from "./projectCard";
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from 'react-icons/fa';
import Footer from "./footer";
import LoadingIndicator from "./loadingIndicator";

const navItems = [
    { id: 0, url: "", title: "About Me" },
    { id: 1, url: "", title: "Experience" },
    { id: 2, url: "", title: "Work" },
    { id: 3, url: "", title: "Contact" }
];

const StylesShowcase = () => {
    return (
        <>
            <h1 className="mb-2">Components</h1>
            <section className="mb-2">
                <div className="pl-4 mb-4">
                    <h2>Buttons</h2>
                    <div className="pl-4">
                        <Button>Primary</Button>
                        <Button type="secondary">Secondary</Button>
                    </div>
                </div>

                <div className="pl-4 mb-4">
                    <h2 className="mb-2">Main Nav</h2>
                    <div className="pl-4">
                        <MainNav title="Sascha Kuhness" navItems={navItems} showDarkMode="true" onDarkMode={() => alert('darkMode handler not implemented')} darkModeState={false} />
                    </div>
                </div>

                <div className="pl-4 mb-4">
                    <h2 className="mb-2">Project Card</h2>
                    <div className="pl-4 flex gap-10 flex-wrap">
                        <ProjectCard title="Project Title" thumbnailSrc="https://placekitten.com/375/375">
                            <p>
                                Irure occaecat mollit sunt consectetur aliqua minim culpa officia voluptate ipsum in adipisicing consequat est. Ex do enim laboris excepteur sunt officia cupidatat cillum. Proident et eu aliqua consectetur duis qui reprehenderit incididunt.
                            </p>
                            <Button className="mt-2"><FaGithub /> Show On GitHub</Button>
                        </ProjectCard>
                        <ProjectCard title="Project Title" thumbnailSrc="https://placekitten.com/375/375">
                            <p>
                                Proident eiusmod dolore veniam sint duis sit et quis ut enim duis elit amet consequat. Labore anim ea sit ut. Ex est irure culpa fugiat id. Fugiat eiusmod commodo occaecat duis irure eu dolore et ut tempor. Esse qui commodo minim eiusmod ea magna labore Lorem commodo ullamco. Elit pariatur commodo occaecat commodo magna aliquip. Laborum magna eiusmod et sunt amet laboris in.
                            </p>
                            <Button className="mt-2"><FaGithub /> Show On GitHub</Button>
                        </ProjectCard>
                    </div>
                </div>

                <div className="pl-4 mb-4">
                    <h2 className="mb-2">Loading Indicator</h2>
                    <div className="pl-4 flex gap-8">
                        <LoadingIndicator isLoading={true} />
                    </div>
                </div>

                <div className="pl-4 mb-4">
                    <h2 className="mb-2">Icons</h2>
                    <div className="pl-4 flex gap-8">
                        <div>FaSun <FaSun /></div>
                        <div>FaMoon <FaMoon /></div>
                        <div>FaGithub <FaGithub /></div>
                        <div>FaLinkedin <FaLinkedin /></div>
                        <div>FaTwitter <FaTwitter /></div>
                        <div>FaEnvelope <FaEnvelope /></div>
                        <div>FaGlobe <FaGlobe /></div>
                    </div>
                </div>
            </section>

            <section className="mb-4">
                <h1 className="mb-2">Typography</h1>
                <div className="pl-4">
                    <h1 className="text-5xl font-bold">Title</h1>
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <p>
                        This is what a paragraph looks like. Dolor magna exercitation ad ipsum magna anim ut Lorem adipisicing mollit enim anim. Ut ut esse est consectetur pariatur exercitation do occaecat. Cillum eu id mollit est magna proident ullamco amet. Ea reprehenderit laboris dolor non aute officia dolor. Sunt proident officia et dolore mollit est.
                    </p>
                </div>
            </section>

            <section>

                <h1 className="mb-2">Footer</h1>
                <Footer />
            </section>
        </>
    );
};

export default StylesShowcase;