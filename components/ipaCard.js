import React, { useState } from 'react';

const IpaCard = ({ title, content }) => {
    const contentToCopy = content || title;
    const [isClicked, setIsClicked] = useState(false);

    const copyToClipboard = (stringToCopy) => {
        navigator.clipboard.writeText(stringToCopy);
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);
    };

    return (
        <div className={(!isClicked?'ipa-card':'ipa-card-clicked')} onClick={() => copyToClipboard(contentToCopy)}>
            {title}
            {(isClicked) && <div className='ipa-copied-text'>copied</div>}
        </div>
    );
};

export default IpaCard;