import React, { Component } from 'react';

import tik from '../../assets/icons/tik.svg';
import product from '../../assets/images/slide2.png'
import PriceDigit from '../priceDigit/priceDigit';
import AOS from 'aos';


import './style.css';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        AOS.init();

    }


    // componentWillMount() {
    //     console.log(this.props.data)
    // }
 



    render() {
        return (
            <div className="product" data-aos="flip-right" 
            onClick={()=> this.props.action(
                'open',
                this.props.data.background,  
                this.props.data.title,  
                this.props.data.color,  
                this.props.data.more_desc,  
                this.props.data.price,  
                )}>
             
                <div className="product-img"  >
                    <img src={this.props.data.image} alt="کتگوری های ویشار" />
                </div>
                <div className="product-down" >
                    <div className="product-title" >
                        <div> 
                            <span>تومان</span>
                            <p> {PriceDigit(this.props.data.price,'price')}</p>
                        </div>
                        <h1>{this.props.data.title}</h1>
                    </div>
                    <div className="product-text" >
                        {this.props.data.desc}
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;




/*
=====================================================================================
How can use this button : ------->




=====================================================================================

*/