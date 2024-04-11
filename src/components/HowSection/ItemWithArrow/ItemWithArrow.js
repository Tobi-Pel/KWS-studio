import React from 'react'
import style from './ItemWithArrow.module.css'
import Arrow from '../../../assets/arrow.png'

const ItemWithArrow = ({clicked , src , text , ...props}) => {
  return (
    <div {...props} className={style.ItemWithArrow}>
    <div className={style.circle}>
        <img className={style.image} src={src}/>
    </div>
      <div className={style.collector}>
        <h1 className={style.H1}>{text}</h1>
        <img src={Arrow} className={clicked ? style.line : style.lineNone}/>
      </div>
    </div>
  )
}

export default ItemWithArrow
