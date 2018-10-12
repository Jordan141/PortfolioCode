import React, {Component} from 'react'
import logo from '../assets/img/logo.png'

class Navbar extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='navbar'>
                <header>
                    <nav id='nav' className = 'center grid-14'>
                        <div className='fonts-display clearfix'>
						<p className ='text-left alpha'><a href='/'>Home</a></p>
                        <p className ='text-left'><a href='/skills'>Skills</a></p>
						<p className ='text-left'><a href='/about'>About</a></p>
						<p className ='logo'>
							<a href='/' title='Built by Jordan Moss'>
								<img src={logo} alt='Built by Jordan Moss' alt='logo'/>
							</a>
						</p>
                        <p className ='text-right'><a href='/feed'>Feed</a></p>
						<p className ='text-right'><a href='/projects'>Projects</a></p>
						<p className ='text-right omega'><a href='/contact'>Contact</a></p>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default Navbar