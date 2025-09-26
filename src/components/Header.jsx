import React from 'react'

const Header = () => {
  const user = {
    type: "Patient"
  }

  const isAuthenticated = true

  const getRoutesByUserType = (type) => {
    if (!isAuthenticated) {
      return [
        {
          label: "Login",
          path: "/login"
        },
        {
          label: "Register",
          path: "/register"
        }
      ];
    }
    if (type === "Patient" && isAuthenticated) {
      return [
        {
          label: "Dashboard",
          path: "/patient/dashboard"
        },
        {
          label: "Profile",
          path: "/patient/profile"
        },
        {
          label: "Appointments",
          path: "/patient/appointments"
        }
      ]
    } else if (type === "Doctor" && isAuthenticated) {
      return [
        {
          label: "Dashboard",
          path: "/doctor/dashboard"
        },
        {
          label: "Profile",
          path: "/doctor/profile"
        },
        {
          label: "Appointments",
          path: "/doctor/appointments"
        }
      ]
    }

    return [];
  }

  return (
    <div>
      <h1>Header</h1>
      <div>
        <ul>
          {getRoutesByUserType(user.type).map((route) => (
            <li key={route.path}>
              <a href={route.path}>{route.label}</a>
            </li>
          ))}
        </ul>
        {
          isAuthenticated && (user.type === "Patient" || user.type === "Doctor")
            ? (
            <button>Go To Dashboard</button>
          ) : (
              <button>Login</button>
          )
        }
        <div>
          {
            isAuthenticated && (
              <div>
                <img src="" alt="" />
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Header
