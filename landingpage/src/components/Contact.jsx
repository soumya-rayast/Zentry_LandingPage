import { useRef, useState } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass, alt = '', fallback = '/img/fallback.webp' }) => (
  <div className={clipClass}>
    <img
      src={src}
      alt={alt}
      onError={(e) => (e.target.src = fallback)}
    />
  </div>
);

const ImageTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    if (width === 0 || height === 0) return;

    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) 
      rotateY(${tiltY}deg) scale3d(0.95, 0.95, 0.95)`;

    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('');
  };

  return (
    <div
      className={`${className}`}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-5">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-82 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageTilt>
            <ImageClipBox
              src="/img/contact-1.webp"
              clipClass="contact-clip-path-1"
              alt="Contact decorative image 1"
            />
          </ImageTilt>
          <ImageTilt>
            <ImageClipBox
              src="/img/contact-2.webp"
              clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
              alt="Contact decorative image 2"
            />
          </ImageTilt>
        </div>

        <ImageTilt className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
            alt="Swordman partial"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
            alt="Swordman"
          />
        </ImageTilt>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join Zentry
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
            className="special-font text-hero-large w-full font-zentry font-black leading-[.9]"
          />

          <Button title="contact us" containerClass="mt-10 cursor-pointer bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
