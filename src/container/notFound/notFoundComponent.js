import React , {Component } from 'react';
import './style.css';
import {Helmet} from "react-helmet";

class NotFound extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
     
        return (
            <div className="aboutUs">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>طراحی آنلاین سریع و باکیفیت پروژه های گرافیکی | ویشار</title>
                    <link rel="canonical" href="http://vishar.com/404" />
                </Helmet>
            <div className="aboutUsTextImg" >
                <div className="container-fluid">
                    <div className="container">
                        <h1 className="aboutUs-title notfound" >4 0 4 </h1>
                        <h4>متاسفانه صفحه مورد نظر ، پیدا نشده است</h4>
                  
                    </div>
                </div>
            </div>
       

        </div>
        )
    }
    
}


export default NotFound;
