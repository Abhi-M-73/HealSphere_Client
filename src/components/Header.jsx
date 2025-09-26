import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Stethoscope } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import getRoutesByUserType from "../utils/getRoutesByUserType"

const Header = () => {
  const user = {
    type: "Patient",
    name: "Abhishek"
  }

  const isAuthenticated = true


  return (
    <div className='flex items-center justify-between py-4 px-16 shadow fixed w-full top-0 left-0 z-50 bgColor'>

      <div className='flex items-center gap-10'>
        <Link to="/" className='flex items-center gap-2'>
          <span className='text-2xl bgGradient p-2 rounded-lg'><Stethoscope className='text-white' /></span>
          <h1 className='text-3xl font-bold textGradient'>HealSphere</h1>
        </Link>
        <div className='flex gap-4'>
          {getRoutesByUserType(user.type, isAuthenticated).map((route) => (
            <NavLink className={({ isActive }) => isActive ? "textGradient font-semibold" : "font-medium"} to={route.path} key={route.path}>
              <h3>{route.label}</h3>
            </NavLink>
          ))}
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div>
          {
            isAuthenticated && (
              <div className='flex items-center gap-2'>
                <h3 className='font-medium'>{user.name}</h3>
                <Avatar>
                  <AvatarImage src={user?.profileImage} alt={user?.name} />
                  <AvatarFallback className="font-semibold" >{user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
              </div>
            )
          }
        </div>

        <div>
          {
            isAuthenticated && (user.type === "Patient" || user.type === "Doctor")
              ? (
                <Button className='btnColor'>Dashboard</Button>
              ) : (
                <Button className='btnColor'>Login</Button>
              )
          }
        </div>
      </div>
    </div>
  )
}

export default Header
