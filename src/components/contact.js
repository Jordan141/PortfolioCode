import React, {Component} from 'react'

class Contact extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return (
           <div id='contact' className='content-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h1> {this.props.title} </h1>
                            <p className='lead'> {this.props.desc}</p>
                            <div className='social-cont'>
                                <div className='row'>
                                    <div className='col-sm-12'>
                                        <a className="btn btn-default btn-lg linkedin-btn" href="https://uk.linkedin.com/in/jmoss41" role="button" target="_blank"><i className="fa fa-linkedin"></i><span>LinkedIn</span></a>
                                        <a className="btn btn-default btn-lg twitter-btn" href="https://twitter.com/JordanMoss52" role="button" target="_blank"><i className="fa fa-twitter"></i><span>Twitter</span></a>
                                        <a className="btn btn-default btn-lg github-btn" href="https://codepen.io/Jordan141/" role="button" target="_blank"><i className="fa fa-codepen"></i><span>CodePen</span></a>
                                        <a className="btn btn-default btn-lg fcc-btn" href="https://www.freecodecamp.com/jordan141" role="button" target="_blank"><i className="fa fa-fire"></i><span>freeCodeCamp</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Contact