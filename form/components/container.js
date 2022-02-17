import React from "react";
import "./style.css";

export default function Container() {
    return (
        <div>
            <form action="#">
                <fieldset>
                    <legend>Regestration Form</legend>
                    <div>
                        <lable>Name : </lable>
                        <input type="text" placeholder="Full Name" id="name"></input>
                        <sup>*</sup> <span id="e_name"></span> <br></br>
                    </div>
                    <div>
                        <lable>Number : </lable>
                        <input type="number" placeholder="Contact Number"></input>
                        <sup>*</sup> <span id="e_num"></span> <br></br>
                    </div>
                    <div>
                        <lable>Email.ID : </lable>
                        <input type="email" placeholder="Email ID" ></input>
                        <sup>*</sup> <span id="e_email"></span> <br></br>
                    </div>
                    <div>
                        <lable>Date of Birth : </lable>
                        <input type="date" ></input>
                        <sup>*</sup> <span id="e_num"></span> <br></br>
                    </div>
                    <div>
                        <input type="submit"></input>
                        <input type="reset"></input>
                    </div>
                </fieldset>
            </form>

        </div>
    )
}