import React, { useEffect, useState } from 'react';
import "./scrollingText.css"

const ScrollingText = ({ text }) => {
  const words = text.split(' ');
  const [opacity, setOpacity] = useState(Array(words.length).fill(0.2));

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.body.offsetHeight - window.innerHeight);
      const numSpansToChange = Math.ceil(scrollPercentage * words.length);

      setOpacity(prevOpacity => prevOpacity.map((_, index) => index < numSpansToChange ? 1 : 0.2));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [words.length]);

  return (
    <div id="paragraph">
      {words.map((word, index) => (
        <span key={index} style={{ opacity: opacity[index] }}>
          {word}{' '}
        </span>
      ))}
    </div>
  );
};

export default ScrollingText;
