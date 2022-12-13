import React, { useState } from 'react';
import styled from 'styled-components';
import './AdminNavbar.css';

const AdminNavbar = () => {
    const [open , setOpen] = useState(false);

    const SidebarClass = {
        openNav : {
            width : "250px",
            marginLeft : "250px"
        },
        closeNav : {
            width : "0px",
            marginLeft : "0px"
        }
    }

  return (
        <Wrapper id="mySidenav" className="sidenav" style={open ? SidebarClass.openNav : SidebarClass.closeNav}>
            <div>
                <a href="" className="closebtn" onClick={()=> setOpen(false)} >&times;</a>
                <a href="/">About</a>
                <a href="/">Services</a>
                <a href="/">Clients</a>
                <a href="/">Contact</a>
            </div>

            <div id="main">
                <h2>Sidenav Push Example</h2>
                <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
                <span style={{fontSize:"30px", cursor:"pointer"}} onClick={()=> setOpen(true)}>&#9776; open</span>
            </div>
        </Wrapper>
  )
}

const Wrapper = styled.div`

    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    #main {
        transition: margin-left .5s;
        padding: 16px;
    }
`

export default AdminNavbar