import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
              
                <h1> Your Burger is of Rs.{this.props.location.state.totalAmount} </h1>
                    <Link to='/userinfo'>Confirm Order</Link>
            </div>
        )
    }
}
export default AfterSubmit;