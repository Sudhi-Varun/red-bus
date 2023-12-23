import React, {useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import { useStore } from './store.js';
function Signin() {

    const [showsignin, Setsignin] = useState('true');
    
    return (
        <>
            <div className="text-center"><span style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>Red Bus</span><span style={{ fontSize: 20, fontWeight: "bold" }}> Booking!</span></div>
            <div className="text-center" style={{ color: "darkblue" }}><strong>Welcome!!!</strong></div>
            <div className="Signin" style={{ backgroundColor: "lightgrey", marginLeft: "30%", marginRight: "30%" }}>
                <Nform showsignin={showsignin} Setsignin={Setsignin} />
                <Sform showsignin={showsignin} Setsignin={Setsignin} />
            </div>
       </>
    );
}
 
function Sform({ showsignin, Setsignin }) {

    const setShow = useStore((state) => state.setShow);    
    let uidRef = useRef();
    let passRef = useRef();

    const switcher = (param) => {
       console.log(param);
       Setsignin(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        var post_url = 'http://localhost:3000/login/';

        let to_send = {
            UserId: uidRef.current.value,
            Password: passRef.current.value
        };
        to_send = JSON.stringify(to_send);

        fetch(post_url, {
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: "POST", body: to_send
        }).then(res => res.json()).then(re => {
            if (re.status === 'Success')
                setShow('start');
            else
                alert('Try again...');
        });
    }

    if (showsignin)
        return (
            <form onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}><strong>Sign in</strong></div>
                <div style={{ textAlign: 'center' }}>
                    <div className="form-group" style={{ backgroundColor: "lightgrey", marginLeft: "25%", marginRight: "25%" }}>
                        <br />
                        <label>User ID:</label><br />
                        <input type="text" ref={uidRef}></input><br />

                        <label>Password:</label><br />
                        <input type="password" ref={passRef}></input><br /><br />

                        <button style={{ color: "white", backgroundColor: "blue" }}>Submit</button>
                    </div>
                    <p>&nbsp;</p>
                    <div onClick={()=>switcher('Switching to create new user')} role="button" style={{ color: 'darkblue' }}>Create a new user</div>
                    <p>&nbsp;</p>
                </div>
            </form>);
    else
        return (null);
}

function Nform({ showsignin, Setsignin }) {

    let unameRef = useRef();
    let uidRef = useRef();
    let passRef = useRef();

    const switcher = (param) => {
      console.log(param);
      Setsignin(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        var post_url = 'http://localhost:3000/newuser/';
        
        let to_send = {
            Name: unameRef.current.value,
            UserId: uidRef.current.value,
            Password: passRef.current.value
        };
        to_send = JSON.stringify(to_send);

        fetch(post_url, {
            headers:
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, method: "POST", body: to_send
        }).then(res => res.json()).then(re => {
            if (re.status === 'Success')
                alert(re.payload);
            else
                alert('Try again...');
        });



    }

    if (!showsignin)
        return (
            <form onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}><strong>create an account here</strong></div>
                <div style={{ textAlign: 'center' }}>
                    <div className="form-group" style={{ backgroundColor: "lightgrey", marginLeft: "25%", marginRight: "25%" }}>
                        <br />
                        <label>User Name:</label><br />
                        <input type="text" ref={unameRef}></input><br />

                        <label>User ID:</label><br />
                        <input type="text" ref={uidRef}></input><br />

                        <label>Password1:</label><br />
                        <input type="password" ref={passRef}></input><br /><br />

                        <button style={{ color: "white", backgroundColor: "blue" }}>Create</button>
                    </div>
                    <p>&nbsp;</p>
                    <div onClick={() => switcher('switching to sign in')} role="button" style={{ color: 'darkblue' }}>Proceed to sign in</div>
                    <p>&nbsp;</p>
                </div>
        </form>);
    else
        return (null);
}


export default Signin;