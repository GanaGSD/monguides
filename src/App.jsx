// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Home from './components/common/Home'
import DestinationsPage from './pages/DestinationsPage'
import Magazine from './components/home/Magazine'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/magazine" element={<Magazine />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App