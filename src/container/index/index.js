import React, {Component} from 'react';
import {Helmet} from "react-helmet";

import Categories from '../../component/index/categories/categories'
import GetStarted from '../../component/index/getStarted/getStarted'
import HowWorking from '../../component/index/howWorking/howWorking';
import OurService from '../../component/index/ourService/ourService';
import SampleDesigns from '../../component/index/sampleDesigns/sampleDesigns';
import CustomerComment from '../../component/index/customerComment/customerComment';
// syles added ---------->
import './index.css'

class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount() {
      this._actionModal('open');  // TODO: to lunch popup after get image
    }


    Modal = React.createRef();

    _actionModal = (val) => {
        if(val === 'open'){
            const body = document.body;
            body.style.height = '100vh';
            body.style.overflowY = 'hidden';
            this.Modal.current.style.display = 'block';
        }
        else if (val === 'close'){
            const body = document.body;
            body.style.position = '';
            body.style.top = '';
            body.style.height = '';
            body.style.overflowY = '';
            this.Modal.current.style.display = 'none';
        } 
    }


    render() { 
        return ( 
            <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>طراحی آنلاین سریع و باکیفیت پروژه های گرافیکی | ویشار</title>
                <link rel="canonical" href="http://vishar.com" />
            </Helmet>


                <div  ref={this.Modal} className="modal-333" >
                            
                        <a href="http://koodakii.vishar.com/" target="_blank">

                        
                        
                            <div className="img-index-popup">
                            <div className="close-button" onClick={() => this._actionModal('close')}></div>
                            </div>
                        </a>
                </div>

                <GetStarted />
                <Categories />
                <HowWorking />
                <OurService />
                <SampleDesigns />
                <CustomerComment />
            </div>
         );
    }
}
 
export default IndexComponent;