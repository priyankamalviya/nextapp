import React from 'react'

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
        <p>Lorem Ipsum rendered on: {this.props.renderLocation}</p>
      </div>
    )
  }
}
