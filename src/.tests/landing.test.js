import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from '../components/landing';


describe('Landing page test suite', () => {
    it('renders the landing page without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<LandingPage />, div)
        ReactDOM.unmountComponentAtNode(div)
      })
})
