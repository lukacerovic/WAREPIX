import React, { useRef, useState } from 'react';
import AboutCardsText from './AboutCardsText';
import MacWeb from './MacWeb';
import IphoneApp from './IphoneApp';
import LogoBaner from './LogoBaner';

const AnimatedTilt = ({children, className}) => {
    const [transformStyle, setTransformStyle] = useState("")

    const itemRef = useRef();

    const handleMouseMove = (e) => {
        if(!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientReact();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 20;
        const tiltY = (relativeX - 0.5) * -20;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

        setTransformStyle(newTransform)
    }

    const handleMouseLeave = (e) => {

    }
    return (
        <div 
            className={className}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{transform: transformStyle}}
        >
            {children}
        </div>
    )
}

const Features = () => {
  return (
    <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <AboutCardsText />
            <div id="services"></div>
            <MacWeb/>
            <IphoneApp />
        </div>
    </section>
  )
}

export default Features