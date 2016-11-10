import React from 'react'
import Nav from '../components/Nav'

export default class extends React.Component{
  static getInitialProps({req}){
    const renderLocation = req?'Server': 'Client'
    return {
      renderLocation
    }
  }
  render(){
    return(
      <div>
        <h1>Contact Page</h1>
        <Nav />
        <p>Lorem Ipsum rendered on: {this.props.renderLocation}</p>
      </div>
    )
  }
}
