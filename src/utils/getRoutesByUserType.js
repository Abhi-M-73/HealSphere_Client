const getRoutesByUserType = (type, isAuthenticated) => {
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


export default getRoutesByUserType;