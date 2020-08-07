import React from 'react';
import Careersvg from './Careersvg.svg';
import useWebAnimations from "@wellyshen/use-web-animations";

const Career = () => {

  const S3Frames1 =   [{transform: 'rotate(200deg)', offset:0.2, },
                       {borderRadius: '0', offset:0.4, easing: "ease-out",},{transform: 'translateX(60px)', offset:0.5, easing: "ease-out",},{transform: 'rotate(180deg)', offset:1 }]; 
                       /*,
                       */
  
  const S3Timing1 =   {duration: 12000, iterations: Infinity, playbackRate:1, direction: "alternate-reverse"};


  const S3Movement = useWebAnimations({keyframes:S3Frames1,timing:S3Timing1});



  // const SquareAnim = [
  //   {transform: 'rotate(360deg);'}
  // ];

  // const SquareAnimR = [
  //   {transform: 'rotate(-360deg);'}
  // ];

  // const SquareX = [
  //   {transform: 'translateX(30px)'}
  // ];

  // const SquareBorder = [
  //   {borderRadius: '0px' }
  // ];

  // const sqTiming = {duration: 12000, iterations: Infinity, playbackRate:1, direction: "alternate-reverse", easing: "ease-in"};
  // const inSqTiming = {duration: 16000, iterations: Infinity, playbackRate:1, direction: "alternate-reverse", easing: "ease-in"};


    return (
        <div>
          <section id="lastSect">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={Careersvg} alt="Zapare Technologies."/>
                </div>
                <div className="col-md-6">
                  <div className="talk">
                    <div className="square3" ref={S3Movement.ref}></div>
                      <h1>Talk to our experts about your requirements</h1></div>
                  <div className="mt-5"><p className="lastPara">Contact us and know more about how our experts can help your business grow.</p></div>
                  <div className="mt-5"><p className="lastPara2">Enquire Now</p></div>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default Career
