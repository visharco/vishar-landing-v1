import React, { Component } from 'react';
import './style.css';



class MatchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className=" ">
                   <div className="container-fluid">
                       <div className="container">
                           <div className="match">
                              
                            <h1>Match</h1>
                       
                           </div>
                       </div>
                   </div>
            </div>
         );
    }
}
 
export default MatchComponent;