import React from 'react'
import card1 from '../images/BlogCards/programming.jpg';
import card2 from '../images/BlogCards/WebDev.jpg';
import card3 from '../images/BlogCards/report.jpg';

function Courses() {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-3">
  <div className="col">
  <div className="card" style={{width: '18rem'}}>
  <img src={card1} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Programming</h5>
    <p className="card-text text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn custom-btn-explore">Explore Courses</a>
  </div>
</div>
  </div>
  <div className="col">
  <div className="card" style={{width: '18rem'}}>
  <img src={card2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Web Development</h5>
    <p className="card-text text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn custom-btn-explore">Explore Courses</a>
  </div>
</div>
  </div>
  <div className="col">
  <div className="card" style={{width: '18rem'}}>
  <img src={card3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Freelancing</h5>
    <p className="card-text text-grey">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn custom-btn-explore">Explore Courses</a>
  </div>
</div>
  </div>
  
</div>
    </div>
  )
}

export default Courses
