import React, { Component } from 'react';
import ReactDOM, {render} from 'react-dom';
import Banner from './components/banner'
import Navbar from './components/navbar'
import AboutMe from './components/aboutme'
import Portfolio from './components/portfolio'
import Contact from './components/contact'
import Freecodecamp from './components/freecodecamp'
import config from './config'
let myLocalization = navigator.language || navigator.userLanguage;

class App extends Component {
  constructor(props) {
    super(props);
    if(myLocalization === 'en-US'){
      myLocalization = 'en'
    }
    myLocalization = myLocalization.toUpperCase();
    this.state = {
        geo: myLocalization
     }
     this.onLanguageChange = this.onLanguageChange.bind(this);
  }
  onLanguageChange(input = 'EN'){
    this.setState({geo: input})
  }

  render() {
    const {navbar, banner, about, language, contact, portfolio, footer} = config[this.state.geo]
    return (
      <div>
        <Navbar brand={navbar.brand} geo={language} languages={config.languages} onLanguageChange={this.onLanguageChange} tiles={navbar.tiles}/>
        <Banner sub={banner.sub} title={banner.title} />
        <AboutMe data={about}/>
        <Portfolio data={portfolio} />
        <Contact desc={contact.desc} title={contact.title}/>
      </div>
    );
  }
}

render(<App />, document.querySelector('.wrapper'));
