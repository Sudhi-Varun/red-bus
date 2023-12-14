import ReactDOM from 'react-dom/client';
import Form from './form.js';
import { useStore } from './store.js';
import Seatlist from './seatlist.js';
function OnHome() {

    const show = useStore((state) => state.show);  
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
      
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<OnHome/>);