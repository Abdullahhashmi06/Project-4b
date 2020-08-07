import React from 'react'
import hero from './Section1Hero.svg';
import useWebAnimations from "@wellyshen/use-web-animations";


const Section1 = () => {

    const S1Frames =   [
        {transform: 'rotate(5deg) translateX(-30px)' },
        {transform: 'rotate(-5deg) translateX(30px)' }
    ];

    const S1Timing =   {duration: 8000, iterations: Infinity, playbackRate:1,direction: "alternate"};
    const S1Movement = useWebAnimations({keyframes:S1Frames,timing:S1Timing});

    const HSFrames =   [
        {borderRadius: '44% 16% 58% 42% / 32% 49% 51% 68%' },
        {transform: 'rotate(5deg)' },
        {borderRadius: '4% 75% 26% 10% / 82% 12% 51% 9%' },
        {borderRadius: '23% 0% 83% 17% / 32% 49% 51% 68%' }
         
    ];

    const HSTiming = {duration: 12000, iterations: Infinity, playbackRate:1, direction: "alternate", easing: "ease-in-out"};
    const HSMovement = useWebAnimations({keyframes:HSFrames,timing:HSTiming});
    
    return (
        <section id="banner">
            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-6 text-left">
                    <div ref={S1Movement.ref}>
                        <img src={hero} alt="Zapare Technologies."/>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 bannerHead">
                <div className="heroShape" ref={HSMovement.ref}></div>
                <div>
                    <h1>Scalable extended business office services Staff Augmentation</h1>
                </div>
                <div>
                    <p>Staff Augmentation</p>
                </div>
                </div>
            </div>
            </div>
      </section>
    )
}

export default Section1
