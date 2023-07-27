import React from 'react';
import Calender from './Calender';
import Button from '../Buttons/Button';

const RoomReservation = () => {
    return (
        <div className='bg-white border-[1px] border-neutral-200 rounded-xl overflow-hidden'>
            <div className="flex flex-row gap-1 p-4 items-center">
                <div className='text-2xl font-semibold'>$ 200</div>
                <div className='text-neutral-600 font-light'> night</div>
            </div>
            <hr />
            <div className="text-center">
                <Calender></Calender>
            </div>
            <hr />
            <div className='p-4'>
                <Button label={'Reserve'}></Button>
            </div>
            <hr />
            <div className="flex flex-row text-lg font-semibold justify-between gap-1 p-4 items-center">
                <div>$ 200</div>
                <div> night</div>
            </div>
        </div>
    );
};

export default RoomReservation;