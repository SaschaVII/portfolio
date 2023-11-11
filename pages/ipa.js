import IpaCard from "@/components/ipaCard";
import IpaMerger from "@/components/ipaMerger";
import Head from "next/head";
import { parse } from "postcss";
import { useState, useEffect } from "react";

const Contact = () => {
    const [ipaData, setIpaData] = useState(null);
    const [mergedString, setMergedString] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/ipa.json");
                const data = await response.json();
                setIpaData(data);
            } catch (error) {
                console.error('Error fetching IPA data:', error);
            }
        };
        fetchData();
    }, []);

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
                    {ipaData?.consonants?.map((text, index) => (
                        <IpaCard key={index} title={text} clickHandler={addToIpaMerger} />
                    ))}
                    </div>
                    <h2>Vowels</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 py-2 mb-4">
                    {ipaData?.vowels?.standard?.map((text, index) => (
                        <IpaCard key={index} title={text} clickHandler={addToIpaMerger} />
                    ))}
                    </div>
                    <h3>Diphthongs</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 py-2">
                    {ipaData?.vowels?.diphthongs?.map((text, index) => (
                        <IpaCard key={index} title={text} clickHandler={addToIpaMerger} />
                    ))}
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