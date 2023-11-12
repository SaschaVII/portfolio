import React, { useState, useRef } from 'react';

const IpaCard = ({ title, content, clickHandler, copyFont }) => {
    const [isClicked, setIsClicked] = useState(false);
    const cardHtmlElement = useRef(null);
    let classList = "ipa-card";
    
    content = content || title;
    if (content === " ") title = "␣";
    if (isClicked) classList = "ipa-card-clicked";
    if (copyFont) classList += (" plain");

    const copyToClipboard = (stringToCopy) => {
        navigator.clipboard.writeText(stringToCopy);
        if (clickHandler) clickHandler(content);
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 500);

        // highlight the inner HTML for manual copying
        if(copyFont) window.getSelection().selectAllChildren(cardHtmlElement.current);
    };

    return (
        <div className={classList}
            onClick={() => copyToClipboard(content)}
            ref={cardHtmlElement}>
            {title}
            {(isClicked) && <div className='ipa-copied-text'>copied</div>}
        </div>
    );
};

export default IpaCard;