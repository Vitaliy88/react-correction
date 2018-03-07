import React, { Component } from 'react';



class BackgroundColor extends Component {
  render() {
    return (
      <div className="App">
      <form name="colorForm">
      <h6>Select Background Color</h6>
      <input name="colorpicker" type="color" onChange={(color) =>{
    // var bac = document.querySelector(".item_grid:nth-child(3)");
    // console.log(bac);
    document.querySelector(".item_grid:nth-child(3)").style.backgroundColor = color;
    }
      }/>
      </form>
      </div>

    );
  }
}

export default BackgroundColor;
