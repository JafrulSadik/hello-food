import React from 'react';
import styled from 'styled-components';
import AdminHeader from '../components/AdminHeader';

const AdminHome = () => {
    return (
        <>
            <AdminHeader />
           <Container>
                <div className='home'>Home</div>
           </Container>
        </>
    );
};

const Container = styled.div`
    .home {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export default AdminHome;