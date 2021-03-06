import React, { Component } from 'react';

import rocket from '../../assets/images/rocket.svg'
import {Helmet} from "react-helmet";

import Project from '../../component/project/project';
import GetToApi from '../../controler/getToApi';
import './style.css';



class ProjectsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects:[],
            isLoadingData: true,
        }
    }



    componentWillMount = async() =>{
        const res= await GetToApi('site/projects?type=project'); 
        // console.log(res.data)
        if(res.status === 200 ) {
            this.setState({
                projects : res.data,
                isLoadingData : false
            })
        }
        else {
           alert(res.error)
        }
      
    }

    //
    //------------------------------------------->
    fetchData = async(key) => {
        this.setState({
            isLoadingData : true
        })
        const res = await GetToApi('site/projects?type=' + key); 
              console.log(res.data)
              if(res.status === 200 ) {
                this.setState({
                    projects : res.data,
                    isLoadingData : false
                })
            }
            else {
               alert(res.error)
            }
    }

    //
    // ------------------------------------------>
    //
    open = React.createRef()
    finish = React.createRef()

    openFinishFilter = (e) => {

        if (e.target.id === 'open') {
            // is projects
            this.fetchData('project');
            e.target.style.backgroundColor = "rgb(0, 144, 207)"
            e.target.style.color = "#fff"
            this.finish.current.style.backgroundColor = "#f5f5f5"
            this.finish.current.style.color = "#888"
        }
        else {
            // is matchs
            this.fetchData('match')
            e.target.style.backgroundColor = "rgb(0, 144, 207)"
            e.target.style.color = "#fff"
            this.open.current.style.backgroundColor = "#f5f5f5"
            this.open.current.style.color = "#888"
        }
        // console.log('wfe')

    }
    render() {


        const renderProjects = (
           this.state.projects.length > 0 ? this.state.projects.map((data,index) => {
           return <Project data ={data} key={index}/>
           }) : <div className="not-found">
               <h3>اطلاعاتی برای نمایش موجود نیست</h3>
           </div>
        )
        return (
            <div className="projects" >
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>لیست پروژه ها | ویشار</title>
                    <link rel="canonical" href="http://vishar.com/projects" />
                </Helmet>
                <div className="P-title" >
                    <div className="container-fluid">
                        <div className="container" >
                            <img src={rocket} alt="راکت" />
                            <div className="P-title-left">
                                <h2>پروژه ات را پیدا کن</h2>
                                <h1>شغلت رو بساز</h1>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="P-body" >
                    <div className="container-fluid">
                        <div className="container" >
                            <div className="P-filter" >
                                <div className="P-filter-left">
                                    {/* <select selected="زمان">
                                        <option value="0">انتخاب زمان</option>
                                        <option value="A">زمان یک</option>
                                        <option value="B">زمان دو</option>
                                        <option value="C">زمان سه</option>
                                    </select> */}
                                </div>
                                <div className="P-filter-right" >
                                    <div className="P-open-finish" >
                                        <p className="P-tab" onClick={this.openFinishFilter} id="open" ref={this.open}>پروژه </p>
                                        <p className="P-tab" onClick={this.openFinishFilter} id="finish" ref={this.finish}>مسابقه</p>
                                    </div>
                                    <select selected="دسته بندی" disabled>
                                        <option value="0">انتخاب دسته بندی</option>
                                        <option value="A">دسته اول</option>
                                        <option value="B">دسته دوم</option>
                                        <option value="C">سته سوم</option>
                                    </select>
                                </div>
                            </div>


                            
                            <div className="P-results" >
                                {/* <h1 className="P-result-title" >نمایش 789 نتیجه </h1> */}
                         
                              {!this.state.isLoadingData ? renderProjects : <div className="loading-fff"></div>}


                            </div>




                            {/* <div className="pagination" >
                                <p className="pagination-number">1</p>
                                <p className="pagination-number">2</p>
                                <p className="pagination-number pagination-number-selected">3</p>
                                <p className="pagination-number">4</p>
                                <p className="pagination-number">5</p>
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ProjectsComponent;