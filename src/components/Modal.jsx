import {X} from 'lucide-react'
import { useRef } from 'react';

import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Modal = ({tripTitle, onClose}) => {
    const modalRef = useRef();
    const navigate = useNavigate()
    const {user} = useAuth()




    const closeModal = (e)=>{
        if(modalRef.current===e.target){
            onClose()
        }
    }
      const toBooking =  () => {
        navigate('/dashboard/touristbookings')
}

    return (
        <div ref={modalRef} onClick={closeModal} className="bg-slate-900 fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-20 lg:w-full]">
            <div className='flex flex-col'> 
                <button onClick={onClose} className='place-self-end -mr-3 bg-blue-700 text-white hover:bg-red-600 -mb-4 z-30 rounded-full'><X size={30} /></button>
                <div className='bg-white rounded-xl px-10 flex flex-col items-center border-2 p-4 over'>
                        <h2 className='text-3xl'>{tripTitle} is booked</h2>
                        <button onClick={toBooking} className='mybtn border-b-green-700 btn-accent my-4'>My Booking Page</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;