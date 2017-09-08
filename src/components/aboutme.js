import React, {Component} from 'react'
const profilePic = '../../img/orthographic-assembly-drawing.jpg'
class AboutMe extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div id='about' className='content-section'>
                <div className='container'>
                    <div className='row'>
                        <div className = 'col-sm-8 col-lg-7'>
                            <h1> {this.props.data.title} </h1>
                            <p className="lead"> {this.props.data.subtitle}</p>
                            <p><strong>{this.props.data.lineOne.split(':')[0]}:</strong> {this.props.data.lineOne.split(':')[1]}</p>
                            <p>{this.props.data.lineTwo}</p>
                            <p>{this.props.data.lineThree}</p>
                        </div>
                        <div className='col-sm-4 col-lg-5 hidden-xs'>
                            <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="jmoss41">
                                <a className="LI-simple-link" href='https://uk.linkedin.com/in/jmoss41?trk=profile-badge'>Jordan Moss</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe