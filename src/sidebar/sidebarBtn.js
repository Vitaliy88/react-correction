import React, { Component } from 'react';


function UserGreeting(props) {
   return (
    
    <div id="toggle_btn" onClick={(event) => {
     document.getElementById('sidebar').classList.toggle('active');
    }}>
             <span></span>
             <span></span>
             <span></span>
             </div>
 );;
}


export default UserGreeting;
