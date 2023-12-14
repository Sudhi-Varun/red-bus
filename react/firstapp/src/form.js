import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useStore } from './store.js';
import { details } from "./global_vars.js";
const Form = () => {

    const passengerRef = useRef();
    const fromRef = useRef();
    const toRef = useRef();
    const dojRef = useRef();

    const setShow = useStore((state) => state.setShow);
           
       const handleSubmit = (event) => {
           event.preventDefault();

           details.passenger = passengerRef.current.value;
           details.from = fromRef.current.value;
           details.to = toRef.current.value;
           details.doj = dojRef.current.value;
           // fetch api will be used here to send data to api          
           setShow('seats');
       }

      return (
          <div className="text-center"><span style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>Red Bus</span><span style={{ fontSize: 20, fontWeight: "bold" }}> Booking!</span>
              <form onSubmit={handleSubmit}>
                  <div className="form-group" style={{ backgroundColor: "lightgrey", marginLeft: "25%", marginRight: "25%" }}>
                      <br />
                      <label>Pasenger Name:</label><br />
                      <input type="text" ref={passengerRef}></input><br /><br />

                      <label>Source City:</label><br />
                      <input type="text" ref={fromRef}></input><br /><br />

                      <label>Destination City:</label><br />
                      <input type="text" ref={toRef} ></input><br /><br />

                      <label>Date of Journey:</label><br />
                      <input type="date" ref={dojRef} ></input><br /><br />

                      <button style={{ color: "white", backgroundColor: "blue" }}>Submit</button><br />
                      <p>&nbsp;</p>
                  </div>
              </form>
          </div>);
}

export default Form;

