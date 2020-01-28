import React, { Component } from 'react';
import {Link, browserHistory } from 'react-router'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SeeMoreComponent from '../../../component/category/seeMore/seeMoreComponent'; 
import {Helmet} from "react-helmet";

import slide1 from './../../../assets/images/slide1.png'
import slide2 from './../../../assets/images/slide2.png'
import slide3 from './../../../assets/images/slide3.png'
import GetToAPI from '../../../controler/getToApi';

import './style.css';
import priceDigit from '../../priceDigit/priceDigit';




class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:[]
        }
    }

    componentWillMount = async() => {
        const res = await GetToAPI('site/category');

        this.setState({
            category: res.data
        })
    }


    getclose = (event) => { 
        if(event.keyCode === 27) {
           this._actionModal("close")
        }

    }
    componentDidMount(){
        document.addEventListener("keydown", this.getclose, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.getclose, false);
    }


    Modal = React.createRef();


    _actionModal = (data,val) => {
       
        this.setState({
            title:data.title,
            image:data.background,
            color:data.color,
            desc: data.desc,
            price: priceDigit(data.price,'price'),
        });
 

        if(val === 'open'){
            const body = document.body;
            body.style.height = '100vh';
            body.style.overflowY = 'hidden';

            this.Modal.current.style.display = 'block';
        }
        else if (val === 'close'){

            const body = document.body;
            // const scrollY = body.style.top;
            body.style.position = '';
            body.style.top = '';
            body.style.height = '';
            body.style.overflowY = '';
            this.Modal.current.style.display = 'none';
        }

    }


    render() {
        const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 2500,
            slidesToShow: 4,
            slidesToScroll: 1,  
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        const renderCategory = (
            this.state.category ? this.state.category.map((data,index) => {
                    return   <div key={index} className="show-my-category" onClick={() =>  this._actionModal(data,'open')}>
                                <div className="category-slider" style={{ backgroundImage: 'url(' + data.image + ')' }} >
                                    <div  className={'cat-label b-'+data.color} >
                                        <div className="cat-icon" style={{backgroundImage:'url(' + data.icon + ')'}}></div>
                                        <h1>{data.title}</h1>
                                        <p>{data.desc}</p>
                                        <div className="cat--see-more">
                                            <p>نمایش بیشتر</p>
                                            <i className="fa fa-arrow-left"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
            }) : ''
        )



        return (
            <div className="categories" >

      


                <div className="container-fluid">
                    <div className="container-x">
                        <div className="cat-part1" >
                        <Link to="/categories" className="cat-part1-action" >
                            <p>نمایش همه  ی دسته بندیهای  </p>
                        </Link>
                            <div className="cat-part1-text"  data-aos="fade-up">
                                <h1>دسته بندی های ویشار</h1>
                                <h2>
                                طراحان ویشار، پروژه های مختلفی را در زمینه هایی چون طراحی لوگو، ست اداری، بنر، طراحی کارت ویزیت، بروشور و... طراحی و تحویل مشتری می دهند. دسته بندی های ما طیف گسترده ای از نیازهای شما را برآورده خواهند کرد. پس با ما همراه باشید.
                                </h2>
                                
                            </div>
                        </div>
                        <div className="cat-slider" >
                            <div>
                                <Slider {...settings}>
                                    {renderCategory}
                                </Slider>
                            </div>
                        </div>

                        <div  ref={this.Modal} className="modal-fff" >
                              <div>
                                  <div className="close-button" onClick={() => this._actionModal([],'close')}></div>
                              <SeeMoreComponent 
                                title={this.state.title}  
                                desc={this.state.desc}  
                                image={this.state.image}  
                                color={this.state.color} 
                                price={this.state.price} 
                                bg={"b-" + this.state.color }
                              />
                              </div>
                        </div>



                    </div>
                </div>
            </div>
        );
    }
}

export default Categories;