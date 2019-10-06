import React, { Component } from 'react';
import './style.css';
import rocket from '../../assets/images/rocket.svg'



class MatchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const mathcs = (
             <div className="match-container">
                <div className="btn-match">
                    <p>اطلاعات بیشتر</p>
                </div>
                <div className="txt-match">
                    <h2>فراخوان شرکت در مسابقه کودکی</h2>
                    <p>مسابقه بزرگ طراحی لوگو و کاراکتر برای استارت آپ با موضوع روانشناسی کودک بین تمام طراحان کشور</p>
                </div>
                <div className="img-match">
                    
                </div>
            </div>
        )
        return ( 
            <div className="projects" >
                <div className="P-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <img src={rocket} alt="راکت" />
                            <div className="P-title-left">
                                <h2>در مسابقه شرکت کن</h2>
                                <h1>با بهترین طرح  خود برنده باش</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="P-body" >
                    <div className="container-fluid">
                        <div className="container" >
                            
                               {mathcs}
                               {mathcs}
                               {mathcs}
                               {mathcs}
                        </div>
                    </div>
                </div>


            </div>
         );
    }
}
 
export default MatchComponent;