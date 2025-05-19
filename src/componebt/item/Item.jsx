import React from 'react'
import styles from './item.module.css'

const Item = (props) => {
  return (
            <div className={styles.item}>
              <img src={props.ima} alt="foto" />
          <h3>{props.h3 }</h3>
              <p>{props.p }</p>
              <button>Saiba Mais</button>
          </div>
  )
}

export default Item
