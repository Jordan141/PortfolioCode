import React, { Component} from 'react'

const Navbar = props => {
    function onInputChange(term) {props.onLanguageChange(term)}

    return (
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand scroll" href="#home">{props.brand}</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><a href="#home" className="scroll">{props.tiles[0]}</a></li>
                        <li><a href="#about" className="scroll">{props.tiles[1]}</a></li>
                        <li><a href="#portfolio" className="scroll">{props.tiles[2]}</a></li>
                        <li><a href="#contact" className="scroll">{props.tiles[3]}</a></li>
                    </ul>
                    <select className='form-control languageSelect' onChange={event => onInputChange(event.target.value)}>
                        {Object.keys(props.languages).map((x,i) => <option key={i} value={props.languages[x]}>{x}</option>)}
                    </select>
                </div>
            </div>
        </nav>
    )
}

export default Navbar