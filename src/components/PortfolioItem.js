import React from 'react';

const PortfolioItem = ({ item }) => {

    const { name, description, imgurl, link, git } = item
    return (
        <div className="text-center">
            <div className="card">
                <img style={{width:"60%"}} className="card-img-top rounded shadow pb-2 w-50" src={imgurl} alt="Card  cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
            <div className="linkArea text-center d-flex align-items-center justify-content-between">
                <button className="px-5 rounded"><a href={link} target="_blank" rel="noopener noreferrer">Live</a></button>
                <button className="px-5 rounded"><a href={git} target="_blank" rel="noopener noreferrer">Github</a></button>
            </div>
            <hr></hr>
        </div>
       
    
        
    );
};

export default PortfolioItem;