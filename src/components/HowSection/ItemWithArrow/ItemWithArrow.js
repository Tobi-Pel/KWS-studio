import React from 'react'
import style from './ItemWithArrow.module.css'

const ItemWithArrow = ({clicked , src , text , ...props}) => {
  return (
    <div {...props} className={clicked ? style.ItemWithArrowMoved : style.ItemWithArrow}>
    <div className={style.circle}>
        <img className={style.image} src={src}/>
    </div>
      <div className={style.collector}>
        <h1 className={style.H1}>{text}</h1>
        <div className={clicked ? style.line : style.lineNone}></div>
      </div>
    </div>
  )
}

export default ItemWithArrow
