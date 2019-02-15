import React, { Component } from 'react'
import { connect } from 'react-redux';
import {add_ingredients} from './Redux/action'
import { Link } from 'react-router-dom';


class App extends Component  {
    state = {
           salad: 0, 
            cheese: 0,
            bacon: 0,
            totalAmount: 0, 
            Salad_Price: 3,
            Cheese_Price: 4,
            Bacon_Price: 5,
    }

            handleSalad = (e)=> {
              console.log(e.target.value);
              this.setState({salad: e.target.value});
            }    

            handleCheese = (e) => {
              this.setState({cheese: e.target.value});
            }

            handleBacon = (e) => {
              this.setState({bacon: e.target.value});
            }
              
            addAction = (e) => {

                e.preventDefault();
              
                let  total= (parseInt(this.state.salad*this.state.Salad_Price)+
                         parseInt(this.state.cheese*this.state.Cheese_Price)+
                         parseInt(this.state.bacon*this.state.Bacon_Price));
                
                this.setState({totalAmount : total}, ()=> {
                  this.props.add_ingredients(this.state);
                  console.log(this.state.totalAmount,"this.state.totalAmount");
                  console.log(this.state);
                  console.log(total)
                });

                 
            }
          

    render() {
        return (
            <center>
            <div>
              <h1>Hey !! Make your Burger Here</h1> <br/> 
              <h2>Add Ingredients</h2>
            <form>
             <div>
              <label>Salad :</label>
              <input  type="number"  onChange={(e) => this.handleSalad(e)}  />
            </div>
             <div >
              <label >Cheese:</label>
              <input   type="number" onChange={(e) => this.handleCheese(e)}  />
            </div>
            <div >
              <label>Bacon:</label>
              <input  type="number"  onChange={(e) => this.handleBacon(e)}     />
            </div>
            <br/>
            <div>
              <h3> Please Submit your Ingredients before Proceed  </h3>
            </div> <br/>
            <button type="submit" onClick={this.addAction} >Submit Ingredients</button>
            {

              <Link  to ='/submit' >
                  Proceed
                </Link>
            }
            
        </form>
      </div>   >
      </center>
        )
    }
  
  }

  const mapDispatchToProps = dispatch => {
    return {
      add_ingredients : (state) => dispatch(add_ingredients(state))
    };
  };

export default connect( null, mapDispatchToProps) (App);