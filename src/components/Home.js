import React from "react";
import banner from '../images/banner/banner.png';

function Home() {
  return (
    <>
    <div className="row row-cols-1 row-cols-md-2 g-4">
    <div>
        <div className="stroke-line col my-3 animate__animated animate__floating"></div>
      <h1 className=" title animate__animated animate__fadeIn">Your Next Interactive Experience </h1>
      <p className="themeColor-text animate__animated animate__fadeIn">Full-stack Developer</p>
      <p className="text-grey animate__animated animate__fadeIn">
        As an experienced and passionate Web Developer, we bring a wealth of
        skills and knowledge to any project or role. With 4 years of
        experience in Freelancing, we've honed our skills in Full-stack Web
        Development, Graphic Designing, Programming & Freelancing.
      </p>
      <div className="mob-view">
      <button type="button" className="btn custom-btn-contact my-2 animate__animated animate__floating" >Contact Me</button>
      <button type="button" className="btn custom-btn-light my-2  animate__animated animate__floating" >Learn more</button>
      </div>
     

    </div>
    <div className="col img-banner"><img src={banner} alt="" /></div>
    </div>
   
    </>
  );
}

export default Home;
