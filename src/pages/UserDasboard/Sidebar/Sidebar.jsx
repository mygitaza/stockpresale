import React from 'react'
import './Sidebar.css'
import userIcon from '../../../assets/userIcon.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLogoutUserMutation } from '../../../redux/api/userApi'
import { useDispatch } from 'react-redux'
import { logOut } from '../../../redux/slices/authSlice'

const Sidebar = () => {
    const [logoutUser] = useLogoutUserMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () =>{
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        if(!confirmLogout) return;
        try {
            await logoutUser().unwrap();
            dispatch(logOut());
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            navigate("/")
        } catch (error) {
            console.error(error, 'Failed to logout')
        }
    }

  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
            <div className="sidebar-nav">
            <NavLink to='/dashboard' end className="navlink dashclass"> Dash board</NavLink>
                <NavLink to='/dashboard/add-stock' className="navlink"> Get Stock</NavLink>
                <NavLink to='/dashboard/view-stock' className="navlink"> View Stock</NavLink>
                <hr />
            </div>
            <div className="sidebar-logout">
                <button onClick={handleLogout} className='sidebar-logout-btn'>Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar