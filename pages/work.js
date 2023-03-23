import Button from "@/components/button";
import ProjectCard from "@/components/projectCard";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";

const Work = () => {
    const handlePortfolioClick = () => {
        window.open("https://github.com/SaschaVII/portfolio");
    };

    const handleStickyNotesClick = () => {
        window.open("https://github.com/SaschaVII/StickyNotesApp");
    };

    return (
        <>
            <Head>
                <title>Sascha Kuhness - Work</title>
            </Head>
            <div className="container mt-5 sm:mt-20">
                <section>
                    <h1 className="mb-2 inline-block is-underlined">Work</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ProjectCard title="This Portfolio" projectUrl="/about" thumbnailSrc="/portfolio_proj_thumbnail.png">
                            <p>
                                This portfolio website is a showcase of my professional experience, skills, and projects. Built entirely from scratch using <strong>React</strong> and <strong>Next.js</strong>, it features a sleek and modern design that I crafted myself using <strong>Tailwind</strong>. Visitors can browse my past work and explore my expertise in various areas.
                            </p>
                            <Button className="mt-2" type="secondary" onClick={handlePortfolioClick}><FaGithub /> GitHub</Button>
                        </ProjectCard>
                        <ProjectCard title="Sticky Notes" projectUrl="https://saschavii.github.io/StickyNotesApp/" thumbnailSrc="/stickyNotes_proj_thumbnail.png">
                            <p>
                                Introducing my minimalist sticky notes website, created using vanilla <strong>JavaScript</strong>, <strong>CSS</strong>, and <strong>HTML</strong>. With a clean and efficient interface, the app enables you to create notes effortlessly by clicking anywhere on the canvas, saving notes inbetween sessions via the local storage api.
                            </p>
                            <Button className="mt-2" type="secondary" onClick={handleStickyNotesClick}><FaGithub /> GitHub</Button>
                        </ProjectCard>
                        <ProjectCard title="Coming soon..." thumbnailSrc="https://placekitten.com/500/500">
                            <p>More projects will be added soon...</p>
                        </ProjectCard>
                        {/* <ProjectCard title="Project Title 2" thumbnailSrc="https://placekitten.com/375/375">
                            <p>Project Description...</p>
                        </ProjectCard>
                        <ProjectCard title="Project Title 3" thumbnailSrc="https://placekitten.com/375/375">
                            <p>Project Description...</p>
                        </ProjectCard>
                        <ProjectCard title="Project Title 4" thumbnailSrc="https://placekitten.com/375/375">
                            <p>Project Description...</p>
                        </ProjectCard>
                        <ProjectCard title="Project Title 5" thumbnailSrc="https://placekitten.com/375/375">
                            <p>Project Description...</p>
                        </ProjectCard>
                        <ProjectCard title="Project Title 6" thumbnailSrc="https://placekitten.com/375/375">
                            <p>Project Description...</p>
                        </ProjectCard>
                        <ProjectCard title="Project Title 7" thumbnailSrc="https://placekitten.com/375/375">
                            <p>Project Description...</p>
                        </ProjectCard>
                        <ProjectCard title="Project Title 8" thumbnailSrc="https://placekitten.com/375/375">
                            <p>Project Description...</p>
                        </ProjectCard> */}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Work;