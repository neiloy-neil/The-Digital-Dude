import { useState, useEffect, useCallback, useRef } from 'react';

interface TypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delaySpeed?: number;
}

export const useTypewriter = ({
  words,
  typeSpeed = 120,
  deleteSpeed = 80,
  delaySpeed = 1200,
}: TypewriterOptions) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);
  const isMobile = useRef(false);

  // Check if device is mobile and update on resize
  useEffect(() => {
    const checkMobile = () => {
      isMobile.current = window.innerWidth < 768;
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleTyping = useCallback(() => {
    const i = loopNum % words.length;
    const fullText = words[i];

    // On mobile, reduce animation frequency for better performance
    const effectiveTypeSpeed = isMobile.current ? typeSpeed * 1.5 : typeSpeed;
    const effectiveDeleteSpeed = isMobile.current ? deleteSpeed * 1.5 : deleteSpeed;

    if (isDeleting) {
      setText((prev) => fullText.substring(0, prev.length - 1));
    } else {
      setText((prev) => fullText.substring(0, prev.length + 1));
    }

    setTypingSpeed(isDeleting ? effectiveDeleteSpeed : effectiveTypeSpeed);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), delaySpeed);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }
  }, [text, isDeleting, loopNum, words, typeSpeed, deleteSpeed, delaySpeed]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [handleTyping, typingSpeed]);

  return text;
};