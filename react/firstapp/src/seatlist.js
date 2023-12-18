import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { details } from "./global_vars.js";
import { useStore } from './store.js';


function BookButton() {
    const setShow = useStore((state) => state.setShow);
    const selectedseat = useStore((state) => state.selectedseat)
    function BookSeat() {
        var fetch_url = 'http://localhost:3000/test/' + details.passenger;
        fetch(fetch_url)
            .then(response => response.text())
            .then((response) => { alert(response+', welcome to Red Bus Booking Portal...')});
        setShow('Ticket');
    }

    if (selectedseat !== '')
        return (
            <>
                <button className="btn btn-primary" onClick={BookSeat}>Book Now!</button>
            </>
        );
    else
        return (null);
}

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

function Selectedseat() {
    const selectedseat = useStore((state) => state.selectedseat)
    

    return (
        <>
            <strong style={{ color: "darkorange" }}>Selected seat: </strong>
            <p>&nbsp;Seat No. {selectedseat}&nbsp;&nbsp;<BookButton></BookButton></p>
            <br />
        </>
    );

}

function Availableseats() {
    const availableseats = useStore((state) => state.availableseats);
    const setSelectedseat = useStore((state) => state.setSelectedseat);
    const selectedseat = useStore((state) => state.selectedseat);
    const setAvailableseats = useStore((state) => state.setAvailableseats);
    
    function selectseat(seatprop) {
        let curr_seat = selectedseat;
        setSelectedseat(seatprop.seat);
        let tmp = [...availableseats];
        //adding the current selected seat to the available seats
        if (curr_seat !== "")
            tmp.push(curr_seat);
        //remove the new selected seat from available seats
        tmp.splice(tmp.indexOf(seatprop.seat), 1);
        tmp.sort();
        setAvailableseats(tmp);
        
    }
    
    return (
        <>
            <strong style={{ color: "darkgreen" }}>Available seats: </strong>
            <br />
            {availableseats.map((seat) => <p>&nbsp;Seat No. <button onClick={() => selectseat({ seat })}>Select</button> &nbsp;{seat}</p >)
            }

        </>
    );

}

function Bookedseats() {
    const bookedseats = useStore((state) => state.bookedseats);

    return (
        <>
            <strong style={{ color: "red" }}>Booked seats: </strong>
            {bookedseats.map((seat) => <p>&nbsp;Seat No. {seat} </p>)}
            <br />
        </>
    );
}


function Seatlist() {
    
    return (
        <>
            <div className="text-center"><span style={{ color: "red", fontSize: 20, fontWeight: "bold" }}>Red Bus</span><span style={{ fontSize: 20, fontWeight: "bold" }}> Booking!</span></div>
            <div className="seat_selector" style={{ backgroundColor: "lightgrey", marginLeft: "30%", marginRight: "30%" }}>
                <div className="text-center" style={{ color: "darkblue" }}><strong>Select your seat here</strong></div>
                <div style={{ marginLeft: "10px" }}>

                    <Passdetails/>
                    <Selectedseat/>
                    <Availableseats/>
                    <Bookedseats />
                    
                    <br/>
                </div>
            </div>
        
        </>
    );
}
export default Seatlist;

