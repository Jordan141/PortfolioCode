import React, {Component} from 'react'
import Project from './project'


class Portfolio extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id='portfolio' className='content-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h1> {this.props.data.title} </h1>
                            <p className='lead'>{this.props.data.desc}</p>
                        </div>
                        {this.props.data.projects.map((x,i) => <Project key={i} title={x.title} desc={x.desc} imageURL={x.imageURL} url={x.url}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio