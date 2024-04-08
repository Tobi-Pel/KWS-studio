import React from 'react'
import style from './HeroBlock.module.css'
import SubmitButton from '../SubmitButton/SubmitButton'

const HeroBlock = () => {
  return (
    <div className={style.HeroBlock}>
      <h1 className={style.h1}>Разработка и создание сайтов в Кыргызстане</h1>
      <div className={style.rectangle}></div>
      <p className={style.p}>Разрабатываем красивые и продающие сайты, а также CRM-системы под заказ. Приводим новых клиентов. Повышаем узнаваемость Вашего бренда.</p>
      <SubmitButton />
    </div>
  )
}

export default HeroBlock