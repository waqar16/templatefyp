import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Technologies from "./components/Technologies";
import Courses from "./components/Courses";
import Carousel from "./components/Carousel";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// import Cards from "./components/Cards";
// import work from './images/Mywork/all-devices-white.png';

function App() {
  return (
    <>
 
      <Navbar />
      <div className="Home-content" >
        <div className="custom-size">
          <Home />
        </div>
      </div>
      <div>
      <Carousel/>
      </div>
      <div className="blog testinomial-sec">Technologies we've Worked</div>
      <span className="tech-subtitle text-grey">These are the frameworks I've learned and expericed</span>
      <Technologies/>
   
      <div className="blog" data-aos="fade-up">Learn with us</div>
      <span className="tech-subtitle text-grey">Here is the list of offered courses</span>
      
      
      <div className="courses-area">
        <Courses/>
      
      </div>
<div className="testinomial-sec">
<Testimonial/>

</div>
      <Contact/>
      <Footer/>
      
      {/* <div className="blog-tag" id="blog">
        <div className="blog">
         My Work
        </div>
      </div>
      <div className="work-image">
        <img src={work} alt="" />
      </div>
      <div className="blog-tag" id="blog">
        <div className="blog">
         Blogs
        </div>
      </div>
      <div className="card-alignment">
        <Cards />
      </div> */}
    </>
  );
}
export default App;
