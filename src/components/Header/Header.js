import React from 'react'
import style from './Header.module.css'

const header = () => {
  return (
    <div className={style.Header}>
      <img 
        src={'https://s3-alpha-sig.figma.com/img/0737/203c/c35724fa8f6701bfcaf1f4fac3d4d9f1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B4GmluOTAeXuaRHJG5OVfQuI1nxx9fi~DjLelwhN2Y1k8UKZ4cOoZzoqSHG014a4X3LufazebMRhHVhCjXcpYEuuQZy9Yt3YwjgXwQ-mkQh7-Qc6bPW3KtPQcS8SQ~zzwhaPMpa1AVjFeTogVi-hs7eH0OLW5bO~NeDyOp67AtIBkWbeRvHXKFZfdVcX-JdBJAmCmmI3xTakZtbo8Ui0SDp722aD1AM0ZI1bFxEm0g9cMgMQv-fAp~E5A-QgRSwxhGHP98JjRyoYDRYSNcQWqeKjKlfgpKWHGfsdUvgKu6Iuwwn5SGG0GZbvBzoVJXhafU3WYs~MAIVdjFGb3sSiVw__'}
        className={style.image}
      />
      <div className={style.Navbar}>
          <a href={'#'} className={style.a}>Главная</a>
          <a href={'#'} className={style.a}>О нас</a>
          <a href={'#'} className={style.a}>Как мы работаем</a>
          <a href={'#'} className={style.a}>Цены</a>
          <a href={'#'} className={style.a}>Контакты</a>
      </div>
    </div>
  )
}

export default header
