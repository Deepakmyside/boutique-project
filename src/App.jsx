import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import WomenClothing from './pages/WomenClothing'
import CoversMaking from './pages/CoversMaking'
import Alterations from './pages/Alterations'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="women-clothing" element={<WomenClothing />} />
        <Route path="covers-making" element={<CoversMaking />} />
        <Route path="alterations" element={<Alterations />} />
      </Route>
    </Routes>
  )
}
