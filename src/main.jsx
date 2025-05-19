import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import Header from './componebt/header/Header'
import Nav from './componebt/nav/Nav'
import Section from './componebt/section/Section'
import Section2 from './componebt/section2/Section2'
import Section3 from './componebt/section3/Section3'
import Footer from './componebt/footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Nav />
    <Section />
    <Section2 />
    <Section3 />
    <Footer/>
  </StrictMode>,
)
