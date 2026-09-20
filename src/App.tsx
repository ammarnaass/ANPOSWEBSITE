import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Features from './pages/Features'
import Downloads from './pages/Downloads'
import Pricing from './pages/Pricing'
import Client from './pages/Client'
import Support from './pages/Support'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/client" element={<Client />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
