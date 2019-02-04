import React , { Component } from 'react';
import axios from 'axios'

class Info extends Component{
    constructor(props) {
    super(props);
    this.state = {
        data: []
    }
    

}

componentDidMount() {
    // axios.get('http://5c52eda35dcbc40014b3aca3.mockapi.io/burger/v1/burger')
    // .then((res) => {
    //     console.log(res.data)
    //     this.setState(() => ({
    //         data: res.data
    //     }))
    
        fetch('http://5c52eda35dcbc40014b3aca3.mockapi.io/burger/v1/burger')
        .then(response => response.json())
      .then(data => this.setState({ data }));
        // .then((res) => {
        //     console.log(res)
        //     this.setState(() => ({
        //         data: res
        //     }))
        // })
}

// Api call
// 1. Get - Api se info nikal kr page pr dikhane k liye
// 2. Post - Page se input le kr database m data save krne k liye
// 3. Put - Somewhat like post
        render() {
            return(
                    <div>
                        <ul>
                            {
                                (this.state.data.length > 0) ? this.state.data.map((data,index) => {
                                    return <li key={index}>{data.id} , {data.name} </li>
                             
                                    
                                }) : 'No data'
                            }
                        </ul>
                    </div>

            )
        }

    }   

export default Info;