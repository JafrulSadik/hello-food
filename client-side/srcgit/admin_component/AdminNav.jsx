import { useState } from "react";
import styled from 'styled-components';
import logo from '../images/hello_food_text.png';



const AdminNav = () => {

    const [open, setOpen ] = useState(false);

    const SidebarConfig = {
        widthExtend : {
            width: "300px"
        },
        widthCollapse : {
            width : "0px"
        },
        scale : {
            transform : "scale(0)"
        },
        scaleExtend : {
            transform : "scale(1)"
        }

    }


  return (
    <Wrapper>
        <div className={"sidebar"} style = {open? SidebarConfig.widthExtend : SidebarConfig.widthCollapse}>

            <div className="logo_text">
                <img src={logo} alt="" style={open ? SidebarConfig.scaleExtend :SidebarConfig.scale}/>
            </div>
        
        </div>
        <div className="ul_div">
            <div className="admin_nav">
                <div class="hamburger_menu"  className={open && "change"} onClick={() => setOpen(!open)}>
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                </div>

                <div className="admin_profile_img">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="" />
                </div>
            </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;

    .sidebar{
        min-height: 100vh;
        font-weight: semi-bold;
        background-color: lightcoral;
        position: relative;
        transition-duration: 300ms;
    }




    .logo_text{
        display: flex;
        transition-duration: 5s;
        padding:0 20px;
        height: ;
    }

    .logo_text> img{
        width: 100%;
    }

    .ul_div{
        width: 100%;
        font-size: 15px;
        font-weight: 700;
        height: 80px;
        background-color: coral;
    }

    .admin_nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
    }

    .hamburger_menu{
        display: inline-block;
        cursor: pointer;
    }

    .bar1, .bar2, .bar3 {
        width: 20px;
        height: 2px;
        background-color: #333;
        margin: 6px 0;
        transition: 0.4s;
    }

    .change .bar1 {
        transform: translate(0, 8px) rotate(-45deg);
    }

    .change .bar2 {opacity: 0;}

    .change .bar3 {
        transform: translate(0, -8px) rotate(45deg);
    }


    .admin_profile_img > img{
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
`

export default AdminNav