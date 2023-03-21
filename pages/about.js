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
                        <h1 className="mb-2">About</h1>
                        <p className="mb-4">
                            I am a hardworking individual currently seeking a new entry level position as a Software Tester/Developer. Having worked on the code for multiple projects, I have made myself very well versed in object oriented programming languages.
                        </p>
                        <p>
                            Recent achievements include the coding of an Arduino chip, serving as a MIDI Interface, for my diploma thesis at HTL Bulme.
                        </p>
                        <a className="btn btn-secondary mr-2 inline-block mt-4" href="/cv_7_01_2023.pdf" target="_blank">Check out my CV</a>
                    </section>
                </div>
            </div>
        </>
    );
};

export default About;