import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const AdminHeader = () => {
    return (
        <HeaderContainer>
            <div className="left">Welcome, <span>Hello Food</span> Admin</div>
            <div className="right">
                <Link className='logoutBtn'>
                    Logout
                </Link>
            </div>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 10px;
    padding-bottom: 15px;
    border-bottom: 1px solid lightgray;
    .left > span {
        color: green;
        font-weight: 600;
    }
    .logoutBtn {
        text-decoration: none;
        color: white;
        background-color: green;
        padding: 8px 14px;
        border-radius: 12px;
    }
`

export default AdminHeader;