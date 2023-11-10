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
                        <IpaCard title="&#x0294;" />
                        <IpaCard title="&#x0279;" />
                        <IpaCard title="&#x02A4;" />
                        <IpaCard title="&#x02A7;" />
                    </div>
                    <h2>Vowels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 py-2 mb-4">
                        <IpaCard title="&#x026A;" />
                        <IpaCard title="&#x0251;" />
                        <IpaCard title="&#x028A;" />
                        <IpaCard title="&#x025B;" />
                        <IpaCard title="&#x025C;" />
                        <IpaCard title="&#x028C;" />
                        <IpaCard title="&#x0254;" />
                        <IpaCard title="&#x0251;" />
                        <IpaCard title="&#x0252;" />
                    </div>
                    <h3>Diphthongs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 py-2">
                        <IpaCard title="e&#x026A;" />
                        <IpaCard title="o&#x028A;" />
                        <IpaCard title="a&#x028A;" />
                        <IpaCard title="&#x026A;&#x0259;" />
                        <IpaCard title="e&#x0259;" />
                        <IpaCard title="&#x0254;&#x026A;" />
                        <IpaCard title="a&#x026A;" />
                        <IpaCard title="&#x028A;&#x0259;" />
                    </div>
                    <h1 className="mb-2 inline-block is-underlined mt-10">Useful Links</h1><br />
                    <ul className="list-disc list-inside">
                        <li>
                            <a className="underline"
                                href="https://www.phon.ucl.ac.uk/home/wells/ipa-unicode.htm?fbclid=IwAR3Lvlg7JClo5w4xaC9pAv7ixkCpndvEd9cNb5LRYzj5MlVqIZzkjSW11ik"
                                target="_blank">
                                The International Phonetic Alphabet in Unicode
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
};

export default Contact;