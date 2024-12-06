import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/src/all';
import AnimatedTitle from './AnimatedTitle';
gsap.registerPlugin(ScrollTrigger)
const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('')
    const itemRef = useRef();
    const handelMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientX - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) 
        rotateY(${tiltY}deg) scale3d(0.95,0.95,0.95)` ;

        setTransformStyle(newTransform)
    }
    const handleMouseLeave = () => {
        setTransformStyle('');
    }

    return (
        <div className={className} ref={itemRef}
            onMouseMove={handelMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}>
            {children}
        </div>
    )
}

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: '#clip',
                start: 'center center',
                end: '+=800 center',
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })
        clipAnimation.to('.mask-clip-path', {
            width: '100vw',
            height: '100vh',
            borderRadius: 0,

        })
    })
    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:text-[10px]'>Welcome to Zentry</h2>
                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                    containerClass="mt-5 !text-black text-center"
                />
                <div className='about-subtext'>
                    <p>The Game of Games begins-your life , now an epic MMORPG </p>
                    <p>Zentry unites player from countless games and platforms</p>
                </div>
            </div>
            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img src="img/about.webp" alt="background"
                        className='absolute left0 top-0 size-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default About
