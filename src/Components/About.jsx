import React from 'react';
import AboutSVG from './AboutSVG.svg';
import useWebAnimations from "@wellyshen/use-web-animations";

const About = () => {

  const main2 =   [
    {transform: 'translateY(-50px);' }
  ];

  const mainR2 =   [
    {transform: 'translateY(50px)' }
  ];
  

  const ABTiming = {duration: 4000, iterations: Infinity, playbackRate:1, direction: "alternate-reverse", easing: "ease-in"};
  const ABMovement = useWebAnimations({keyframes:main2,timing:ABTiming}, {keyframes:mainR2,timing:ABTiming});


    return (
        <div>
            <section id="weAre">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div>
            <h1 className="weHead">We Are</h1>
          </div>
          <div>
            <div className="square"></div>
            <div className="innerSquare"></div>
            <p className="wePara">
              A highly specialized Management team with over 20 combined years of experience in the Healthcare industry
              with proven ability to optimally combine digital technology, skilled resources and efficient business
              processes to implement creative as well as proven market solutions to suit an ever-evolving market. Our
              forte has been to successfully tailor our solutions to support your needs whether it is in the space of
              Consulting, Product Management or Service Delivery.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div ref={main2.ref}>
            <img src={AboutSVG} alt="Zapare Technologies."/>
        </div>
        </div>
      </div>
    </div>
  </section>
        </div>
    )
}

export default About