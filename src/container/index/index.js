import React, {Component} from 'react';

import Categories from '../../component/index/categories/categories'
import GetStarted from '../../component/index/getStarted/getStarted'
import HowWorking from '../../component/index/howWorking/howWorking';
import OurService from '../../component/index/ourService/ourService';
import SampleDesigns from '../../component/index/sampleDesigns/sampleDesigns';
import CustomerComment from '../../component/index/customerComment/customerComment';
import './index.css'



class IndexComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount(){
        this._actionModal('open');
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
        return ( 
            <div>

                <div  ref={this.Modal} className="modal-333" >
                        <div>
                            <div className="close-button" onClick={() => this._actionModal([],'close')}></div>
                            <div className="img-index-popup">

                            </div>
                        </div>
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