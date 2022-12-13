import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { MdOutlineTask } from 'react-icons/md'

export const sidebarItems = [
    {
        title: 'Home',
        icon: <AiOutlineHome />,
        path: '/admin'
    },
    {
        title: 'Products',
        icon: <BsBagCheck />,
        path: '/admin-products'
    },
    {
        title: 'Users',
        icon: <AiOutlineUser />,
        path: '/users'
    },
    {
        title: 'Orders',
        icon: <MdOutlineTask />,
        path: '/orders'
    },
]