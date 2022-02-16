import React from "react";
import "./style.css";

export default function App() {
  return (
    <div>
      <div class="header">
        This is Header part
      </div>
      <div class="body_part">
        <div class="navbar">
          This is Navbar part
        </div>
        <div class="container">
          <form action="#">
            <fieldset>
              <legend>Regestration Form</legend>
              <div>
                <lable>Name : </lable>
                <input type="text" placeholder="Full Name" id="name"></input>
                <sup>*</sup> <span id="e_name"></span> <br></br>
              </div>
              <div>
                <lable>Name : </lable>
                <input type="number" placeholder="Contact Number"></input>
                <sup>*</sup> <span id="e_num"></span> <br></br>
              </div>
              <input type="email" placeholder="Email ID" ></input> <sup>*</sup><span></span><br></br>
              <input type="date" ></input><sup>*</sup><span></span><br></br>
              <input type="submit"></input>
              <input type="reset"></input>
            </fieldset>
          </form>
        </div>
      </div>
      <div class="footer">
        This is Footer part
      </div>
    </div>
  );
}
