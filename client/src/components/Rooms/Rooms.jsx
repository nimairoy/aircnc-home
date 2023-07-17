import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import Loader from '../Shared/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Rooms = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')
    console.log(category)

    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                if(category){
                    const filtered = data.filter(room => room.category === category);
                    setRooms(filtered);
                }
                else{
                    setRooms(data)
                }
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [category])


    if(loading){
        <Loader />
    }


    return (
        <Container>
            <div className="grid pt-12 sm:gap-0 md:gap-3 lg:gap-4 xl:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                {
                    rooms.map((room, index) => <Card room={room} key={index} />)
                }
            </div>
        </Container>
    );
};

export default Rooms;