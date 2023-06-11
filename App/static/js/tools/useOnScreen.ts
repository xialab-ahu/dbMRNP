import React from 'react';

// A hook that observes whether a component is  visible in DOM.
/*  
!   Usage:
?   const ref = React.useRef();
?   const isVisible: boolean = React.useOnScreen(ref);
*/

export default function useOnScreen(ref: React.RefObject<Element>) {

    const [isIntersecting, setIntersecting] = React.useState(false);

    const observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
    );

    React.useEffect(() => {
        observer.observe(ref.current as Element);
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() };
    });

    return isIntersecting
}