import create from 'zustand';

export const useStore = create((set) =>(
       {
        show: 'start',
        setShow: (show) => set({ show }),

        selectedseat: "",
        setSelectedseat: (selectedseat) => set({ selectedseat }),

        availableseats: ["02", "03", "08", "12", "13", "15", "16", "17", "18", "19"],
        setAvailableseats: (availableseats) => set({ availableseats }),

        bookedseats: ["01", "04", "05", "06", "07", "09", "10", "11", "14", "20"],
        setBookedseats: (bookedseats) => set({ bookedseats }),

       }
    
));