import { details } from "./global_vars.js";
import { useStore } from './store.js'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


function Passdetails() {
    return (
        <>
            <p><strong>Name: &nbsp;</strong>{details.passenger}</p>
            <p><strong>From: &nbsp;</strong>{details.from}</p>
            <p><strong>To: &nbsp;</strong>{details.to}</p>
            <p><strong>Date of Journey: &nbsp;</strong>{details.doj}</p>
        </>
    );
}

function Ticket() {

    const selectedseat = useStore((state) => state.selectedseat)
    const setShow = useStore((state) => state.setShow);
    const bookedseats = useStore((state) => state.bookedseats);
    const setBookedseats = useStore((state) => state.setBookedseats);
    const setSelectedseat = useStore((state) => state.setSelectedseat);

        function Again() {
            let tmp = [...bookedseats];
            tmp.push(selectedseat);
            tmp.sort();
            setBookedseats(tmp);
            setSelectedseat('');
            setShow('start');
        }

    return (
        <>
            <div className="text-center"><span style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>Red Bus</span><span style={{ fontSize: 20, fontWeight: "bold" }}> Booking!</span></div>
            <div className="text-center" style={{ color: "darkblue" }}><strong>Print this ticket</strong></div>
            <div className="FinalTicket" style={{ backgroundColor: "lightgrey", marginLeft: "30%", marginRight: "30%" }}>
                <p><strong>Seat No: </strong>{selectedseat}</p>
                <Passdetails />
                <div style={{ textAlign: 'center' }}><button className="btn btn-success" onClick={Again}>Book Another Seat</button></div>
                <br/>
            </div>
        </>
    );
}

export default Ticket;