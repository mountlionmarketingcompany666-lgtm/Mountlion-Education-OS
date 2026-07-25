import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import BottomNav from './components/BottomNav.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Institutions from './pages/Institutions.jsx'
import Connect from './pages/Connect.jsx'
import AI from './pages/AI.jsx'
import Settings from './pages/Settings.jsx'
import NotFound from './pages/NotFound.jsx'

import SignIn from './pages/auth/SignIn.jsx'
import GetStarted from './pages/auth/GetStarted.jsx'
import CreateAccount from './pages/auth/CreateAccount.jsx'
import SelectUserType from './pages/auth/SelectUserType.jsx'

import CreateInstitution from './pages/institution/CreateInstitution.jsx'
import InstitutionDetails from './pages/institution/InstitutionDetails.jsx'
import JoinInstitution from './pages/institution/JoinInstitution.jsx'

import Dashboard from './pages/dashboard/Dashboard.jsx'

import OwnerCenter from './pages/owner/OwnerCenter.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1 pb-16 md:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/institutions/join" element={<JoinInstitution />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/select-user-type" element={<SelectUserType />} />

          <Route path="/create-institution" element={<CreateInstitution />} />
          <Route path="/create-institution/details" element={<InstitutionDetails />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/owner" element={<OwnerCenter />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}
