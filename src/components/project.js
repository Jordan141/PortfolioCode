import React, {Component} from 'react'

class Project extends Component{
    constructor(props){
        super(props)
    }

    render(){
            return(
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <a href={this.props.url} target='_blank'>
                        <img src={this.props.imageURL} alt="Project Dummy"/>
                    </a>
                    <div className="caption">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.desc}</p>
                    </div>
                </div>
            </div>
            )
    }
}

export default Project