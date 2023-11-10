import IpaCard from "@/components/ipaCard";
import Head from "next/head";

const Contact = () => {
    return (
        <>
            <Head>
                <title>Sascha Kuhness - IPA</title>
            </Head>
            <div className="container mt-5 sm:mt-20">
                <section>
                    <h1 className="mb-2 inline-block is-underlined">IPA Symbols</h1>
                    <h2>Consonants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 py-2 mb-4">
                        <IpaCard title="&#x03B8;" />
                        <IpaCard title="&#x00F0;" />
                        <IpaCard title="&#x0283;" />
                        <IpaCard title="&#x0292;" />
                        <IpaCard title="&#x014B;" />
                    </div>
                    <h2>Vowels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 py-2">
                        <IpaCard title="&#x026A;" />
                        <IpaCard title="&#x0251;" />
                        <IpaCard title="&#x0254;" />
                        <IpaCard title="&#x028A;" />
                        <IpaCard title="&#x0061;&#x026A;" />
                        <IpaCard title="&#x0061;&#x028A;" />
                        <IpaCard title="&#x006F;&#x028A;" />
                        <IpaCard title="&#x0065;&#x026A;" />
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;