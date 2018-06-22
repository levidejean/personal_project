import React,{ Component } from 'react';
import axios from 'axios';
class Review extends Component {

componentDidMount(){
axios.get('/reviews/').then(results => {
  console.log(results)
}) 
}

  render(){
    return(
      <div>
      
      </div>
    )
  }
}

export default Review;