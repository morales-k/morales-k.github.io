import React, { useState, useEffect, useRef } from 'react'

const TypingEffect = (props) => {
    const { words, keySpeed, maxPauseAmount } = props;
    const [wordIndex, setWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[wordIndex].split(''));
    const direction = useRef("backward");
	const typingInterval = useRef();
	const letterIndex = useRef();
    let pauseCounter = 0;

    useEffect(() => {
        typingInterval.current = setInterval(() => {
            if (pauseCounter > 0) {
                pauseCounter = pauseCounter - 1;
                return;
            }

            if (direction.current === "forward") {
                typeLetter();
            } else {
                backspace();
            }
        }, keySpeed);
    
        // Clean up interval on update or unmount.
        return () => {
          clearInterval(typingInterval.current);
        }
    }, [currentWord, wordIndex, keySpeed, words, maxPauseAmount]);

    const typeLetter = () => {
        if (letterIndex.current >= words[wordIndex].length) {
          direction.current = "backward";
          pauseCounter = maxPauseAmount;
          return;
        }

        const segment = words[wordIndex].split('');
        setCurrentWord(currentWord.concat(segment[letterIndex.current]));
        letterIndex.current = letterIndex.current + 1;
      }

    const backspace = () => {
        if (letterIndex.current === 0) {
            const isOnLastWord = wordIndex === words.length - 1;
            setWordIndex(!isOnLastWord ? wordIndex + 1 : 0);
            direction.current = "forward";
            return;
        }
        
        const segment = currentWord.slice(0, currentWord.length - 1);
        setCurrentWord(segment);
        letterIndex.current = currentWord.length - 1;
    }

    return (
        <span className="blue">
        {` ${currentWord.join("")} `}
        </span>
    );
}

export default TypingEffect;