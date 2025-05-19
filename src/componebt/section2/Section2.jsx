import React from 'react'
import styles from './section2.module.css'

const Section2 = () => {
  return (
      <div className={styles.conteiner}>
          <div className={styles.divsaiba}>
              <h1>Bem vindo ao <br /> <span>Nosso Site</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae illum nesciunt ratione dolores omnis quae reiciendis distinctio eligendi fuga, dicta voluptate sunt corrupti laborum adipisci blanditiis, mollitia officiis commodi modi! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem suscipit officia ex, ab voluptate doloribus optio accusamus iusto eius quas explicabo, ut quis mollitia? Quaerat, ipsum facere. Harum, ipsam est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt in totam nisi sunt vero officia non amet alias sed ipsam, inventore natus vitae tempore distinctio velit rem dolore possimus temporibus?</p>
              <button>Saiba mais</button>
          </div>
          <div className={styles.divimg}>
                <img src="pc.avif" alt="foto" />
          </div>
    </div>
  )
}

export default Section2
