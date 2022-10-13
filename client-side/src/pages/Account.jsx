import React from 'react';
import ProductCard from '../components/ProductCard';
import { AllProductItems } from '../data';

const Account = () => {
    return (
        <div>
            {
                AllProductItems.map((item) => {
                    return <ProductCard item={item} />
                })
            }
        </div>
    );
};

export default Account;