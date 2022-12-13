import React from 'react';
import styled from 'styled-components';

const Users = () => {
    return (
        <Container>
            <div className="users">
                All Users
            </div>
        </Container>
    );
};

const Container = styled.div`
    .users {
        display: flex;
        justify-content: center;
        align-items: center;
    }

`

export default Users;