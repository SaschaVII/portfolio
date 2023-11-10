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

    const handleTaskListAppProjClick = () => {
        window.open("https://github.com/SaschaVII/task-list-app");
    };

    const handleIpaProjClick = () => {
        window.open("https://github.com/SaschaVII/portfolio");
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
                        <ProjectCard title="Simple Task List" projectUrl="https://saschavii.github.io/task-list-app" thumbnailSrc="/taskListApp_thumbnail.png">
                            <p>A simple Next.js powered task list that is meant to increase productivity. It smartly orders tasks based on pin-status, priority and due date, highlighting the the most important task for you. Storage is implemented using the browser&#39;s local storage api.</p>
                            <Button className="mt-2" type="secondary" onClick={handleTaskListAppProjClick}><FaGithub /> GitHub</Button>
                        </ProjectCard>
                        <ProjectCard title="IPA Keyboard" projectUrl="/ipa" thumbnailSrc="/ipa_proj_thumbnail.png    ">
                            <p>An keyboard that automatically copies the International Phonetic Alphabet symbols to your clipboard, created with <strong>React</strong>.</p>
                            <Button className="mt-2" type="secondary" onClick={handleIpaProjClick}><FaGithub /> GitHub</Button>
                        </ProjectCard>
                        <ProjectCard title="More to come soon" thumbnailSrc="https://placekitten.com/375/375">
                            <p>I am currently in the process of adding all my the projects I've been working on...</p>
                        </ProjectCard>
                        {/* <ProjectCard title="Project Title 3" thumbnailSrc="https://placekitten.com/375/375">
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