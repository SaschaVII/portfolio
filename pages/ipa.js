import IpaCard from "@/components/ipaCard";
import IpaMerger from "@/components/ipaMerger";
import Head from "next/head";
import { useState } from "react";

const Contact = () => {
    const [mergedString, setMergedString] = useState("");
    const addToIpaMerger = symbol => setMergedString(current => current + symbol);
    const deleteMergedString = () => setMergedString("");
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
                        <IpaCard title="&#x03B8;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x00F0;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x0283;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x0292;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x014B;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x0294;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x0279;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x02A4;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x02A7;" clickHandler={addToIpaMerger} />
                    </div>
                    <h2>Vowels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 py-2 mb-4">
                        <IpaCard title="&#x026A;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x028A;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x025B;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x025C;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x028C;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x0254;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x0251;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x0252;" clickHandler={addToIpaMerger} />
                    </div>
                    <h3>Diphthongs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 py-2">
                        <IpaCard title="e&#x026A;" clickHandler={addToIpaMerger} />
                        <IpaCard title="o&#x028A;" clickHandler={addToIpaMerger} />
                        <IpaCard title="a&#x028A;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x026A;&#x0259;" clickHandler={addToIpaMerger} />
                        <IpaCard title="e&#x0259;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x0254;&#x026A;" clickHandler={addToIpaMerger} />
                        <IpaCard title="a&#x026A;" clickHandler={addToIpaMerger} />
                        <IpaCard title="&#x028A;&#x0259;" clickHandler={addToIpaMerger} />
                    </div>
                    {(mergedString) && 
                        <>
                            <h1 className="mb-2 inline-block is-underlined mt-10">Symbol Merger</h1><br />
                            <IpaMerger content={mergedString} onDelete={deleteMergedString} />
                        </>
                    }

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