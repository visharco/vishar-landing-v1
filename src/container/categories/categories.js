import React, {Component} from 'react';

import categorytitle from '../../assets/images/categorytitle.svg'
import search from '../../assets/icons/search.svg'

import Product from '../../component/product/product'

import './style.css';
import GetApi from '../../controler/getToApi';
import SeeMoreComponent from '../../component/category/seeMore/seeMoreComponent';
import priceDigit from '../../component/priceDigit/priceDigit';


class CategoriesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            isLoadingData: true,
            
        }
    }

    componentWillMount = async () => {

        const res = await GetApi('site/category');
        await this.setState({
            category: res.data,
            isLoadingData: false
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
 

    // show image priview and big
    //-------------------------------------------------------------------------------------------------------------------------------------------------
    _actionModal = (val,image, title, color , desc,price) => { 
        // console.log("keypresss")


 
        this.setState({
            title:title,
            image:image,
            color:color,
            desc: desc,
            price: price,
        })
        if(val === 'open'){
            // document.getElementById('dialog').classList.add('show')
            // const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');

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
            // window.scrollTo(0, parseInt(scrollY || '0') * -1);
            // document.getElementById('dialog').classList.remove('show');

            this.Modal.current.style.display = 'none';
        }

    }


    render() {

        const renderCategory = (
            this.state.category ? this.state.category.map((data, index) => {
                return <Product data={data} action={(op,image,title,color,desc,price) => this._actionModal(op,image,title,color,desc,priceDigit(price,'price')) }/>
            }) : ''
        )
        return (

            <div className="categories">
                <div className="C-title">
                    <div className="container-fluid">
                        <div className="container">
                            <img src={categorytitle} alt="عنوان دسته بندی ویشار"/>
                            <div className="C-title-right">
                                <h1>دسته بندی های ویشار</h1>
                                <p>
                                طراحان ویشار، پروژه های مختلفی را در زمینه هایی چون طراحی لوگو، ست اداری، بنر، طراحی کارت ویزیت، بروشور و... طراحی و تحویل مشتری می دهند. دسته بندی های ما طیف گسترده ای از نیازهای شما را برآورده خواهند کرد. پس با ما همراه باشید.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="C-search">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="C-search-box ">
                                {/*<input type="text" />*/}
                                {/*<img src={search} alt="جستجو" />*/}
                            </div>

                            <div  ref={this.Modal} className="modal-fff" >
                              <div>
                                  <div className="close-button" onClick={() => this._actionModal('close')}></div>
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


                            <div className="C-search-wrap">
                                <div className="C-search-result "> 
                                    {!this.state.isLoadingData ? renderCategory : <div className="loading-fff"></div>}

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default CategoriesComponent;