import React from 'react';
import Container from '../Shared/Container';
import { categories } from './categoriesData';
import CategoryBox from './CategoryBox';

const Categories = () => {
    return (
        <Container>
            <div className="flex flex-row items-center justify-between pt-4 overflow-x-auto">
                {
                    categories.map(item => <CategoryBox icon={item.icon} label={item.label} key={item.label}/>)
                }
            </div>
        </Container>
    );
};

export default Categories;