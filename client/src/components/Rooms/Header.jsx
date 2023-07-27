import React from 'react';
import Heading from '../Heading/Heading';

const Header = () => {
    return (
        <>
            <Heading    
                title={'No Rooms Available In This Category !'}
                subtitle={'Please Select Another Categories.'}
            />
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img className='object-cover w-full' src="" alt="Header image" />
                image will goes here.......
            </div>
        </>
    );
};

export default Header;