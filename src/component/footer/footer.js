import React, {Component} from 'react';

import facebook from './../../assets/icons/facebook.svg'
import twitter from './../../assets/icons/twitter.svg'
import instagram from './../../assets/icons/instagram.svg'
import telegram from './../../assets/icons/telegram.svg'
import '../../../node_modules/sweetalert/dist/sweetalert.css'
import './style.css';
import SweetAlert from "sweetalert-react";
import PostToApi from "../../controler/postToApi"; 
 
const iframe = '<iframe src="http://www.vishar.com/enamad.html" width="220" height="202"></iframe>'; 

class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailFooter: ''
        }
    }

    //
    // get data from input by event target -------------------------------------------------------------->
    //
    changedHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //
    // ----------------------------------------------------------------------------------------------------
    _submitEmail = async () => {
        const data = new FormData();
        data.append('email', this.state.emailFooter)
        const res = await PostToApi(data, 'site/newsletters' );
        if (res.status === 200) {
            this.setState({
                alertText: 'کاربر گرامی اطلاعات با موفقیت ثبت شد.',
                show: true,
                emailFooter: '',
            });
        } else
            this.setState({
                alertText: res.error,
                show: true
            });
    }

    //
    //
    _goto = (val) => {
        window.location.pathname = val;

    }
    _openEnamad = () => {
        // window.open('https://trustseal.enamad.ir/Verify.aspx?id=126862&amp;p=pgWlS6pCVix54VAI&quot',' toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30')
        // window.open('https://trustseal.enamad.ir/Verify.aspx?id=126862&amp;p=QLc1X4NC0uwIknYj&quot&quot','Popup&quot&quot','toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30&quot')    }
        // window.open(ccc);
        window.open("https://trustseal.enamad.ir/Verify.aspx?id=126862&amp;p=GKiH7jvXOYp7ABG6&quot;");

        // window.open('http://www.facebook.com/sharer.php?s=100&p[title]=Fb Share&p[summary]=Facebook share popup&p[url]=javascript:fbShare("http://jsfiddle.net/stichoza/EYxTJ/")&p[images][0]="http://goo.gl/dS52U"', 'sharer', 'toolbar=0,status=0,width=548,height=325');

    }


    iframe() {
        return {
          __html: iframe
        }
      }



    render() {
        const enamad = (   <img 
            src="https://trustseal.enamad.ir/logo.aspx?id=126862&amp;p=pgWlS6pCVix54VAI" 
            alt="" 
            onClick={this._openEnamad}
            id="pgWlS6pCVix54VAI"    />
        )
        return (
           
            <div>
       

            <div className="footer">
                <SweetAlert
                    show={this.state.show}
                    title="اعلان"
                    text={this.state.alertText}
                    onConfirm={() => this.setState({show: false})}
                />
                <div className="container">
                    <div className="footer-split ">
                        <h1>عضویت در خبرنامه</h1>
                        <div className="footer-newslater">
                            <div className="newslater-container">
                                <input className="footer-newslater-input-container" name="emailFooter"
                                       value={this.state.emailFooter} onChange={this.changedHandler}
                                       placeholder="ایمیل"/>


                                <div className="footer-newslater-button-container" onClick={this._submitEmail}>
                                    <p>عضویت</p>
                                </div>
                            </div>
                            <div className="footer-social-network">
                                <div>
                                    <a className="F-SN" href="http://www.facebook.com">
                                        <img className="footer-social" src={facebook} alt="فیسبوک"/>
                                    </a>

                                </div>
                                <div>
                                    <a className="F-SN" href="http://www.twitter.com">
                                        <img className="footer-social" src={twitter} alt="توویتر"/>
                                    </a>
                                </div>
                                <div>
                                    <a className="F-SN" href="http://www.instagram.com/AD_COMPLEX">
                                        <img className="footer-social" src={instagram} alt="اینستاگرام"/>
                                    </a>
                                </div>
                                <div>
                                    <a className="F-SN" href="http://www.telegram.com">
                                        <img className="footer-social" src={telegram} alt="تلگرام"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
              
                    <div className="footer-split ">
                        <h1>منوها</h1>
                        <div className="footer-menu">
                            <ul>
                                <li onClick={() => this._goto('/aboutus')}> 
                                    درباره ویشار
                                    <i className="fa fa-check"></i>
                                </li>
                                <li onClick={() => window.location = "http://www.blog.vishar.com/"}>
                                    بلاگ ویشار
                                    <i className="fa fa-check"></i>
                                </li>
                                <li onClick={() => this._goto('/contactUs')}>
                                    تماس باما
                                    <i className="fa fa-check"></i>
                                </li>
                                <li onClick={() => this._goto('/policy')}>
                                    قوانین و مقررات
                                    <i className="fa fa-check"></i>
                                </li>
                            </ul>
                            <ul>
                                <li onClick={() => this._goto('/categories')}>
                                    دسته بندی ها
                                    <i className="fa fa-check"></i>
                                </li>
                                <li onClick={() => this._goto('/designers')}>
                                    طراحان ویشار
                                    <i className="fa fa-check"></i>
                                </li>
                                <li onClick={() => this._goto('/projects')}>
                                    پروژه ها
                                    <i className="fa fa-check"></i>
                                </li>
                            </ul> 
                        </div>
                    </div>

                </div>
            </div>

            <div className="under-footer ">
                <div className="container row">
                    <div className="col-50 d-f">
                        <div className="enamad"   > 
                            <div className="e-namad-container" dangerouslySetInnerHTML={ this.iframe() } />
                        </div>
                        <a href="http://mazandaran.irannsr.org/" target="_blanck" >
                            <div className="enamad"   > 
                                <div className="senf-iran"></div>
                            </div>
                        </a>

                  
                    </div>
                    <div className="col-50 footer-text">
                        <h2>ویشار</h2>
                        <p>مجموعه ویشار افتخار همکاری با متخصصین حوزه های مختلف طراحی و گرافیک را دارا بوده و قادر به برآورده کردن نیاز طیف وسیعی از کارفرمایان و مشتریان می باشد. اگر صاحب شرکتی بزرگ هستید و یا حتی کسب و کاری محلی و کوچک دارید تفاوتی نخواهد کرد، ویشار می تواند خواسته های شما را در طراحی به نحو احسنت اجرایی کند.</p>
                        <p>مشتریان در هر مرحله از طراحی پروژه می توانند با گرافیست و طراح انتخاب شده در تماس بوده و گام به گام با تکمیل سفارش، نظرات خود را جهت بهبود کار طراحی بیان کنند و طراح نیز موظف به شنیدن آنها با سعه صدر و بهبود کار با توجه به نیاز و میل مشتری می باشد. به جرات می توانیم بگوییم که سرعت انجام کار در کنار کیفیت بالا و مشتری مداری جزو افتخارات مجموعه ویشار می باشد.</p>
                    </div>
                </div>
     
            </div>

            </div>
        );
    }
}

export default FooterComponent;