import React, {useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function Signin() {

    return (
        <>
            <div className="text-center"><span style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>Red Bus</span><span style={{ fontSize: 20, fontWeight: "bold" }}> Booking!</span></div>
            <div className="text-center" style={{ color: "darkblue" }}><strong>Welcome!!!</strong></div>
            <div className="Signin" style={{ backgroundColor: "lightgrey", marginLeft: "30%", marginRight: "30%" }}>
                <div style={{ textAlign: 'center' }}><strong>Sign in</strong></div>
                <Sform/>
                <div style={{ textAlign: 'center' }}><strong></strong>(Or) <br /><strong>create an account here</strong></div>
                <Nform/>
            </div>
       </>
    );
}

function Sform() {

    let uidRef = useRef();
    let passRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
        <div style={{ textAlign:'center' }}>
            <div className="form-group" style={{ backgroundColor: "lightgrey", marginLeft: "25%", marginRight: "25%" }}>
            <br/>
            <label>User ID:</label><br />
            <input type="text" ref={uidRef}></input><br />

            <label>Password:</label><br />
            <input type="password" ref={passRef}></input><br /><br />

                <button style={{ color: "white", backgroundColor: "blue" }}>Submit</button>
            </div> 
        </div>
    </form>);
}

function Nform() {

    let unameRef = useRef();
    let uidRef = useRef();
    let passRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
        <div style={{ textAlign: 'center' }}>
            <div className="form-group" style={{ backgroundColor: "lightgrey", marginLeft: "25%", marginRight: "25%" }}>
                
                <label>User Name:</label><br />
                <input type="text" ref={unameRef}></input><br />

                <label>User ID:</label><br />
                <input type="text" ref={uidRef}></input><br />

                <label>Password:</label><br />
                <input type="password" ref={passRef}></input><br /><br />

                <button style={{ color: "white", backgroundColor: "blue" }}>Create</button>
                <p>&nbsp;</p>
            </div>
        </div>
    </form>);
}


export default Signin;