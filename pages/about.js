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
                        <p className="mb-4">Cillum qui qui reprehenderit cupidatat veniam ad aute aliquip Lorem velit anim et. Dolor proident laboris pariatur nulla proident. Amet esse exercitation reprehenderit labore ullamco elit est veniam et enim et deserunt. Nisi fugiat id sint commodo laborum ipsum sunt ipsum excepteur aliqua.</p>
                        <p className="mb-4">Officia incididunt consequat nulla ea do aliquip ullamco veniam. Ex laborum adipisicing velit esse tempor minim cupidatat fugiat ut nostrud duis cupidatat laborum. Enim duis Lorem nisi aute enim occaecat. Anim proident eiusmod dolor duis sint velit occaecat. Nostrud Lorem nulla exercitation amet eu et consectetur proident adipisicing laborum Lorem est velit. Veniam mollit exercitation duis non adipisicing culpa anim labore cupidatat sit.</p>
                        <Button type="primary">Click Me Please</Button>
                    </section>
                    <section className="col-span-12 lg:col-span-8">
                        <h1 className="mb-2">About</h1>
                        <p className="mb-4">Cillum qui qui reprehenderit cupidatat veniam ad aute aliquip Lorem velit anim et. Dolor proident laboris pariatur nulla proident. Amet esse exercitation reprehenderit labore ullamco elit est veniam et enim et deserunt. Nisi fugiat id sint commodo laborum ipsum sunt ipsum excepteur aliqua.</p>
                        <p className="mb-4">Officia incididunt consequat nulla ea do aliquip ullamco veniam. Ex laborum adipisicing velit esse tempor minim cupidatat fugiat ut nostrud duis cupidatat laborum. Enim duis Lorem nisi aute enim occaecat. Anim proident eiusmod dolor duis sint velit occaecat. Nostrud Lorem nulla exercitation amet eu et consectetur proident adipisicing laborum Lorem est velit. Veniam mollit exercitation duis non adipisicing culpa anim labore cupidatat sit.</p>
                        <Button type="primary">Click Me Please</Button>
                    </section>
                </div>
            </div>
        </>
    );
};

export default About;