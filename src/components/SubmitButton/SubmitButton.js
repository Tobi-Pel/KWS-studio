import React from 'react'
import style from './SubmitButton.module.css'

const SubmitButton = ({...props}) => {
  return (
    <button className={style.SubmitButton} {...props}>
      Оставить заявку
    </button>
  )
}

export default SubmitButton
