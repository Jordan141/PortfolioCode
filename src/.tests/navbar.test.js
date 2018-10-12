import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/navbar';


describe('Navbar test suite', () => {
    it('renders the navbar without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Navbar />, div)
        ReactDOM.unmountComponentAtNode(div)
      })
})
