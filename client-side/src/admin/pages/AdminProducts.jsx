import React from 'react';
import styled from 'styled-components';

const AdminProducts = () => {
    return (
        <Container>
            <div className='admin-products'>
            Admin Products
        </div>
        </Container>
    );
};

const Container = styled.div`
    .admin-products {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export default AdminProducts;