import React from 'react'
import styles from './nav.module.css'

const Nav = () => {
  return (
      <div className={styles.conteiner}>
          <div><img src="logo4.jpg" alt="logo" id={styles.logo3} /></div>
          <nav>
              <a href="#">Home</a>
              <a href="#">Empresa</a>
              <a href="#">Serviços</a>
              <a href="#">Portifolio</a>
              <a href="https://github.com/valdemir-araujo" target='_blanc'>Meu GIT-HUB</a>
              <a href="#" id={styles.contato}>Contato</a>
          </nav>
      </div>
      
      
  )
}

export default Nav
