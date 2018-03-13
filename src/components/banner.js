import React, { Component} from 'react'

class Banner extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id='home' className = 'content-section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12'>
                            <h1> {this.props.title.toUpperCase()} </h1>
                            <h5> {this.props.sub} </h5>
                            <blockquote className='quote bottom'>
                            <p> Memory is the scribe of the soul. </p>
                            <footer> Aristotle </footer>
                            </blockquote> 
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Banner