import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header className='text-center'>
                <Header></Header>
            </header>
            <main className='max-w-sm mx-auto'>
                <section className="left_nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="right_nav"></section>
            </main>
        </div>
    );
};

export default HomeLayout;