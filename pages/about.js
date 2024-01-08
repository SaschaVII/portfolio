/* eslint-disable @next/next/no-img-element */
import Button from "@/components/button";
import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>Sascha Kuhness - About</title>
            </Head>
            <div className="container mt-5 sm:mt-20">
                <div className="grid grid-cols-12 gap-8">
                    <section className="col-span-12 lg:col-span-4">
                        <img src="/headshot.jpg" alt="Sascha Kuhness Headshot" />
                    </section>
                    <section className="col-span-12 lg:col-span-8">
                        <h1 className="mb-2 inline-block is-underlined">About</h1>
                        <p className="mb-4">
                            As a dedicated and motivated professional, I am actively seeking a new entry-level position as a Software Tester/Developer. With experience in coding for multiple projects, I possess a strong understanding of object-oriented programming languages and am passionate about staying up-to-date with the latest technologies.
                        </p>
                        <p className="mb-4">
                            One of my most notable achievements was the successful coding of an Arduino chip to serve as a MIDI interface for my diploma thesis at HTL Bulme. This project not only allowed me to demonstrate my technical skills, but also showcased my ability to think creatively and solve complex problems.
                        </p>
                        <p className="mb-4">
                            I am excited to bring my skills and expertise to a new opportunity where I can contribute to the development and success of innovative projects. Thank you for considering my application.
                        </p>
                        <a className="btn btn-secondary mr-2 inline-block" href="/Sascha_Kuhness_CV_Jan_24.pdf" target="_blank">Check out my CV</a>
                    </section>
                </div>
            </div>
        </>
    );
};

export default About;
