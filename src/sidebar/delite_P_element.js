import React, { Component } from 'react';

class Delite_P_Element extends Component {
  render() {
    return (
      <div >
             <h6>If you watn to delite p element, pras this button</h6>
            <button  type="button" id="but" onClick={() => {
                    var idName = document.getElementsByTagName('p');
                    idName[idName.length -1].remove();
            }     
            }>  Delete  </button>
      </div>
    );
  }
}

export default Delite_P_Element;