import React, { use } from 'react';

const promise = fetch("/categories.json")
.then((res) => res.json())

const Categories = () => {

    const categories = use(promise)
    console.log(categories);

    return (
        <div>
            <h2 className='font-bold'>All Categories</h2>
        </div>
    );
};

export default Categories;