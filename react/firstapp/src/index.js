import ReactDOM from 'react-dom/client';
import Form from './form.js';
import { useStore } from './store.js';
import Seatlist from './seatlist.js';
import Ticket from './ticket.js';
import Signin from './signin.js';
function OnHome() {

    const show = useStore((state) => state.show);  

    if (show === 'signin')
        return (
            <>
            <Signin/>
            </>
        );

    if(show === 'start')
        return (
            <>
                <Form/>
            </>
        );

    if (show === 'seats')
        return (
            <>
                <Seatlist/>
            </>
        );

    if (show === 'Ticket')
        return (
            <>
            <Ticket/>
            </>
         );
      
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OnHome/>);