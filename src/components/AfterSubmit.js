import React, { Component } from 'react'

 class AfterSubmit extends Component {
    constructor(props) {
        super(props)
    this.state = {
            amount: 0                                                           //ye props ko access kiya h jo last file se send kiye h 
        
        }
    }
         
 componentDidMount() 
 {
 console.log(this.props)
 }
    
    render () {
        return (
            <div>
              
                <h1> Your Order is {this.props.location.state.totalAmount} </h1>
                    
            </div>
        )
    }
}
export default AfterSubmit;