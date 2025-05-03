import React from 'react';
import { Outlet, useLoaderData, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation()
    const data = useLoaderData();
    return (
        <div>
            <header className=''>
                <Header></Header>
                {import.meta.env.VITE_name}
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews key={data.id} data={data}></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto'>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-2 sticky top-2 h-fit'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-8">

                   {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} 

                </section>
                <aside className='col-span-2 sticky top-2 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;