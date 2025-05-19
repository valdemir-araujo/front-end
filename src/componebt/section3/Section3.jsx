import React from 'react'
import styles from './section3.module.css'
import Item from '../item/Item'

const Section3 = () => {
  return (
      <div className={styles.conteiner}>
          <Item h3='Criação de sites' p='“Uma maneira de vender para um consumidor no futuro é simplesmente o sua permissão com antecedência.” Seth Godin, um dos principais autores de livros sobre marketing no mundo e membro do Hall da Fama do Marketing Direto' ima='pc.avif'/>
          <Item h3='Hospedagem de sites' p='“Se você for realmente relevante para o público, ele prestará atenção em você.” – Martha Gabriel, escritora, palestrante e consultora de marketing digital.estratégia no Content Marketing Instituteestratégia no Content' ima='hos.webp'/>
          <Item h3='Manutenção de sites' p='“O bom conteúdo é a melhor ferramenta de vendas do mundo.” – Marcus Sheridan, considerado um guru do marketing digital e presidente do The Sales Lion estratégia no Content Marketing Institute estratégia no Content Marketing' ima='ma.webp'/>
    </div>
  )
}

export default Section3
