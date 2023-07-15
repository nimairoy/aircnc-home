import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import MenuDropdown from './MenuDropdown';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className="border-b-[1px] py-4">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">

                        <Logo></Logo>
                        <Search></Search>
                        <MenuDropdown></MenuDropdown>

                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;