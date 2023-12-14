import create from 'zustand';

export const useStore = create((set) =>(
       {
        show: 'start',
        setShow: (show) => set({ show }),

        selectedseat: "",
        setSelectedseat: (selectedseat) => set({ selectedseat }),

        availableseats: ["Seat 2", "Seat 3", "Seat 8", "Seat 12", "Seat 13", "Seat 15", "Seat 16", "Seat 17", "Seat 18", "Seat 19"],
        setAvailableseats: (availableseats) => set({ availableseats }),

        bookedseats: ["Seat 1", "Seat 4", "Seat 5", "Seat 6", "Seat 7", "Seat 9", "Seat 10", "Seat 11", "Seat 14", "Seat 20"],
        setBookedseats: (bookedseats) => set({ bookedseats })

       }
    
));