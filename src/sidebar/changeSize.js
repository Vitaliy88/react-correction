import React, { Component } from 'react';


class ChangeSize extends Component {
  render() {
    return (
      <div >
       Enter size: <input type="text" id="change"/> <br/>
       <button onClick={()=>{
            var num = document.getElementById("change").value;
            var bac = document.querySelector(".item_grid:nth-child(3)");
            if ( parseInt(num) != num ) {
              alert("Size must be integer");
              
            }    
           else if ( num >= 8 && num <= 24){
               bac.style.fontSize = num + 'px';
            } else {
              alert("You entered wrong size, it must be from 8 to 24");
            } 
          }
       }>Put on </button> 
      </div>
    );
  }
}

export default ChangeSize;