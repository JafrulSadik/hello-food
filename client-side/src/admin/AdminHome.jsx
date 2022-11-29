import React from 'react'
import styled from 'styled-components'
import AdminNav from '../admin_component/AdminNav'


const AdminHome = () => {
  
  return (
    <Adminhome >
        <AdminNav/>
    </Adminhome>
  )
}

const Adminhome = styled.div`
  background-color: #fcf8f8;
  height: 100vh;
  width: 100vw;
`

export default AdminHome