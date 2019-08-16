import React, { Component } from 'react';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 

import './style.css';


class SeeMoreComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                 <div className="see-more-bg" style={{backgroundImage:'url(' + this.props.image + ')'}}> 
                    <div className="see-more-container">
                        
                        <h1 className= {this.props.color + " h1-big"} >
                        {this.props.title}
                        </h1>
                        <p className="see-more-text-long">
                            {this.props.desc}                       
                        </p>
                        <div className="see-more-box">
                            <ul>
                                <li className={this.props.color + " row-line"}>
                                    <i className="fa fa-bullhorn h1-big"></i>
                                    <h2>یک مسابقه بی نظیر</h2>
                                </li>
                                <li>
                                    <h3 className="fixed-details">
                                    طراحان از سراسر ایران طرح های نهایی خود را جهت مشاهده برای ایده منحصر بفرد شما ارائه می دهند. همه طرح ها را با دقت مشاهده کنید و آنچه را که می پسندید به عنوان طرح نهایی انتخاب کنید.
                                    </h3>
                                </li>
                                <li className="row-line-child">
                                    <i className="fa fa-check"></i>
                                    <p>شروع قیمت از {this.props.price} تومان</p>
                                </li>
                                <li className="row-line-child">
                                    <i className="fa fa-check"></i>
                                    <p>ایده های خلاقانه از طراحان مختلف و حرفه ای  دریافت می کنید.</p>
                                </li>
                                <li className="row-line-child">
                                    <i className="fa fa-check"></i>
                                    <p>رعایت قوانین کپی رایت و دریافت فایل مطلوب و با کیفیت.</p>
                                </li>
                                <li className="row-line-child">
                                    <i className="fa fa-check"></i>
                                    <p>۱۰۰ ٪ گارانتی بازگشت وجه در صورت عدم دریافت طرح.</p>
                                </li>

                                <li></li>
                                <li>
                                    <div className={this.props.bg + " btn-get-now"} onClick={()=> window.open('http://dashboard.vishar.com')}>
                                       عضویت رایگان!
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                 </div>
               
         );
    }
}
 
export default SeeMoreComponent;