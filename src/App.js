import React, { Component } from 'react'
import AfterSubmit from './components/AfterSubmit';
import Order from './Order/Order';
import { Link , NavLink } from 'react-router-dom'


class App extends Component  {
    constructor(props) {
        super(props);
        this.state = {
           Salad: 0, 
            Cheese: 0,
            Bacon: 0,
            totalAmount: 0, 
            Salad_Price: 3,
          Cheese_Price: 4,
          Bacon_Price: 5
        }
    }
             // handleChange = (e) => {
        //   let ing1 = this.refs.i1.value*5;
        //   let ing2 = this.refs.i2.value*7;
        //   let ing3 = this.refs.i3.value*9;
        //   let ing4 = this.refs.i4.value*8;
        //   let total = ing1+ing2+ing3+ing4;
        //   this.setState(() => ({totalAmount: total}))
        //   let change  = ({[e.target.name] : e.target.value});
        // }

            handleSalad = (e)=> {
              console.log(e.target.value);
              this.setState({Salad: e.target.value});
            }    

            handleCheese = (e) => {
              this.setState({Cheese: e.target.value});
            }

            handleBacon = (e) => {
              this.setState({Bacon: e.target.value});
            }
              
            addAction = (e) => {
              e.preventDefault();
              // const{Salad, Cheese, Bacon}= this.state;
              // this.setState({
              //   total:(parseInt(Salad)+parseInt(Cheese)+parseInt(Bacon))
              // })

              this.setState({total : this.state.Salad+this.state.Cheese+this.state.Bacon});
             let  total= (parseInt(this.state.Salad*this.state.Salad_Price)+
                          parseInt(this.state.Cheese*this.state.Cheese_Price)+
                          parseInt(this.state.Bacon*this.state.Bacon_Price))
                //this.setState(() => ({totalAmount: total}));
                this.setState({totalAmount : total}, ()=> {
                  console.log(this.state.totalAmount,"this.state.totalAmount");
                })

                // this.setState({totalAmount:total});
                // console.log(this.state.totalAmount);s
              }
           
            // handleShowIngredients = (e) => {
            //   console.log(this.state)
            // }
          


    render() {
        return (
            
            <div>
              <h1>Hey !! Make your Burger Here</h1> <br/> 
              <h2>Please add Ingredients</h2>
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
            
            <Link to ={
             { pathname:'/submit', state: {totalAmount : this.state.totalAmount}} }>
             <button className='SubmitForm' type='submit' >Submit</button>
             </Link>
              
              <button type="submit" onClick={this.addAction} value={this.state.total}>Order</button>
               
               
                {/* { <NavLink to='/submit' > 
                  <button onClick={this.addAction} value={this.state.total}>Submit</button>
                </NavLink> */} 
        </form>
      </div>   
        )
    }
  }

export default App;