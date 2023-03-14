import Button from "@/components/button";
import ProjectCard from "@/components/projectCard";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";

const Work = () => {
    return (
        <>
            <Head>
                <title>Sascha Kuhness - Work</title>
            </Head>
            <div className="container mt-5 sm:mt-20">
                <section>
                    <h1 className="mb-2">Work</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ProjectCard title="Project Title 1" thumbnailSrc="https://placekitten.com/375/375">
                            <p>Project Description...</p>
                        </ProjectCard>
                        <ProjectCard title="Project Title 2" thumbnailSrc="https://placekitten.com/375/375">
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
                        </ProjectCard>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Work;