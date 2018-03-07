import React, { Component } from 'react';


class FontPage extends Component {
  render() {
    return (
        <form name="f1">
        <h6>Select Font page</h6>
        Font:<br/>
        <select name="Bradley Hand, cursive" id="s1">
            <option value="" >Current</option>
          <option value="Impact, fantasy" >Impact</option>
          <option value="Snell Roundhand, cursive">Snell</option>
          <option value="Courier New, monospace">Courier</option>
        </select>
        <input type="button" onClick={() => {
                var a=document.getElementById('s1').value;
                var bac = document.querySelector(".item_grid:nth-child(3)");
              bac.style.fontFamily = a;
                }
        } value="ok"/>
        </form>
    );
  }
}

export default FontPage;


