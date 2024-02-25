import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./DemoCarousel.css";

class DemoCarousel extends Component {
    constructor(props) {
        super(props);
        this.carouselItems = [
            {title:'Hong-Kong', img:'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg'}, 
            {title:'Macao', img:'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp'},
            {title:'Japan', img:"https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp"}, 
            {title:'Las Vegas', img:'https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp'}
        ];
    }
    
    render() {
        return (
            <div className="carousel-container">
                <Carousel>
                    {this.carouselItems.map((item, index) => {
                        return (
                            <div key={index} >
                                <img src={item.img} alt={item.title} />
                                <p className="legend">{item.title}</p>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        );
    }
};

export default DemoCarousel;