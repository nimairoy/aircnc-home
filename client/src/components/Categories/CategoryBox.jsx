import React from 'react';

const CategoryBox = ({label, icon:Icon}) => {
    return (
        <div className='flex cursor-pointer flex-col justify-center items-center gap-2 p-3 border-b-2 border-transparent transition hover:text-neutral-800 text-neutral-500'>
            <Icon size='26' />
            <div className='text-sm font-medium'>{label}</div>
        </div>
    );
};

export default CategoryBox;