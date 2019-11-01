 import React, { Component } from 'react';
 import './style.css';
 import {Helmet} from "react-helmet";



 class PolicyComponent extends Component {
     constructor(props) {
         super(props);
         this.state = {  }
     }
     render() { 
         return ( 
             <div className=" ">
                          <Helmet>
                <meta charSet="utf-8" />
                <title>My aras </title>
                <link rel="canonical" href="http://vishar.com/example" />
            </Helmet>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="policy">
                               
                                <br />
                                <br />
                                <br />
                                <h2>قوانین و مقررات ویشار</h2>
                                <h3>تعریف ویشار</h3>
                                <p>ویشار پلتفرمی آنلاین برای ایجاد ارتباط بین طراح و کارفرما و همچنین انجام پروژه های طراحی به صورت جمع سپاری(crowdSourcing) است، طراح ها می توانند یک صفحه شخصی داشته باشند تا نمونه کارها، مهارت و اطلاعات تماس شان را ثبت کنند تا کارفرما با آنها تماس بگیرد و کارفرما پس از ثبت پروژه از خلاقیت چندین طراح بهره مند می شود و در نهایت طرحی که از آن رضایت دارد را انتخاب می کند، طراحان نیز می توانند در هر پروژه ای که تمایل داشته باشند شرکت کنند و علاوه بر دریافت مبلغ پروژه در صورت پذیرفته شدن از طرف کارفرما، به سازمان ها نیز معرفی می شوند. ویشار نیز در ازای هر پروژه مبلغی به عنوان کمیسیون دریافت می کند</p>

                                <h3>جمع سپاری </h3>
                                <p>جمع سپاری یا crowdSourcing روشی از انجام پروژه ها است که در آن به جای اینکه یک نفر پروژه را انجام دهد چندین نفر در انجام آن مشارکت می کنند</p>

                                <h3>کارفرما</h3>
                                <p>هر شخص حقیقی یا حقوقی که به عنوان کارفرما در سایت ثبت نام کند و برای ثبت پروژه و یا ارسال پیغام همکاری به طراح وارد پلتفرم می شود</p>

                                <h3>طراح</h3>
                                <p>هر شخص حقیقی که با نام واقعی خود در سایت ثبت نام می کند و یک صفحه شخصی در ویشار دارد و در انجام پروژه ها میتواند شرکت کند</p>

                                <h3>ارتباط بین طراحان</h3>
                                <p>طراحان می توانند از نمونه کارهای هم بازدید کرده و در صورت لزوم با یکدیگر تماس برقرار کنند . هر طراحی که اقدام به کپی کردن طرح دیگر طراحان کند متخلف شناخته شده و صفحه شخصی او مسدود می شود و دیگر امکان شرکت کردن در پروژه ها را نخواهد داشت</p>

                                <h3>ارتباط بین کارفرما و طراح</h3>
                                <p>کارفرما می تواند برای همکاری با طراح برای او پیغام شخصی ارسال کند و یا در صورت لزوم مستقیما با طراح تماس بگیرد</p>
                                <p>اگر کارفرما خارج از پلت فرم ویشار با طراح تماس برقرار کند، ویشار در قبال همکاری که بین آنها صورت می گیرد هیچ مسئولیتی بر عهده ندارد</p>
                                <p>در پروژه های جمع سپاری (crowd sourcing) پس از دریافت طرح ها از طرف طراح، کارفرما اجازه کپی برداری از طرح ها را نخواهد داشت و در صورت مشاهده این تخلف، کارفرما متخلف شناخته شده و امکان انجام پروژه برای آن شخص حقیقی یا حقوقی در ویشار وجود ندارد</p>
                                <p>کارفرما پس از مشاهده طرح ها و انتخاب طرح برگزیده، می تواند برای انجام تغییرات جزیی از طریق ویشار با طراح تماس بگیرد</p>
                                <p>ویشار هیچ مسئولیتی در قبال ارتباط خارج از پلتفرم بین طراح و کارفرما بر عهده ندارد</p>
                                <p>مسئولیت متن ها و تصاویری که برای پروژه ثبت می شود بر عهده کارفرما است و ثبت هر پروژه ای که مغایر با قوانین جمهوری اسلامی ایران و شئونات اجتماعی باشد تخلف محسوب می شود و کارفرما متخلف شناخته می شود</p>
                                <p>ثبت طرح هایی که مغایر با قوانین جمهوری اسلامی ایران و شئونات اجتماعی باشد تخلف محسوب شده و طراح متخلف شناخته می شود و اکانت او مسدود می گردد</p>
                                <p></p>

                                <h3>صفحه شخصی</h3>
                                <p>هر طراح یک صفحه شخصی در ویشار دارد و میتواند رزومه و اطلاعات تماس خود را در آن وارد کند.استفاده از آدرس صفحه شخصی در شبکه های اجتماعی، امضای ایمیل، کارت ویزیت و... بلامانع می باشد.</p>
                                <p>استفاده از هرگونه تصویر و متن مغایر با قوانین جمهوری اسلامی و شئونات جمهوری اسلامی در صفحه شخصی تخلف محسوب شده و با فرد خاطی برخورد خواهد شد</p>

                                <h3>پرداخت امن</h3>
                                <p>کارفرما پس از ثبت پروژه ملزم به پرداخت تمام مبلغ به ویشار خواهد بود و این مبلغ از طرف ویشار نگهداری میشود و هنگام تحویل طرح به کارفرما، مبلغ به طراح پرداخت می شود</p>

                                <h3>پرداخت به طراح</h3>
                                <p>پس از پایان پروژه و ارسال تمام فایل ها ، مبلغ با احتساب کارمزد به حساب شما واریز می شود</p>
                                <p>مسئولیت صحت اطلاعات حساب بر عهده طراح می باشد.</p>
{/* 
                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>

                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p>


                                <h3>ddddddddddddddddddd</h3>
                                <p>sdsdsdsdsdsd</p> */}

                            </div>
                        </div>
                    </div>
             </div>
          );
     }
 }
  
 export default PolicyComponent;