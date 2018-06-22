import React, { Component } from "react";
import "./FoodForm.css";
import {
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  Button
} from "react-bootstrap";
import axios from "axios";
import Maps from "../Maps/Maps";
import { Link } from "react-router-dom";

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class Foodform extends Component {
  constructor() {
    super();

    this.state = {
      userLocation: "NA",
      foodType: "NA",
      currentPickName: "",
      currentPickPrice: "",
      userPrice: "NA",
      randomIndex: null,
      lat: 14.4,
      lng: -7.7,
      photo: ''
    };
    //this.handleChange = this.handleChange.bind(this);
    this.priceEquals = this.priceEquals.bind(this);
  }
  componentDidMount() {
    //console.log(process.env);
  }
  handleChangeLocation(value) {
    this.setState({ userLocation: value });
  }

  handleChangeFoodType(value) {
    this.setState({ foodType: value });
  }

  handleChangeUserPrice(value) {
    this.setState({ userPrice: value });
  }


  priceEquals(price) {
    if (this.state.currentPickPrice === price) {
      console.log("PRICE MATCH!");
      return true;
    }
    return false;
  }

  handleSubmit() {
    var userLocation = this.state.userLocation;

    var foodType = this.state.foodType;
    var userPrice = this.state.userPrice;
    var whatToGet = `/getdata/` + foodType + " in " + userLocation;
    console.log(whatToGet);
    axios
      .get(whatToGet)
      .then(results => {
        this.setState({ dataArr: results.data });
        var myRand = getRandomInt(this.state.dataArr.length - 1);
        var myRandomObject = results.data[myRand];
        console.log('myRandomObject: ', myRandomObject);
        this.setState({
          currentPickPrice: myRandomObject.price_level,
          currentPickName: myRandomObject.name,
          lat: myRandomObject.geometry.location.lat,
          lng: myRandomObject.geometry.location.lng,
          addr: myRandomObject.formatted_address,
          photo: myRandomObject.photos[0].photo_reference
        });
     

        var attempts = 0;
        while (attempts < 10) {
          if (this.priceEquals(userPrice)) {
            attempts = 11;
          }
          attempts++;
        }

        console.log("RANDOM_OBJECT: " + myRandomObject);
        // console.log("-name: " + myRandomObject.name);
        // console.log("-LAT: " + myRandomObject.geometry.location.lat);
        // console.log("-LNG: " + myRandomObject.geometry.location.lng);
        // console.log("-ADDRESS: " + myRandomObject.formatted_address);
        console.log(this.state.photo);
        // .photo_reference)
      })
      .then(() => {
        axios
          .get(`/api/img?photoreference=${this.state.photo}`)
          .then(response => {
            this.setState({ imgURL: response.data });
            console.log(response);
          })
          .catch(err => console.log(err));
      });
  }
  handleKeyPress = (event) => {
    if(event.key == 'Enter'){
      console.log('enter press here! ')
    }
  }
  render(formInstance) {
    return (
      <div className="form-body">
        <div className="flexContainer">
          <div className="inputDivContainer">
            <div className="inputDiv">
              <label>Where you at?</label>
              <input
                className="input-1"
                onChange={e => this.handleChangeLocation(e.target.value)}
              />
            </div>
            <div className="inputDiv">
              <label>What type of food are you hungry for?</label>
              <input
                className="input-2"
                onChange={e => this.handleChangeFoodType(e.target.value)}
                onKeyPress={this.handleKeyPress}
              />
            </div>
            <div className="inputDiv">
              <ButtonToolbar>
                <DropdownButton title="price" id="dropdown-size-medium">
                  <MenuItem
                    eventKey={e => this.handleChangeUserPrice(e.target.value)}
                  >
                    $
                  </MenuItem>
                  <MenuItem
                    eventKey={e => this.handleChangeUserPrice(e.target.value)}
                  >
                    $$
                  </MenuItem>
                  <MenuItem
                    eventKey={e => this.handleChangeUserPrice(e.target.value)}
                  >
                    $$$
                  </MenuItem>
                  <MenuItem
                    eventKey={e => this.handleChangeUserPrice(e.target.value)}
                  >
                    $$$$
                  </MenuItem>
                </DropdownButton>
              </ButtonToolbar>
              <ButtonToolbar>
                <DropdownButton title="distance" id="dropdown-size-medium">
                  <MenuItem>5 miles</MenuItem>
                  <MenuItem>10 miles</MenuItem>
                  <MenuItem>20 miles</MenuItem>
                  <MenuItem>30 miles</MenuItem>
                  <MenuItem>50 miles</MenuItem>
                </DropdownButton>
              </ButtonToolbar>
            </div>
          </div>
        </div>

        <div className="button-box">
          <button className="subButton" onClick={() => this.handleSubmit()}>
            SUBMIT
          </button>
        </div>

        <div className="resultBox">
          <h1>{this.state.currentPickName}</h1>
          <h1>{this.state.addr}</h1>
          {console.log('shea:', this.state.photo)}
          <img
            src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&key=${process.env.REACT_APP_API_KEY}&photoreference=${this.state.photo}`}
            onError={e =>
              (e.target.src =
                "https://fyfcl.com/waynemanor/wp-content/plugins/wp-voting-contest/assets/image//img_not_available.png")
            }
          />
          <p>Price level: {this.state.currentPickPrice}</p>
          <div>
            Been Here?:{" "}
            <Link to="/Review">
              <Button>Leave a Review</Button>
            </Link>
          </div>
        </div>

        <Maps />
      </div>
    );
  }
}

export default Foodform;
