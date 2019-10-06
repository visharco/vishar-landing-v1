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
                 <h1>sdsdsdsd</h1>
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