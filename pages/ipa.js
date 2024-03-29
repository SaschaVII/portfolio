import IpaCard from "@/components/ipaCard";
import IpaMerger from "@/components/ipaMerger";
import Head from "next/head";
import { useState, useEffect } from "react";
import React from "react";
import { current } from "tailwindcss/colors";

const Ipa = () => {
    const [ipaData, setIpaData] = useState(null);
    const [mergedString, setMergedString] = useState("");
    const [includeFont, setIncludeFont] = useState(false);

    useEffect(() => {
        // Retrieve includeFont value from local storage
        const storedIncludeFont = localStorage.getItem('includeFont');
        if (storedIncludeFont !== null) {
            setIncludeFont(storedIncludeFont === 'true');
        }

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
    const removeLastCharInMergedString = () => setMergedString(current => current.slice(0, current.length-1));
    const toggleIncludeFont = () => {
        setIncludeFont(current => {
            const newValue = !current;
            // Store the updated value in local storage
            localStorage.setItem('includeFont', newValue.toString());
            return newValue;
        });
    }
    const generateSubHeaderOrIpaCards = (item, itemKey) => {
        if (Array.isArray(item)) {
            return (
                <div key={itemKey}>
                    <h2 className="capitalize">{itemKey}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 py-2 mb-4">
                        {item.map(text => (
                                <IpaCard key={text} title={text} clickHandler={addToIpaMerger} copyFont={includeFont} />
                        ))}
                    </div>
                </div>
            );
        }
        return Object.keys(item).map((key) => generateSubHeaderOrIpaCards(item[key], key));
    }

    return (
        <>
            <Head>
                <title>Sascha Kuhness - IPA</title>
            </Head>
            <div className="container mt-5 sm:mt-20">
                <section>
                    <div className="mb-4 float-right flex items-center">
                        <input type="checkbox"
                                id="copyFont_input"
                                className="w-4 h-4 mr-2"
                                checked={includeFont}
                                onChange={toggleIncludeFont} />
                        <label htmlFor="copyFont_input">Switch to manual copy mode</label>
                    </div>
                    <div className="mb-8">
                        {ipaData && Object.keys(ipaData).map(key => (
                            <React.Fragment key={key}>
                                <h1 className="mb-2 inline-block is-underlined capitalize">{key}</h1>
                                {generateSubHeaderOrIpaCards(ipaData[key], key)}
                            </React.Fragment>
                        ))}
                    </div>
                    {(mergedString) && 
                        <div className="mb-8">
                            <h1 className="mb-4 inline-block is-underlined">Symbol Merger</h1><br />
                            <IpaMerger content={mergedString} onDelete={deleteMergedString} onBackspace={removeLastCharInMergedString} copyFont={includeFont}/>
                        </div>
                    }

                    <h1 className="mb-2 inline-block is-underlined">Useful Links</h1><br />
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

export default Ipa;