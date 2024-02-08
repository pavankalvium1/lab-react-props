import React, { Component } from "react";
import "./App.css";
import DataComponent from "./Components/DataComponents";

export default class AppClass extends Component {
  
  render(){
       var elephant=this.props.value;
   
    return(
      <div className="app">
      <h1>Kalvium gallary</h1>
      <div className='imgContainer'>
      {
        elephant.map((images)=>(
          <img src={images.img} />
        ))
      }
      </div>
    </div>
    )
  }
}