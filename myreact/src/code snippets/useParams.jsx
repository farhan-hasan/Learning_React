import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {

    let {id,name} = useParams();

    return (
        <div>
            <Menu/>
            <p>ID : {id}</p>
            <p>Name : {name}</p>
            <h1>This is ProductPage</h1>
        </div>
    );
};

export default ProductPage;