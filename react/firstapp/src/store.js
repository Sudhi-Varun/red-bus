import create from 'zustand';

export const useStore = create((set) =>(
       {
        show: 'start',
        setShow: (show) => set({show})
       }
    
));