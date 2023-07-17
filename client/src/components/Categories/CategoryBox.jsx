import React from 'react';
import qs from 'query-string'
import { useNavigate, useSearchParams } from 'react-router-dom';

const CategoryBox = ({ label, icon: Icon }) => {

    const { params, setParams } = useSearchParams();
    const navigate = useNavigate();

    const handleClick = () => {
        let currenQuery = {};
        if (params) {
            currenQuery = qs.parse(params.toStrigify());
        }
        const updatedQuery = {
            ...currenQuery,
            category: label,
        }
        const url = qs.stringifyUrl(
            {
                url: '/',
                query: updatedQuery
            },
            {
                skipNull: true,
            }

        )

        navigate(url)
    }


    return (
        <div onClick={handleClick} className='flex cursor-pointer flex-col justify-center items-center gap-2 p-3 border-b-2 border-transparent transition hover:text-neutral-800 text-neutral-500'>
            <Icon size='26' />
            <div className='text-sm font-medium'>{label}</div>
        </div>
    );
};

export default CategoryBox;