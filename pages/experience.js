import Head from "next/head";

const Experience = () => {
    return (
        <>
            <Head>
                <title>Sascha Kuhness - Experience</title>
            </Head>
            <div className="container mt-5 sm:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div>
                        <h1 className="mb-4">Job Experience</h1>
                        <section className="mt-2">
                            <h2>Calendar Club UK, Exeter, England - Software Developer</h2>
                            <h3>MAY 2022 - PRESENT</h3>
                            <p>
                                Tasked with creating new and exciting in-house solutions, adding to existing projects and maintaining software I am constantly exposed to a variety of different technologies. This has made me adapt in getting familiar with the unfamiliar swiftly.
                            </p>
                        </section>
                        <section className="mt-4">
                            <h2>Ventrica, Southend-on-Sea, England - Customer Service Advisor</h2>
                            <h3>OCTOBER 2021 - May 2022</h3>
                            <p>
                                Part of a busy customer service team providing support and guidance for valued customers. Able to resolve any customer dissatisfactions and provide solutions appropriately.
                            </p>
                        </section>
                        <section className="mt-4">
                            <h2>Sitel, Derriford, England - NHS Track & Trace Call Handler</h2>
                            <h3>OCTOBER 2020 - JUNE 2021</h3>
                            <p>
                                Call handler for NHS Track & Trace campaign, requiring excellent verbal and written communication skills, as well as problem solving skills.
                            </p>
                        </section>
                        <section className="mt-4">
                            <h2>Pole To Win, London, England - LQA Tester</h2>
                            <h3>NOVEMBER 2019 - NOVEMBER 2020</h3>
                            <p>
                                LQA Tester at Pole To Win, London. A fast-paced work environment with a focus on teamwork.
                            </p>
                        </section>
                        <a className="btn btn-secondary mr-2 inline-block mt-8" href="/cv_7_01_2023.pdf" target="_blank">For more details check out my CV!</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Experience;