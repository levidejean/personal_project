
import React, { Component } from "react";
import axios from "axios";
import './Picker.css';
import Foodform from "../Foodform/Foodform";


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



class Picker extends Component {
  constructor() {
    super();

    this.state = {
        dataArr: [],
        currentPickName: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(value){
this.setState({ info: value });
  }

//helper function for use in handleSubmit
//returns a random integer between 0 and max



handleSubmit(){
    axios.get(`/getdata/${this.state.info}`)
    .then(results => {
                      this.setState({ dataArr: results.data});
                      console.log(this.state.dataArr);
                      var myRand = getRandomInt(this.state.dataArr.length-1);
                      console.log(myRand);
                      var myRandomObject = results.data[myRand];
                      console.log("RANDOM_OBJECT: " + myRandomObject);
                      console.log("-name: " + myRandomObject.name);
                      this.setState({ currentPickName: myRandomObject.name })
                     }
    )
}
  render() {
    return(
    <div>
      <Foodform/>
    </div>
  );
  }
}
export default Picker;
