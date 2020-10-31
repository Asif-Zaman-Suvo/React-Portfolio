import React, { Component } from 'react';
import resumeData from '../resumeData';
import PortfolioItem from './PortfolioItem';
export default class Porfolio extends Component {
  render() {

    return (
      <section id="portfolio">
        <h4 style={{fontSize:"35px",fontFamily:'sans-serif'}} className="text-center">Some Of My Projects </h4>    
        <div className="container pt-2 portfolio-area">
           
      <div className="row mt-5 pt-2 d-flex justify-content-center">
       <div className="col-md-12">
       {resumeData.portfolio.map(item => <PortfolioItem key={item.link} item={item} />)}
       </div>
      </div>
    </div>
      </section>
    );
  }
}



