import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { get } from 'https';

 class AfterSubmit extends Component {

    render () {
        return (
            <div>
                    <h2> List of Items you order -</h2>
                    <p>salad: {this.props.ingredient.value.salad }</p>
                
                      <p>bacon: {this.props.ingredient.value.bacon} </p>
                
                     <p>cheese: {this.props.ingredient.value.cheese} </p> 
                       
                       
              
                <h1> Your Burger is of Rs.{this.props.ingredient.value.totalAmount} </h1>
                    <Link to='/userinfo'>Confirm Order</Link>
            </div>
        )
    }
}
        const mapStateToProps = (state) => {
            console.log(state, "state");
            return{
                    ingredient: state.ingredient
            };

        };

export default connect (mapStateToProps,null)(AfterSubmit);