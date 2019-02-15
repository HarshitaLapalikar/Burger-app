
import React , { Component } from 'react';
import { show_orders }  from '../Redux/action';
import { connect } from 'react-redux';

class Info extends Component{


componentDidMount = () => {
    this.props.show_orders();

}
        render() {
        
            const {data, loading} = this.props; 

            if(loading){
                return(
                    <div>Loading...</div>
                )
            }
            else{
                return(
                    <div>
                        <ul>
                            {
                            (data.length > 0) ? data.map((data,index) => {
                                    return <li key={index}>{data.id} , {data.name}  </li>
                             
                                    }) : 'No data'
                            }
                        
                        </ul>
                    </div>

                )
            }
                
            
            
        }

    }   
    const mapDispatchToProps = dispatch => {
        return {
            show_orders: () => dispatch(show_orders())
        }
    }
    const mapStateToProps = (state) => {
        return{
            data : state.data, 
            loading: state.loading
        }
    }

export default connect(mapStateToProps, mapDispatchToProps) (Info);