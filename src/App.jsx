import React, { useEffect } from 'react'
import Header from './components/Header'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const user = {
    type: "Patient"
  }

  const isAuthenticated = true
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      if (user.type === "Patient") navigate("/patient/dashboard");
      else if (user.type === "Doctor") navigate("/doctor/dashboard");
    }
  }, []);

  return (
    <div className="">
      <Header />
    </div>
  )
}

export default App
